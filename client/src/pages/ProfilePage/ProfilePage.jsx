import { useState, useEffect } from 'react'
import './ProfilePage.css'
import { Link } from 'react-router-dom';
import Navbar from '../../components/NavBar/Navbar';

function ProfilePage() {
    const [user, setUser] = useState('');

    useEffect(() => {
        // Fetch the username from Django
        async function fetchUserInfo() {
        const res = await fetch("/registration/get_user_info/", {
            credentials: "same-origin", // ensure cookies/session are sent
        });

        if (res.ok) {
            const data = await res.json();
            setUser(data); // Set the username state
        } //you could handle the case where theyre not authenticated here and reirect them to sign in page
        }

        fetchUserInfo();
    }, []);

  async function logout() {
    const res = await fetch("/registration/logout/", {
      credentials: "same-origin", // include cookies!
    });

    if (res.ok) {
      // navigate away from the single page app!
      window.location = "/registration/sign_in/";
    } else {
      // handle logout failed!
    }
  }

  return (
    <>
      <Navbar />
      <h1>Profile Page</h1>
      <p>username: {user.username}</p>
      <p>first_name: {user.first_name}</p>
      <p>last_name: {user.last_name}</p>
      <p>email: {user.email}</p>
      <p>date_joined: {user.date_joined}</p>
      <Link to="/">Home</Link>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default ProfilePage;
