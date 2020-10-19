import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Quote from './components/quote'

const Buton = styled.button `
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem, 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover{
    cursor: pointer;
    background-size: 400px;
  }
`;

const Cont = styled.div `
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

function App() {
  // state
  const [phrase, getQuote] = useState({});

  const Api = async () => {
    const restapi = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const phrase = await restapi.json()
    getQuote(phrase[0]);
  }

  //useeffect
  useEffect( () => {
    Api();
  },[]);

  return (
    <Cont>
      <Quote 
        phrase={phrase}
      />
      <Buton 
        onClick={Api}
      >
        Get a Quote
      </Buton>
    </Cont>
    
  );
}

export default App;
