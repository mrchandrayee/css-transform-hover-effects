# CSS Transform Hover Effect

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-transform-hover-effects/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A standalone, responsive recreation of the uploaded 25.87-second screen recording.

## What the video shows

The page heading reads **CSS Transform Hover Effect**. The page uses a black background, a blue-glowing heading, and an orange-bordered dark scrollable panel. Each row has an orange gradient square preview on the left and a dark code panel on the right. Hovering the preview applies the transform.

The ten examples are shown in this order:

1. Scale Up
2. Rotate
3. Move Up
4. Skew X
5. Rotate 360°
6. Move Right
7. Scale Down
8. Skew Y
9. Flip X
10. 3D Pop Effect

## CSS transcribed from the video

The declarations legible in the recording are preserved:

```css
.scale:hover {
  transform: scale(1.2);
}

.rotate:hover {
  transform: rotate(25deg);
}

.moveUp:hover {
  transform:
  translateY(-25px);
}

.skewX:hover {
  transform: skewX(15deg);
}

.rotate360:hover {
  transform: rotate(360deg);
}

.moveRight:hover {
  transform: translateX(25px);
}

.scaleDown:hover {
  transform: scale(.8);
}

.skewY:hover {
  transform: skewY(15deg);
}

.flipX:hover {
  transform: rotateX(180deg);
}

.pop3d:hover {
  transform:
    perspective(600px)
    rotateX(20deg)
    rotateY(-20deg)
    scale(1.1);
}
```

The visible CSS selector names and transform values are retained. The page layout, base card styles, transitions, and touch interaction are completed so the examples run as a standalone project.

## Run locally

1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. Hover each orange tile to see its transform.
4. On touch screens, tap a tile to toggle its effect. Tap outside or press Escape to reset.

No npm install, build process, external library, or network connection is needed.

## Files

- `index.html` — ten demo cards and code snippets
- `style.css` — design, hover transforms, and responsive layout
- `script.js` — touch toggle and reset behavior
- `README.md` — this guide

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
