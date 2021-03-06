require('normalize.css/normalize.css');
require('styles/App.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css')

import React from 'react';
import Characters from 'sources/characters';
import Designer from 'components/designer';
import Output from 'components/output';
import Images from 'sources/images';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      characters: new Characters(),
      images: new Images(),
    };
  }

  handleSelectCharacter = (item) => {
    var selected = item.target.attributes.getNamedItem('data-character').value;
    this.setState({
      selected: selected
    });
  }

  render() {
    var getStartedAlert = null;
    var encoder = null;
    if(!this.state.selected){
      getStartedAlert = <div className='alert alert-success'>Select a character to get started.</div>
    } else {
      encoder = <Output characters={this.state.characters} images={this.state.images} />
    }

    return (
      <div className="index container">
        <h1>Small Font Designer</h1>
        <p>
          <a href='https://github.com/LastZactionHero/rle_font' target='_blank'>View on Github</a> | @LastZactionHero
        </p>
        {getStartedAlert}
        <div className="row">
          <div className="col-md-3">
            <div className="list-group">
              {this.state.characters.list().map(function(character){
                var isActive = this.state.selected == character;
                return <a key={character} 
                          onClick={this.handleSelectCharacter}
                          href="javascript:void(0)" 
                          data-character={character}
                          className={isActive ? 'active list-group-item' : 'list-group-item'}>
                            {character}
                        </a>
              }.bind(this))}
            </div>
          </div>
          <div className="col-md-9">
            <Designer character={this.state.selected} images={this.state.images}/>
            <hr/>
            {encoder}
          </div>
        </div>

      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
