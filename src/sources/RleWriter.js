class RleWriter {
  constructor(image) {
    this.image = image;
  }

  compress() {
    var truncated = this._truncated();

    var rle = []
    var current = truncated[0];
    var runCount = 0;

    truncated.forEach((pixel) => {
      if(pixel == current) {
        runCount++;
      } else {
        rle.push({active: current, length: runCount})
        current = pixel;
        runCount = 1;
      }
    });
    rle.push({active: current, length: runCount})

    var rleString = this._lastRowIdx() + 1 + '-';
    rle.forEach((run) => {
      rleString += (run.active ? 't' : 'f')
      rleString += run.length
      rleString += ';'
    });

    return rleString;
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

export default RleWriter;