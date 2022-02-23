import React, { useEffect } from "react";
import './App.css';
import getWeb3 from './getWeb3';

function App() {
  useEffect( async () => {
    const web3 = await getWeb3();
    const accountList = await web3.eth.getAccounts(); 
    console.log(accountList);
    
  }, [])
  
  return (
    <>
      asdfadf
    </>
  )
}

export default App;
