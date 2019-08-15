import React, { useState } from 'react';

function AllDataColumns(props) {
const [numActive, setNumActive] = useState(0)

  return (
    <div style={{width:'30%'}}>
      {props.columnData.map(column => (
        <ul 
        style={{listStyleType: 'none', borderStyle: 'solid'}}
        onClick={() => { setNumActive(handleColumnSelect(column, numActive, props));
        }}>
            <li>{column.descriptor}</li>
            {column.data.map(dataPoint =>(
              <li>
                {dataPoint}
              </li>
            ))}
            </ul>
      ))}
    </div>
  );
}

function handleColumnSelect (column, numActive, props) {
  if (column.selected === true) {
    column.selected = false
    props.handleColumnClick(column, false)
    return numActive - 1;
  } else if (numActive < 2) {
    column.selected = true;
    props.handleColumnClick(column, true)
    return numActive + 1
  } else {
    console.log('CANNOT SELECT MORE THAN 2, DESELECT NOW')
    console.log('CANNOT SELECT MORE THAN 2, DESELECT NOW')
    console.log('CANNOT SELECT MORE THAN 2, DESELECT NOW')
    return numActive
  }
}

export default AllDataColumns;
