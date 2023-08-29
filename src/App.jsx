/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {useParams} from './context/context'

const App = () => {
  console.log(useParams())
  return(
    <div>BFS</div>
  );
 };


export default App;
