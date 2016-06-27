import React from 'react';

class Pixel extends React.Component {

  constructor(props){
    super(props)
  }

  handleSelected = () => {
    this.props.clickHandler(this.props.rowIdx, this.props.colIdx)
  }

  render(){
    return(
      <div 
        onClick={this.handleSelected}
        className={this.props.selected ? 'pixel selected' : 'pixel'}>
      </div>
    )
  }
}

export default Pixel;