/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {useParams} from './context/context'
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  console.log(useParams())
  return(
    <Navbar />
  );
 };


export default App;
