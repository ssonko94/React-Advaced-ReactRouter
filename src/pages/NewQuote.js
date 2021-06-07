import React from "react";
import { useHistory } from 'react-router-dom'

import QuoteForm from "../components/quotes/QuoteForm";

const AddNewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    
    console.log(quoteData);

    history.push('/quotes')
  };
  return (
    <>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </>
  );
};

export default AddNewQuote;
