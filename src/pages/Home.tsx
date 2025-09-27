import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleStartMatching = () => {
    navigate("/matcher");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
                <span className="block">Match Your Resume</span>
                <span className="block">to Job Descriptions</span>
                <span className="block animate-gradient-text font-extrabold">
                  in Seconds
                </span>
              </h1>

              {/* Subtext */}
              <p
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                Get instant insights into how well your resume aligns with job
                postings. Optimize your chances of landing that dream job with
                AI-powered analysis.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up duration-300">
                <button
                  onClick={handleStartMatching}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-blue-300 animate-pulse-glow"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Start Matching
                    <svg
                      className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                        isHovered ? "translate-x-1" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 focus:ring-4 focus:ring-gray-200">
                  Learn More
                </button>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center text-sm text-gray-500">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Free to use
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Instant results
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  AI-powered
                </div>
              </div>
            </div>

            {/* Right Column - Illustration/Visual */}
            <div className="flex justify-center lg:justify-end animate-scale-in duration-500">
              <div className="relative animate-float">
                {/* Main illustration container */}
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                  {/* Animated background circles */}
                  <div className="absolute inset-0">
                    <div
                      className="absolute top-8 left-8 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"
                      style={{ animationDelay: "0s" }}
                    ></div>
                    <div
                      className="absolute top-16 right-12 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute bottom-20 left-16 w-2 h-2 bg-blue-500 rounded-full opacity-60 animate-pulse"
                      style={{ animationDelay: "2s" }}
                    ></div>
                    <div
                      className="absolute bottom-8 right-8 w-3 h-3 bg-purple-500 rounded-full opacity-60 animate-pulse"
                      style={{ animationDelay: "3s" }}
                    ></div>
                  </div>

                  {/* Main illustration */}
                  <div className="absolute inset-4 bg-white rounded-3xl shadow-2xl border border-gray-100 flex items-center justify-center overflow-hidden card-hover">
                    {/* Resume and Job matching visual */}
                    <div className="relative w-full h-full p-8">
                      {/* Resume document */}
                      <div className="absolute top-8 left-8 w-24 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-500 card-hover">
                        <div className="p-3">
                          <div className="w-full h-2 bg-blue-400 rounded mb-2"></div>
                          <div className="w-3/4 h-1 bg-blue-300 rounded mb-1"></div>
                          <div className="w-full h-1 bg-blue-300 rounded mb-1"></div>
                          <div className="w-2/3 h-1 bg-blue-300 rounded mb-2"></div>
                          <div className="w-full h-1 bg-blue-200 rounded mb-1"></div>
                          <div className="w-5/6 h-1 bg-blue-200 rounded"></div>
                        </div>
                      </div>

                      {/* Job description */}
                      <div className="absolute top-16 right-8 w-24 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-500 card-hover">
                        <div className="p-3">
                          <div className="w-full h-2 bg-purple-400 rounded mb-2"></div>
                          <div className="w-4/5 h-1 bg-purple-300 rounded mb-1"></div>
                          <div className="w-full h-1 bg-purple-300 rounded mb-1"></div>
                          <div className="w-3/4 h-1 bg-purple-300 rounded mb-2"></div>
                          <div className="w-full h-1 bg-purple-200 rounded mb-1"></div>
                          <div className="w-2/3 h-1 bg-purple-200 rounded"></div>
                        </div>
                      </div>

                      {/* Matching arrow/connection */}
                      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce animate-pulse-glow">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Match percentage display */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                        85% Match
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Three simple steps to optimize your resume
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Upload Resume
              </h3>
              <p className="text-gray-600">
                Paste or upload your resume content
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Add Job Description
              </h3>
              <p className="text-gray-600">
                Copy the job posting you're interested in
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Get Insights
              </h3>
              <p className="text-gray-600">
                Receive detailed matching analysis
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to get more interviews?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Try ResumeMatcher today — free, fast, and effective.
          </p>
          <button
            onClick={() => navigate("/matcher")}
            className="mt-8 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Start Matching
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
