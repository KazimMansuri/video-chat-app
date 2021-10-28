import React, { useState, useEffect, Fragment } from 'react';
import { useHistory } from "react-router-dom";




const Home = () => {

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/room`; 
    history.push(path);
  }


  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('http://localhost:3000/login');
    } else {
      setLoading(false);
    }
  }, []);

  
  
  return (
    <div>
     <h1 className="heading">DO YOU WANT TO CREATE CHANNEL..?</h1>
     <button className="heading" onClick={routeChange}>CREATE CHANNEL</button>
    </div>
  );
};

export default Home;