import React, { FC } from 'react';
import { Layout, PageHeader } from 'antd';
import styled from 'styled-components'

import ControlPanel from './components/ControlPanel'
import ResultsPanel from './components/ResultsPanel'
import { Footer } from './components/StyledComponents'

import { callAllApisForFunc } from './api/api'

import './App.css';



import axios, { AxiosRequestConfig } from "axios";

const API_KEY = process.env.REACT_APP_AWS_FACTORIAL_JS_API

const App: FC = () => {


  const ContentWrap = styled.div`
    padding-bottom: 5rem; // for footer

    display: flex;
    flex-direction: column;
    width: 100%;
    
    justify-content: space-between;
  `


  async function callApi() {


    callAllApisForFunc('factorial', { num: 5 })

    // const config:AxiosRequestConfig = {
    //   method: 'post',
    //   url: 'https://7ol1hufwg6.execute-api.us-east-1.amazonaws.com/default/factorial_JS',
    //   data: {
    //     num: 5
    //   },
    //   headers: {
    //     'x-api-key': API_KEY
    //   },
    // }
    // console.log(config);
    // const res = await axios(config)
    // console.log(res);
  }

  return (
    <div className="App">

      <Layout>
        <PageHeader
          className="site-page-header"
          backIcon={false}
          onBack={() => null}
          title="📦 Serverless Sandbox"
        />

        <ContentWrap>

          <ControlPanel />

          <ResultsPanel />


        </ContentWrap>




        <Footer>
          Made by Ben Sparks
        </Footer>
      </Layout>

      {/* <header className="App-header">

        <button onClick={callApi}>TEST API</button>

      </header> */}
    </div>
  );
}

export default App;
