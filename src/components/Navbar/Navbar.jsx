import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ user }) {
  let content = (
    <>
      <li>
        <Link to='/login'>Log in</Link>
      </li>
      <li>
        <Link to='/signup' class='btn'>
          Sign up
        </Link>
      </li>
    </>
  );

  if (user) {
    content = (
      <>
        <li>Welcome, {user?.email}</li>
        <li>
          <button className='logout-btn'>Log out</button>
        </li>
      </>
    );
  }

  return (
    <nav>
      <h1>
        <a href='/'>Ninja Smoothies</a>
      </h1>
      <ul>{content}</ul>
    </nav>
  );
}
