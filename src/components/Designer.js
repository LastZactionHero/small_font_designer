import React from 'react';
import Grid from 'components/grid';

class Designer extends React.Component {

  constructor(props) {
    super(props)

    var pixels = Array.apply(null, Array(8)).map(function() { 
      return Array.apply(null, Array(8)).map(function() { return false} );
    } );

    this.state = {
      pixels: pixels
    }
  }

  handleUpdate = (pixels) => {
    console.log(pixels)
    this.setState({pixels: pixels})
  }

  render() {
    return (
      <div class='designer'>
        <span className='background-character'>{this.props.character}</span>
        <Grid pixels={this.state.pixels} onUpdate={this.handleUpdate}/>
      </div>
    )
  }
}

export default Designer;