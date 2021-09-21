import '../App.css';
import React from 'react';
import Card from './Card';

function Home() {
  return (
    <Card
      txtcolor="black"
      title="Welcome to the bank"
      text="For all your banking needs"
      body={(<img src="images/bank.png" className="img-fluid" alt="Responsive image" />)}
    />
  );
}

export default Home;