
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Home.css';
import Navbar from '../../components/NavBar/Navbar';

function Home() {
  const [user, setUser] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the username from Django
    async function fetchUserInfo() {
      const res = await fetch("/registration/get_user_info/", {
        credentials: "same-origin", // ensure cookies/session are sent
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data); // Set the username state
      } //you could handle the case where theyre not authenticated here and reirect them to sign in page with window.location = "/registration/sign_in/";
    }

    fetchUserInfo();
  }, []);

  useEffect(() => {
    // Fetch the username from Django
    async function fetchBooks() {
      const res = await fetch("/get_books/", {
        credentials: "same-origin", // ensure cookies/session are sent
      });

      if (res.ok) {
        const data = await res.json();
        setBooks(data); // Set the username state
      } //you could handle the case where theyre not authenticated here and reirect them to sign in page with window.location = "/registration/sign_in/";
    }

    fetchBooks();
    console.log(books);
  }, []);

  return (
    <>
      <Navbar />
      <h1>Home Page</h1>
      <h1>Markup the scriptures</h1>
      <p>Welcome, {user.first_name}!</p>
      <Link to="/profile">Profile</Link>

      <div className="book-container-grid">
            {books.map((book) => (
                <Link
                    className={"book-grid"}
                    key={book.url_name}
                    to={`/${book.url_name}`}
                >
                    {book.book_name}
                </Link>
            ))}
        </div>


    </>
  );
}

export default Home;


