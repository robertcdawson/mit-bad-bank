import '../App.css';
import React from 'react';
import Card from './Card';

function Home() {
  return (
    <Card
      txtcolor="black"
      title="Welcome to the bank"
      text="For all your banking needs"
      body={(<img src="images/bank.png" id="heroImage" className="img-fluid" alt="Hero image" />)}
    />
  );
}

export default Home;