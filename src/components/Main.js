require('normalize.css/normalize.css');
require('styles/App.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css')

import React from 'react';
import Characters from 'sources/characters';
import Designer from 'components/designer';
import RleOutput from 'components/rleoutput';
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
    return (
      <div className="index container">
        <h1>Small Font Designer</h1>
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
          <div className="col-md-6">
            <Designer character={this.state.selected} images={this.state.images}/>
          </div>
        </div>
        <hr/>
        <div>
          <RleOutput characters={this.state.characters} images={this.state.images} />
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
