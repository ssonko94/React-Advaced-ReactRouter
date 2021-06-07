import React from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Dan", text: "The world is a savage place" },
  { id: "q2", author: "Jimmy", text: "It will end in tears" },
  { id: "q3", author: "Bobi", text: "Buli omu agumye mune" },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  const match = useRouteMatch();

  if (!quote) {
    return <p>No quote found 😥</p>;
  }
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
