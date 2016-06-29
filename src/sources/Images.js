class Images {
  constructor() {
    this.characterImages = {}
  }
  setImage(character, grid) {
    this.characterImages[character] = grid;
  }
  getImage(character){
    var image = this.characterImages[character];
    var nullImage = Array.apply(null, Array(8)).map(function() {
      return Array.apply(null, Array(8)).map(function() { return false} );
    });
    return image || nullImage;
  }
}

export default Images;