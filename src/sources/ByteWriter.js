class ByteWriter {
  constructor(image) {
    this.image = image;
  }

  compress() {
    var truncated = this._truncated();
    var width = this._lastRowIdx() + 1;

    var bytes = []
    var byte = 0;
    var bit = 0;

    truncated.forEach((pixel) => {
      var mask = 1 << (7 - bit);
      if(pixel) byte |= mask;

      bit++;
      if(bit == 8){
        bytes.push(byte.toString(16));
        byte = 0;
        bit = 0;
      }
    });
    if(bit != 0) bytes.push(byte);

    var byteStr = bytes.map(function(b){
      if(b.length == 1){
        return '0' + b;
      }
      return b;
    }).join('')

    return width + '-' + byteStr;
  }

  _truncated() {
    var lastRowIdx = this._lastRowIdx();

    var truncated = [];
    this.image.forEach((row) => {
      truncated = truncated.concat(row.slice(0,lastRowIdx+1))
    });
    return truncated;
  }

  _lastRowIdx() {
    var lastRowIdx = 0;
    this.image.forEach( (row) => {
      var lastPixelInRowIdx = row.lastIndexOf(true)
      if(lastPixelInRowIdx > lastRowIdx)
        lastRowIdx = lastPixelInRowIdx;
    });
    return lastRowIdx;
  }
}

export default ByteWriter;