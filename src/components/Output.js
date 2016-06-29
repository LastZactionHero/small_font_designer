import React from 'react';
import ByteWriter from 'sources/bytewriter';

class Output extends React.Component {
  handleCompress = () => {
    this.forceUpdate();
  }

  render() {
    var characters = this.props.characters;
    var images = characters.list().map((character) => {
      var image = this.props.images.getImage(character);
      var writer = new ByteWriter(image);
      return {
        character: character,
        compressed: writer.compress()
      }
    });

    return(
      <div className='output'>
        <p>
          <a className='btn btn-success' onClick={this.handleCompress}>Encode the Font</a>
        </p>
        <p>
          <h4>Output Format</h4>
          <pre>'[character]': '[char width]-[pixel encoded bytes]'</pre>
        </p>
        <h4>Encoded Font</h4>
        <pre>
        {images.map((image) => {
          return '\'' + image.character + '\': \'' + image.compressed + '\',\n'
        })}
        </pre>
      </div>
    )
  }
}

export default Output;