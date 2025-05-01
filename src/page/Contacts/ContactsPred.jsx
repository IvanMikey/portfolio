// Contact.js

import 'animate.css'
import React from 'react'
import Me from './../../Main/image/me.jpg'

const Contact = () => {
  return (
      <header className='p-1 w-full flex items-center justify-center'>
          <div className='pt-5 w-1/3'><img className=' rounded-xl' src={Me}/></div>

          <div>
              <h1>
                  Ivan Voitekhovich
              </h1>
              <h2></h2>
          </div>


      </header>
  );
};

export default Contact;