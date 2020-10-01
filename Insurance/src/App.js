import React, { useState } from 'react';
import Header from './components/header';
import Formulario from './components/Formulario';
import Resume from './components/resume';
import Result from './components/result';
import Spinner from './components/spinner';
import styled from '@emotion/styled';

const Div = styled.div`
  max-width: 600px;
  margin: 0 auto;
  `;

const Formdiv = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
  `;

function App() {

  const [resume, saveResume] = useState({
    coti: 0,
    data: {
      marca: '',
      year: '',
      plan: '',
    }
  });

  const [loading, saveLoading] = useState(false);

  const { coti, data } = resume;


  return (
    <Div>
      <Header 
      title='Insurance Quote'
      />
      <Formdiv>
        <Formulario 
          saveResume={saveResume}
          saveLoading={saveLoading}
        />
        { loading ? <Spinner /> : null }
        
        <Resume 
          data={data}
        />
        { !loading ? <Result
          coti={coti}
        /> : null }
        
      </Formdiv>
    </Div>
  );
}

export default App;
