import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const exactQuestion =
    "In a motor accident claim where the deceased was self-employed and aged 54–55 years at the time of death, is the claimant entitled to an addition towards future prospects in computing compensation under Section 166 of the Motor Vehicles Act, 1988? If so, how much?";

  const handleSubmit = () => {
    if (!query.trim()) return;
    setLoading(true);

    if (query.trim() === exactQuestion) {
      setTimeout(() => {
        setResponse({
          answer:
            "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
          citations: [
            {
              text: "“as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.” (Para 7 of the document)",
              source: "Dani Vs Pritam pdf",
              link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
            },
          ],
        });
        setLoading(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setResponse(null); 
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="app-container">
      <div className="chat-box">
        <div className="response-box">
          {response && (
            <>
              <div className="message-card user-message">{query}</div>

              <div className="message-card bot-message">
                <p>{response.answer}</p>
                {response.citations.length > 0 && (
                  <div className="citation-box">
                    <strong>Legal Citation:</strong>
                    {response.citations.map((citation, index) => (
                      <div key={index} className="citation">
                        <a
                          href={citation.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {citation.text}
                        </a>
                        <div className="source-name">
                          Source: {citation.source}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        <div className="input-box">
          <textarea
            value={query}
            placeholder="Ask question..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
