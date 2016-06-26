import React from 'react';
import Grid from 'components/grid';

class Designer extends React.Component {
  render() {
    return (
      <div class='designer'>
        <span className='background-character'>{this.props.character}</span>
        <Grid />
      </div>
    )
  }
}

export default Designer;