import React from "react";
import DataCard from "./components/dataCard";
import dataObj from './data/dataClusters';


export default function App() {
  return (
    <div>
      <DataCard dataObj={dataObj} />
      <ListView list={DataCard}/>
    </div>
  );
}

