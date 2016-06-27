import React from 'react';

import Pixel from 'components/pixel';

class Grid extends React.Component {
  selectHandler = (rowIdx, colIdx) => {
    // What to do with this?
    console.log(rowIdx, colIdx)
  }

  render() {
    var rows = [];
    for(var rowIdx = 0; rowIdx < 8; rowIdx++) {
      var row = [];
      for(var colIdx = 0; colIdx < 8; colIdx++) {
        row.push(
          <Pixel
            key={rowIdx*8+colIdx}
            colIdx={colIdx}
            rowIdx={rowIdx}
            clickHandler={this.selectHandler}
          />)
      }
      rows.push(row)
    }

    return(
      <div className='grid'>
        {rows.map(function(row, i){
          return <div key={i}>{row}</div>
        })}
      </div>
    )
  }
}

export default Grid;