import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleVisibility,
  deleteQuote,
  editQuoteAuthenticity,
  setHighlightedQuote,
} from "../state/quotesSlice";

export default function Quotes() {
  const quotes = useSelector((st) => st.state.quotes);
  const displayAllQuotes = useSelector((st) => st.state.displayAllQuotes); // ✨ `displayAllQuotes` must come from the Redux store
  const highlightedQuote = useSelector((st) => st.state.highlightedQuote); // ✨ `highlightedQuote` must come from the Redux store

  const dispatch = useDispatch();
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
                    const action = deleteQuote(qt.id);
                    dispatch(action);
                  }}
                >
                  DELETE
                </button>
                <button
                  onClick={() => {
                    const action = setHighlightedQuote(qt.id);
                    dispatch(action);
                  }}
                >
                  HIGHLIGHT
                </button>
                <button
                  onClick={() => {
                    const action = editQuoteAuthenticity(qt.id);
                    dispatch(action);
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
            dispatch(toggleVisibility());
          }}
        >
          {displayAllQuotes ? "HIDE" : "SHOW"} FAKE QUOTES
        </button>
      )}
    </div>
  );
}
