import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-8">
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
            About Resume Matcher
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Empowering job seekers with AI-powered resume optimization and
            intelligent matching
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">My Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Resume Matcher leverages cutting-edge AI algorithms to bridge the
              gap between job seekers and their dream opportunities. We analyze
              your resume against job descriptions to provide instant,
              actionable feedback.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our tool identifies matched keywords, suggests missing skills, and
              provides data-driven insights to help you optimize your resume for
              better job matching success and higher interview callbacks.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">Key Features:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 p-1 rounded-full mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">
                    Real-time matching analysis
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-1 rounded-full mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">
                    Keyword optimization suggestions
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-1 rounded-full mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">
                    Comprehensive scoring system
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-1 rounded-full mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">
                    Instant feedback & insights
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
                    <span className="text-2xl text-white">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Smart Matching</h4>
                    <p className="text-gray-600 text-sm">
                      AI-powered resume analysis
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-full">
                    <span className="text-2xl text-white">📊</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      Data-Driven Insights
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Actionable recommendations
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                    <span className="text-2xl text-white">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Lightning Fast</h4>
                    <p className="text-gray-600 text-sm">Results in seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built With Modern Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Powered by cutting-edge technologies to deliver fast, accurate,
              and reliable results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">
                  <FontAwesomeIcon icon={faReact} />
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                Frontend
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  React 19 with TypeScript
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Tailwind CSS for styling
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Vite for fast development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  React Router for navigation
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">
                  <FontAwesomeIcon icon={faPython} />
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                Backend
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  FastAPI Python framework
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  RESTful API architecture
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Async request handling
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  CORS enabled
                </li>
              </ul>
            </div>

            {/* AI/ML */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                AI & NLP
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Natural Language Processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Keyword extraction algorithms
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
                  Similarity scoring models
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Machine learning optimization
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Developer Section */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet the Developer
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Built with passion for helping job seekers optimize their career
                opportunities
              </p>
            </div>

            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">👨‍💻</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                This project represents the intersection of AI technology and
                career development. As a software developer passionate about
                creating tools that make a real difference, I built Resume
                Matcher to help job seekers navigate the competitive job market
                with data-driven insights and AI-powered optimization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/Taha-Aaqib/resume-matcher-frontend"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-xl hover:from-gray-900 hover:to-black transition-all transform hover:scale-105 shadow-lg"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View Source Code
                </a>
                <a
                  href="https://github.com/Taha-Aaqib/resume-matcher-frontend"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Star on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <p className="text-gray-600 mb-4">
              Made with ❤️ by Taha Aaqib for the developer community
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <span>© 2025 Resume Matcher</span>
              <span>•</span>
              <a href="https://github.com/Taha-Aaqib" className="hover:text-blue-600 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default About;
