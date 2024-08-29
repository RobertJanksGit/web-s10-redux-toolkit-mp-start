import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Quotes() {
  const quotes = useSelector((st) => st.state.quotes);
  const displayAllQuotes = useSelector((st) => st.state.displayAllQuotes); // ✨ `displayAllQuotes` must come from the Redux store
  const highlightedQuote = useSelector((st) => st.state.highlightedQuote); // ✨ `highlightedQuote` must come from the Redux store

  return (
    <div id="quotes">
      <h3>Quotes</h3>
      <div>
        {quotes
          ?.filter((qt) => {
            return displayAllQuotes || !qt.apocryphal;
          })
          .map((qt) => (
            <div
              key={qt.id}
              className={`quote${qt.apocryphal ? " fake" : ""}${
                highlightedQuote === qt.id ? " highlight" : ""
              }`}
            >
              <div>{qt.quoteText}</div>
              <div>{qt.authorName}</div>
              <div className="quote-buttons">
                <button
                  onClick={() => {
                    /* ✨ dispatch an action */
                  }}
                >
                  DELETE
                </button>
                <button
                  onClick={() => {
                    /* ✨ dispatch an action */
                  }}
                >
                  HIGHLIGHT
                </button>
                <button
                  onClick={() => {
                    /* ✨ dispatch an action */
                  }}
                >
                  FAKE
                </button>
              </div>
            </div>
          ))}
        {!quotes?.length && "No quotes here! Go write some."}
      </div>
      {!!quotes?.length && (
        <button
          onClick={() => {
            /* ✨ dispatch an action */
          }}
        >
          {displayAllQuotes ? "HIDE" : "SHOW"} FAKE QUOTES
        </button>
      )}
    </div>
  );
}
