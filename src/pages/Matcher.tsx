import { useState, useEffect } from "react";
import { Client } from "@gradio/client";

const Matcher = () => {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  type MatchResult = {
    percent: number;
    score: number;
    matched_keywords: string[];
    suggested_keywords: string[];
  };

  type HistoryItem = {
    id: string;
    timestamp: string;
    resumePreview: string;
    jobPreview: string;
    result: MatchResult;
    resumeText: string;
    jobDescription: string;
  };

  const [result, setResult] = useState<MatchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Load history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem("resumeMatchHistory");
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error("Error loading history:", e);
      }
    }
  }, []);

  // Save to localStorage whenever history changes
  useEffect(() => {
    localStorage.setItem("resumeMatchHistory", JSON.stringify(history));
  }, [history]);

  const saveToHistory = (matchResult: MatchResult) => {
    const historyItem: HistoryItem = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      resumePreview:
        resumeText.substring(0, 100) + (resumeText.length > 100 ? "..." : ""),
      jobPreview:
        jobDescription.substring(0, 100) +
        (jobDescription.length > 100 ? "..." : ""),
      result: matchResult,
      resumeText: resumeText,
      jobDescription: jobDescription,
    };
    setHistory((prev) => [historyItem, ...prev.slice(0, 9)]); // Keep last 10 items
  };

  const loadFromHistory = (item: HistoryItem) => {
    setResumeText(item.resumeText);
    setJobDescription(item.jobDescription);
    setResult(item.result);
    setError("");
    setShowHistory(false);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("resumeMatchHistory");
  };

  const deleteHistoryItem = (id: string) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  };

  const handleMatch = async () => {
    if (!resumeText.trim() || !jobDescription.trim()) {
      setError("Please fill in both resume and job description");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Use environment variables for configuration
      const spaceId =
        import.meta.env.VITE_HUGGINGFACE_SPACE_ID || "TahaAaqib/resume-ml-api";
      const endpoint = import.meta.env.VITE_API_ENDPOINT || "/predict";

      // Use the official Gradio client
      const client = await Client.connect(spaceId);

      const result = await client.predict(endpoint, {
        resume: resumeText,
        job: jobDescription,
      });

      // Gradio client returns data in result.data format
      const [matchPercent, matchedKeywords, suggestedKeywords] =
        result.data as [string, string, string];

      // Convert to your expected format
      const formattedResult = {
        percent: parseFloat(matchPercent),
        score: parseFloat(matchPercent) / 100,
        matched_keywords: matchedKeywords
          .split(", ")
          .filter((k: string) => k.trim()),
        suggested_keywords: suggestedKeywords
          .split(", ")
          .filter((k: string) => k.trim()),
      };

      setResult(formattedResult);
      saveToHistory(formattedResult);
    } catch (err) {
      console.error("Connection error:", err);
      if (err instanceof Error) {
        if (
          err.message.includes("Failed to fetch") ||
          err.name === "TypeError"
        ) {
          setError(
            "Cannot connect to Hugging Face API. Please check your internet connection."
          );
        } else {
          setError(`Error: ${err.message}`);
        }
      } else {
        setError(
          "An unexpected error occurred. Check the console for details."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setResumeText("");
    setJobDescription("");
    setResult(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-8">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Resume Matcher
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload your resume and job description to get instant AI-powered
            analysis
          </p>

          {/* History Toggle Button */}
          <div className="mt-6 flex justify-center space-x-4">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg"
            >
              {showHistory ? "📊 Hide History" : "📚 View History"}
              {history.length > 0 && (
                <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                  {history.length}
                </span>
              )}
            </button>
            {history.length > 0 && (
              <button
                onClick={clearHistory}
                className="bg-red-500 text-white px-4 py-3 rounded-xl font-semibold hover:bg-red-600 transition-all"
              >
                🗑️ Clear All
              </button>
            )}
          </div>
        </div>

        {/* History Panel */}
        {showHistory && (
          <div className="mb-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3">📚</span>
              Match History
            </h3>

            {history.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <div className="text-4xl mb-4">📝</div>
                <p>No matches saved yet. Complete a match to see it here!</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {history.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-all"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 mb-2">
                          {new Date(item.timestamp).toLocaleString()}
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <strong className="text-blue-600">Resume:</strong>
                            <p className="text-gray-600 mt-1">
                              {item.resumePreview}
                            </p>
                          </div>
                          <div>
                            <strong className="text-purple-600">Job:</strong>
                            <p className="text-gray-600 mt-1">
                              {item.jobPreview}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row items-center space-x-3 ml-4">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">
                            {Math.round(item.result.percent)}%
                          </div>
                          <div className="text-xs text-gray-500">
                            {item.result.matched_keywords.length} keywords
                          </div>
                        </div>

                        <div className="flex flex-col space-y-1 mt-3">
                          <button
                            onClick={() => loadFromHistory(item)}
                            className="bg-blue-500 text-white px-5 py-1 rounded-lg text-xs hover:bg-blue-600 transition-all"
                          >
                            Load
                          </button>
                          <button
                            onClick={() => deleteHistoryItem(item.id)}
                            className="bg-red-500 text-white px-3 py-1 mt-2 rounded-lg text-xs hover:bg-red-600 transition-all"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.result.matched_keywords
                        .slice(0, 5)
                        .map((keyword, idx) => (
                          <span
                            key={idx}
                            className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs"
                          >
                            {keyword}
                          </span>
                        ))}
                      {item.result.matched_keywords.length > 5 && (
                        <span className="text-gray-500 text-xs px-2 py-1">
                          +{item.result.matched_keywords.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="grid xl:grid-cols-2 gap-8 items-start">
          {/* Left Column - Form Section */}
          <div className="space-y-6">
            {/* Resume Input */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg text-white mr-3">
                    📄
                  </span>
                  Your Resume
                </h3>
                <div className="text-sm text-gray-500">
                  {resumeText.length}/10000 chars
                </div>
              </div>
              <textarea
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste your complete resume text here including skills, experience, education..."
                className="w-full h-64 p-4 border-2 border-gray-200 rounded-xl resize-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm leading-relaxed placeholder-gray-400"
                maxLength={10000}
              />
              <div className="mt-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  {resumeText.length > 0 && (
                    <span className="flex items-center text-green-600 text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Content added
                    </span>
                  )}
                </div>
                <div
                  className={`w-32 h-2 rounded-full ${
                    resumeText.length > 0
                      ? "bg-gradient-to-r from-blue-400 to-green-400"
                      : "bg-gray-200"
                  }`}
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300"
                    style={{
                      width: `${Math.min(
                        (resumeText.length / 2000) * 100,
                        100
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Job Description Input */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg text-white mr-3">
                    💼
                  </span>
                  Job Description
                </h3>
                <div className="text-sm text-gray-500">
                  {jobDescription.length}/8000 chars
                </div>
              </div>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the complete job description including requirements, responsibilities, qualifications..."
                className="w-full h-64 p-4 border-2 border-gray-200 rounded-xl resize-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-sm leading-relaxed placeholder-gray-400"
                maxLength={8000}
              />
              <div className="mt-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  {jobDescription.length > 0 && (
                    <span className="flex items-center text-green-600 text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Content added
                    </span>
                  )}
                </div>
                <div
                  className={`w-32 h-2 rounded-full ${
                    jobDescription.length > 0
                      ? "bg-gradient-to-r from-purple-400 to-blue-400"
                      : "bg-gray-200"
                  }`}
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
                    style={{
                      width: `${Math.min(
                        (jobDescription.length / 1500) * 100,
                        100
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleMatch}
                disabled={
                  loading || !resumeText.trim() || !jobDescription.trim()
                }
                className="flex-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] shadow-xl hover:shadow-2xl disabled:transform-none"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Analyzing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <span className="mr-2">🚀</span>
                    Match Now
                  </span>
                )}
              </button>
              <button
                onClick={resetForm}
                className="px-6 py-4 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all transform hover:scale-[1.02]"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Right Column - Results Section */}
          <div className="xl:sticky xl:top-8">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4 mb-6 shadow-lg">
                <div className="flex items-center">
                  <span className="text-red-500 text-2xl mr-3">⚠️</span>
                  <div>
                    <h4 className="font-semibold text-red-800">Error</h4>
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Results */}
            {result && (
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 space-y-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    Analysis Results
                  </h3>
                  <p className="text-gray-600">
                    Here's how your resume matches the job description
                  </p>
                </div>

                {/* Score Cards */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Match Score Card */}
                  <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                    <div className="text-center">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <svg
                          className="w-24 h-24 transform -rotate-90"
                          viewBox="0 0 36 36"
                        >
                          <path
                            d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="2"
                          />
                          <path
                            d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="2"
                            strokeDasharray={`${result.percent}, 100`}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold text-green-700">
                            {Math.round(result.percent)}%
                          </span>
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-green-700 mb-1">
                        Match Score
                      </h4>
                      <p className="text-sm text-green-600">
                        Similarity: {result.score.toFixed(3)}
                      </p>
                    </div>
                  </div>

                  {/* Keywords Matched Card */}
                  <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-700 mb-2">
                        {result.matched_keywords.length}
                      </div>
                      <h4 className="text-lg font-bold text-blue-700 mb-1">
                        Keywords Matched
                      </h4>
                      <p className="text-sm text-blue-600">
                        Out of{" "}
                        {result.matched_keywords.length +
                          result.suggested_keywords.length}{" "}
                        total keywords
                      </p>
                      <div className="mt-3 bg-blue-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                          style={{
                            width: `${
                              (result.matched_keywords.length /
                                (result.matched_keywords.length +
                                  result.suggested_keywords.length)) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Keywords Analysis */}
                <div className="space-y-6">
                  {/* Matched Keywords */}
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-2">✅</span>
                      <h4 className="text-xl font-bold text-gray-800">
                        Matched Keywords
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {result.matched_keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold border-2 border-green-200 hover:scale-105 transition-transform cursor-default"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Suggested Keywords */}
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-2">💡</span>
                      <h4 className="text-xl font-bold text-gray-800">
                        Suggested Keywords
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {result.suggested_keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold border-2 border-orange-200 hover:scale-105 transition-transform cursor-default"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    {result.suggested_keywords.length > 0 && (
                      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4 border-l-4 border-orange-400">
                        <p className="text-orange-800 font-semibold flex items-center">
                          <span className="mr-2">💡</span>
                          Pro Tip: Add these keywords to your resume to improve
                          your match score!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Placeholder when no results */}
            {!result && !loading && (
              <div className="bg-white/50 rounded-2xl p-12 text-center border-2 border-dashed border-gray-300">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Results will appear here
                </h3>
                <p className="text-gray-500">
                  Fill in both fields and click "Match Now" to see your analysis
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-white/70 rounded-2xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              How it works
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📄</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Paste Resume
                </h4>
                <p className="text-gray-600 text-sm">
                  Upload your resume text with all your skills and experience
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">💼</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Add Job Description
                </h4>
                <p className="text-gray-600 text-sm">
                  Paste the complete job posting you want to apply for
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🚀</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Get Analysis
                </h4>
                <p className="text-gray-600 text-sm">
                  Receive instant AI-powered matching score and suggestions
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Matcher;
