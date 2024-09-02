// ✨ create your `quotesSlice` in this module
import { createSlice } from "@reduxjs/toolkit";

let id = 1;
const getNextId = () => id++;

const slice = createSlice({
  name: "app_state",
  initialState: {
    displayAllQuotes: true,
    highlightedQuote: null,
    quotes: [
      {
        id: getNextId(),
        quoteText: "Don't cry because it's over, smile because it happened.",
        authorName: "Dr. Seuss",
        apocryphal: false,
      },
      {
        id: getNextId(),
        quoteText: "So many books, so little time.",
        authorName: "Frank Zappa",
        apocryphal: false,
      },
      {
        id: getNextId(),
        quoteText: "Be yourself; everyone else is already taken.",
        authorName: "Oscar Wilde",
        apocryphal: false,
      },
    ],
  },
  reducers: {
    toggleVisibility(state) {
      state.displayAllQuotes = !state.displayAllQuotes;
    },
    deleteQuote(state, actions) {
      state.quotes = state.quotes.filter((quote) => {
        return quote.id !== actions.payload;
      });
    },
    editQuoteAuthenticity(state, action) {
      state.quotes.forEach((quote) => {
        if (quote.id === action.payload) {
          quote.apocryphal = !quote.apocryphal;
        }
      });
    },
    setHighlightedQuote(state, action) {
      state.highlightedQuote === null
        ? (state.highlightedQuote = action.payload)
        : (state.highlightedQuote = null);
    },
    createQuote(state, action) {
      const { quoteText, authorName } = action.payload;
      state.quotes = [
        ...state.quotes,
        {
          id: getNextId(),
          quoteText: quoteText,
          authorName: authorName,
          apocryphal: false,
        },
      ];
    },
  },
});

export default slice.reducer;

export const {
  toggleVisibility,
  deleteQuote,
  editQuoteAuthenticity,
  setHighlightedQuote,
  createQuote,
} = slice.actions;
