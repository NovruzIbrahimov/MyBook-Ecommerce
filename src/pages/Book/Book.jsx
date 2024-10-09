import React from 'react';
import "../Book/book.css";
import BookDetail from "../../Sections/BookSection/BookDetail";
import BookCardsOne from "../../Sections/BookSection/BookCardsOne";
import BookCardsTwo from "../../Sections/BookSection/BookCardsTwo";

function Book() {
  return (
    <div className='book'>
      <div className="container">
        <BookDetail />
        <BookCardsOne />
        <BookCardsTwo />
      </div>
    </div>
  )
}

export default Book