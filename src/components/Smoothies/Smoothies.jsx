import React from 'react';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Smoothies() {
  return (
    <>
      <Navbar />
      <ul className='recipes'>
        <li className='recipe'>
          <img
            src={process.env.PUBLIC_URL + '/smoothie.png'}
            alt='smoothie recipe icon'
          />
          <h4>Banana Boost</h4>
          <p>Banana, Vanilla ice cream, Milk</p>
        </li>
        <li className='recipe'>
          <img
            src={process.env.PUBLIC_URL + '/smoothie.png'}
            alt='smoothie recipe icon'
          />
          <h4>Tropical Twist</h4>
          <p>Peach, Pinapple, Apple juice</p>
        </li>
        <li className='recipe'>
          <img
            src={process.env.PUBLIC_URL + '/smoothie.png'}
            alt='smoothie recipe icon'
          />
          <h4>Protein Packer</h4>
          <p>Oats, Peanut butter, Milk, Banana, Blueberries</p>
        </li>
        <li className='recipe'>
          <img
            src={process.env.PUBLIC_URL + '/smoothie.png'}
            alt='smoothie recipe icon'
          />
          <h4>Banana Boost</h4>
          <p>Banana, Vanilla ice cream, Milk</p>
        </li>
        <li className='recipe'>
          <img
            src={process.env.PUBLIC_URL + '/smoothie.png'}
            alt='smoothie recipe icon'
          />
          <h4>Tropical Twist</h4>
          <p>Peach, Pinapple, Apple juice</p>
        </li>
        <li className='recipe'>
          <img
            src={process.env.PUBLIC_URL + '/smoothie.png'}
            alt='smoothie recipe icon'
          />
          <h4>Protein Packer</h4>
          <p>Oats, Peanut butter, Milk, Banana, Blueberries</p>
        </li>
      </ul>
      <Footer />
    </>
  );
}
