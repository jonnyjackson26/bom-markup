import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BookPage.css';
import { Link } from 'react-router-dom';

export function BookPage() {
  const { bookName } = useParams();  // Get the book name from the URL
  const [book, setBook] = useState(null);

  // Fetch book data based on the book name
  useEffect(() => {
    async function fetchBook() {
      const res = await fetch(`/get_books/${bookName}/`, { credentials: "same-origin" });

      if (res.ok) {
        const data = await res.json();
        setBook(data);
      }
    }

    fetchBook();
  }, [bookName]);  // Run when bookName changes

  if (!book) {
    return <p>Loading...</p>;
  }

  const chapterLinks = [];
  for (let i = 1; i <= book.num_of_chapters; i++) {
    chapterLinks.push(
      <Link key={i} to={`${i}`} className="chapter-item">
        {`Chapter ${i}`}
      </Link>
    );
  }

  return (
    <>
      <h1 className="title">
        The book of {book.book_name}
      </h1>

      <div className="chapters-container">
        {chapterLinks}
      </div>
    </>
  );
}

export default BookPage;
