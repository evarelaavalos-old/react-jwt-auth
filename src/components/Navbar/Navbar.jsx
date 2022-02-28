import React from 'react';

export default function Navbar({ user }) {
  let content;

  if (user) {
    content = (
      <>
        <li>Welcome, {user?.email}</li>
        <li>
          <a href='/logout'>Log out</a>
        </li>
      </>
    );
  } else {
    content = (
      <>
        <li>
          <a href='/login'>Log in</a>
        </li>
        <li>
          <a href='/signup' class='btn'>
            Sign up
          </a>
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
