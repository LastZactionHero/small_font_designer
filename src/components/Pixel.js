import React from 'react';

class Pixel extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selected: props.selected
    }
  }

  handleSelected = () => {
    this.setState({selected: !this.state.selected});
    this.props.clickHandler(this.props.rowIdx, this.props.colIdx)
  }

  render(){
    return(
      <div 
        onClick={this.handleSelected}
        className={this.state.selected ? 'pixel selected' : 'pixel'}>
      </div>
    )
  }
}

export default Pixel;