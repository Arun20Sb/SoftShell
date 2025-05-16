import { useState, useEffect, useRef } from "react";
import { MessageCircle, Send, X, Loader } from "lucide-react";

const ChatWidget = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Sample questions with predefined responses
  const sampleResponses = {
    // General questions
    hi: "Hello! How can I help you with selling your software licenses today?",
    hello: "Hi there! How can I assist you with valuing your software assets?",
    hey: "Hey! Ready to help you get the best value for your software licenses.",

    // About the service
    "how does it work":
      "Our process is simple: 1) Upload your license details, 2) Get an AI-powered valuation within minutes, 3) Accept our offer and get paid within 24 hours.",
    "what licenses":
      "We accept most major software licenses including Microsoft, Adobe, Oracle, SAP, Autodesk, and many more. Feel free to ask about specific software.",
    "what types of licenses":
      "We purchase enterprise, individual, subscription, perpetual, and volume licenses from most major software vendors.",

    // Pricing questions
    "how much":
      "The value of your license depends on several factors including software type, remaining term, and market demand. Upload your license details through our form for a precise valuation.",
    "valuation":
      "Our AI-powered system analyzes current market conditions and demand to provide the most competitive valuation for your licenses.",
    "payment methods":
      "We offer multiple payment options including direct bank transfer, PayPal, and cryptocurrency transfers for your convenience.",

    // Process questions
    "how long":
      "The entire process from submission to payment typically takes 24-48 hours, with valuations often provided within minutes.",
    "security":
      "We use enterprise-grade encryption to protect all your data. Your license details are handled with the utmost confidentiality.",
    "legal":
      "Our service complies with all software license transfer regulations. We handle all the legal paperwork to ensure a smooth, compliant transfer.",

    // Fallback response
    default:
      "I don't have specific information about that. For detailed assistance, please submit your question through our contact form, and our specialists will get back to you soon.",
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Add welcome message when first opening chat
      setMessages([
        {
          sender: "bot",
          text: `Hi there! I'm SoftSell's AI assistant. How can I help you with selling your software licenses today?`,
          time: new Date(),
        },
      ]);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const findBestResponse = (input) => {
    const normalized = input.toLowerCase().trim();

    // Direct match
    if (sampleResponses[normalized]) {
      return sampleResponses[normalized];
    }

    // Partial match
    for (const [key, value] of Object.entries(sampleResponses)) {
      if (normalized.includes(key)) {
        return value;
      }
    }

    // Keywords match
    if (
      normalized.includes("price") ||
      normalized.includes("cost") ||
      normalized.includes("worth")
    ) {
      return sampleResponses["how much"];
    }

    if (normalized.includes("process") || normalized.includes("steps")) {
      return sampleResponses["how does it work"];
    }

    if (
      normalized.includes("time") ||
      normalized.includes("fast") ||
      normalized.includes("quick")
    ) {
      return sampleResponses["how long"];
    }

    // Default response
    return sampleResponses["default"];
  };

  const handleSubmit = (e) => {
    e?.preventDefault();

    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage = {
      sender: "user",
      text: inputValue,
      time: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response = findBestResponse(userMessage.text);

      const botMessage = {
        sender: "bot",
        text: response,
        time: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg z-50 ${
          darkMode
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
        aria-label="Chat with us"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          className={`fixed bottom-24 right-6 w-80 sm:w-96 rounded-xl shadow-xl overflow-hidden z-50 flex flex-col ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
          style={{ height: "500px", maxHeight: "calc(100vh - 150px)" }}
        >
          {/* Chat header */}
          <div className={`p-4 ${darkMode ? "bg-gray-700" : "bg-blue-600"}`}>
            <h3 className="font-bold text-white flex items-center">
              <MessageCircle size={20} className="mr-2" />
              SoftSell Assistant
            </h3>
          </div>

          {/* Messages area */}
          <div
            className={`flex-1 overflow-y-auto p-4 ${
              darkMode ? "bg-gray-800" : "bg-gray-50"
            }`}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-3/4 break-words ${
                    message.sender === "user"
                      ? darkMode
                        ? "bg-blue-600 text-white"
                        : "bg-blue-600 text-white"
                      : darkMode
                      ? "bg-gray-700 text-gray-100"
                      : "bg-white text-gray-800 shadow"
                  }`}
                >
                  <p>{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === "user"
                        ? "text-blue-100"
                        : darkMode
                        ? "text-gray-400"
                        : "text-gray-500"
                    }`}
                  >
                    {formatTime(message.time)}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start mb-4">
                <div
                  className={`rounded-lg px-4 py-2 ${
                    darkMode
                      ? "bg-gray-700 text-gray-100"
                      : "bg-white text-gray-800 shadow"
                  }`}
                >
                  <div className="flex items-center">
                    <Loader size={16} className="animate-spin mr-2" />
                    <span>Typing...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <form
            onSubmit={handleSubmit}
            className={`p-4 border-t ${
              darkMode
                ? "bg-gray-700 border-gray-600"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className={`flex-1 px-4 py-2 rounded-l-lg focus:outline-none ${
                  darkMode
                    ? "bg-gray-600 text-white placeholder-gray-400 border-gray-600"
                    : "bg-gray-100 text-gray-800 placeholder-gray-500 border-gray-200"
                }`}
              />
              <button
                type="submit"
                className={`px-4 py-2 rounded-r-lg ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
                disabled={inputValue.trim() === ""}
              >
                <Send size={18} />
              </button>
            </div>

            {/* Sample questions */}
            <div className="mt-3">
              <p
                className={`text-xs mb-2 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Try asking:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "How does it work?",
                  "What licenses do you buy?",
                  "Payment methods?",
                ].map((q, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setInputValue(q);
                      // Automatically submit after a short delay
                      setTimeout(() => {
                        handleSubmit();
                      }, 100);
                    }}
                    className={`text-xs rounded-full px-3 py-1 ${
                      darkMode
                        ? "bg-gray-600 hover:bg-gray-500 text-gray-300"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
