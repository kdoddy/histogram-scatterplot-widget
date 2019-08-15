import React, { useState } from 'react';
import './App.css';
import AllDataColumns from './components/AllDataColumns';
import Histogram from './components/Histogram';
import ScatterPlot from './components/ScatterPlot';


const dummyData = [
  {'descriptor': '# of dogs', 'data': [1, 3, 7, 4]},
  {'descriptor': '# of cats', 'data': [5, 2, 11, 0]},
  {'descriptor': '# of happiness', 'data': [15, 12, 0, 4]}
]

function App() {
  const columnData = dummyData;
  const [activeColumns, setActiveColumns] = useState([]);

  const handleColumnClick = function(column, activate) {
    activate
    ? setActiveColumns(activeColumns => [...activeColumns, column])
    : setActiveColumns(activeColumns => activeColumns.filter(col => col !== column))
  }

  return (
    <div className="App">
      <h1>Instructions:</h1>
      <h1>Select 1 column to view histogram</h1>
      <h1>Select 2 columns to view scatterplot</h1>
      <h1>Data:</h1>
      <AllDataColumns handleColumnClick={handleColumnClick} columnData={columnData}/>
      <h1>Graph:</h1>
      {activeColumns.length === 1 && <Histogram column={activeColumns[0]}/>}
      {activeColumns.length === 2 && <ScatterPlot columns={activeColumns}/>}
    </div>
  );
}

export default App;
