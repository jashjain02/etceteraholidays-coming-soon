"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus("error");
      setMessage("Please enter your email address");
      return;
    }

    try {
      setStatus("loading");
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus("success");
      setMessage("Thank you for subscribing!");
      setEmail("");
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full px-3 py-2 text-sm rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white transition-all duration-300"
          disabled={status === "loading" || status === "success"}
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="absolute right-1 top-1 bottom-1 px-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white transition-all duration-300 flex items-center justify-center"
        >
          {status === "loading" ? (
            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Send size={14} />
          )}
        </button>
      </form>
      
      {message && (
        <div className={`mt-2 text-xs ${status === "error" ? "text-red-500" : "text-green-500"}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default NewsletterForm