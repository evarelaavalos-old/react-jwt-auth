import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <header>
      <div className='smoothie'>
        <img src={process.env.PUBLIC_URL + '/smoothie.png'} alt='' />
      </div>
      <div className='headings'>
        <h2>Smoothie Recipes</h2>
        <h3>By Ninjas For Ninjas</h3>
        <Link to='/smoothies' className='btn'>
          View Recipes
        </Link>
      </div>
    </header>
  );
}
