# Small Font Designer

Design a small, variable-width font for use in low memory/resolution applications (e.g. Arduino). Fonts are created by selecting pixels overlaying a browser font.

### Designer
![Alt text](misc/screenshot_designer.png?raw=true "Title")

### RLE Output
![Alt text](misc/screenshot_output.png?raw=true "Title")

## Usage
```
npm install
npm start
```

## Font Size
Maximum character size is 8x8. If a character does not use the entire 8-pixel width, it will be truncated to the amount used.

## Run Length Encoding
The output is compressed with RLE.

```
'[character]': '[char width]-[pixel is active: t/f][run length];repeat...'
```

#### Example:
```
'A': '5-f7;t1;f3;t1;f1;t1;f2;t1;f1;t1;f1;t6;f3;t2;f3;t1;f5;',
```
- Character: A
- Width: 5. This character only occupies 5 pixels in width
- Runs: Off for 7 pixels; On for 1 pixel; Off for 3 pixels...

#### Sample Output:
```
'A': '5-f7;t1;f3;t1;f1;t1;f2;t1;f1;t1;f1;t6;f3;t2;f3;t1;f5;',
'B': '5-f5;t6;f3;t5;f1;t1;f2;t3;f3;t6;f5;',
'C': '5-f6;t3;f1;t1;f3;t2;f4;t1;f4;t1;f3;t1;f1;t3;f6;',
'D': '5-f5;t4;f1;t1;f3;t2;f3;t2;f3;t2;f3;t5;f6;',
'E': '5-f5;t6;f4;t4;f1;t1;f4;t1;f4;t5;f5;',
'F': '4-f4;t5;f3;t5;f3;t1;f3;t1;f7;',
'G': '6-f7;t4;f1;t1;f4;t2;f5;t1;f2;t4;f4;t1;f1;t4;f7;',
'H': '5-f5;t1;f3;t2;f3;t7;f3;t2;f3;t2;f3;t1;f5;',
```