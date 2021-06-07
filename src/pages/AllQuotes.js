import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Dan", text: "The world is a savage place" },
  { id: "q2", author: "Jimmy", text: "It will end in tears" },
  { id: "q3", author: "Bobi", text: "Buli omu agumye mune" },
];

const AllQuotes = () => {
  return (
    <>
      <QuoteList quotes={DUMMY_QUOTES} />
    </>
  );
};

export default AllQuotes;
