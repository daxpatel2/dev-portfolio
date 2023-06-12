import React from 'react';
import './data.css';
import Button from '@mui/material/Button';

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">Dax Patel</h1>
        <h3 className="home__subtitle">Software Engineer</h3>
        <p className="home__description"> I enjoy turning ideas into reality by creating visually appealing web applications.</p>
        <Button className='button' variant="contained" href='#contact'>Say Hello 💬</Button>
    </div>
  )
}

export default Data;