/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {useParams} from './context/context'
import Navbar from "./components/Navbar/Navbar";
import Grid from "./components/Grid/Grid";

const App = () => {
  console.log(useParams())
  return(<>
    <Navbar />
    <Grid />
    </>
  );
 };


export default App;
