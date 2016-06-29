import React from 'react';
import RleWriter from 'sources/rlewriter';

class RleOutput extends React.Component {
  handleCompress = () => {
    this.forceUpdate();
  }

  render() {
    var characters = this.props.characters;
    var images = characters.list().map((character) => {
      var image = this.props.images.getImage(character);
      var writer = new RleWriter(image);
      return {
        character: character,
        compressed: writer.compress()
      }
    });

    return(
      <div>
        <div>
          <a className='btn btn-primary' onClick={this.handleCompress}>Compress</a>
        </div>
        <p>
          Output Format: 
          <pre>'[character]': '[char width]-[pixel active true(t)/false(f)][run length];repeat...'</pre>
        </p>
        <pre>
        {images.map((image) => {
          return '\'' + image.character + '\': \'' + image.compressed + '\',\n'
        })}
        </pre>
      </div>
    )
  }
}

export default RleOutput;