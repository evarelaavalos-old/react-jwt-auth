import React from 'react';

export default function LogIn() {
  return (
    <form action='/signup'>
      <h2>Login</h2>
      <label for='email'>Email</label>
      <input type='text' name='email' />
      <div className='email error'></div>
      <label for='password'>Password</label>
      <input type='password' name='password' />
      <div className='password error'></div>
      <button>login</button>
    </form>
  );
}
