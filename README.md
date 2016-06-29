# Small Font Designer

Design a small, variable-width font for use in low memory/resolution applications (e.g. Arduino). Fonts are created by selecting pixels overlaying a browser font.

### Designer
![Alt text](misc/screenshot_designer.png?raw=true "Title")

## Usage
```
npm install
npm start
```

## Font Size
Maximum character size is 8x8. If a character does not use the entire 8-pixel width, it will be truncated to the amount used.

## Byte Packing

```
'[character]': '[char width]-[bytes]

```

#### Example:
```
'A': '5-0115bfc620'
```
- Character: A
- Width: 5. This character only occupies 5 pixels in width
- Bytes: 0x01     0x15     0xbf     0xc6     0x20
- Bytes: 00000001 00010101 10111111 11000110 00100000

![Alt text](misc/screenshot_a.png?raw=true "Title")

#### Sample Output:
```
'A': '5-0115bfc620',
'B': '5-07a5e8c7c0',
'C': '6-01e860821780',
'D': '5-07a318c7c0',
'E': '5-07e1e843e0',
'F': '4-0f8e8880',
'G': '6-01c8a09e1780',
```