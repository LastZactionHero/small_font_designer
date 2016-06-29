import React from 'react';
import Grid from 'components/grid';

class Designer extends React.Component {

  handleUpdate = (pixels) => {
    this.props.images.setImage(this.props.character, pixels)
    this.forceUpdate();
  }

  render() {
    return (
      <div class='designer'>
        <span className='background-character'>{this.props.character}</span>
        <Grid pixels={this.props.images.getImage(this.props.character)} onUpdate={this.handleUpdate}/>
      </div>
    )
  }
}

export default Designer;