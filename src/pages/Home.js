import React from 'react'
import {Helmet} from 'react-helmet';
import './../style/home.css';

import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import NewCollection from './../components/NewCollection';

export default function Home() {
  return (
    <div className='body'>
        <Helmet>
                <style>{'body { background-image: url("./pubImgs/background.jpg") !important; }'}</style>
        </Helmet>
        <Navbar/> 
        <div className='homeSection'>
          <div  className='textSection'>
            
          </div>
          
        </div>
        <NewCollection/>
        <Footer/>
    </div>
  )
}
