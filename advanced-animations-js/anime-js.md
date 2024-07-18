# Using Anime.js

## Introduction

Anime.js is a lightweight and powerful JavaScript animation library that simplifies the process of creating complex animations. With its intuitive API, Anime.js makes it easy to animate HTML elements, SVGs, and more. It supports a wide range of features, including keyframes, easing functions, and timelines, making it a popular choice for creating smooth and engaging animations.

## Setting Up Anime.js

### Installation

You can include Anime.js in your project via a CDN or by installing it using npm.

#### Using a CDN

Include the Anime.js library in your HTML file using a CDN link.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anime.js Animation</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
</head>
<body>
  <!-- Your SVG content here -->
</body>
</html>
```

#### Using npm

If you are using a build tool like Webpack or Parcel, you can install Anime.js via npm.

```bash
npm install animejs
```

Then, import Anime.js into your JavaScript file.

```javascript
import anime from 'animejs/lib/anime.es.js';
```

## Basic Anime.js Animation

### Basic Example

To create a basic animation with Anime.js, you can use the `anime` function and pass in the target element and animation properties.

```javascript
anime({
  targets: '.animated-rect',
  translateX: 200,
  duration: 2000,
  easing: 'easeInOutQuad'
});
```

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect class="animated-rect" x="0" y="50" width="50" height="50" fill="blue" />
</svg>
```

[//]: # (<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">)

[//]: # (  <rect class="animated-rect" x="0" y="50" width="50" height="50" fill="blue" />)

[//]: # (</svg>)

### Keyframe Animations

Anime.js supports keyframe animations, allowing you to define multiple stages of an animation.

```javascript
anime({
  targets: '.animated-rect',
  keyframes: [
    { translateX: 100 },
    { translateY: 50 },
    { translateX: 200 },
    { translateY: 0 }
  ],
  duration: 4000,
  easing: 'easeInOutQuad'
});
```

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect class="animated-rect" x="0" y="50" width="50" height="50" fill="green" />
</svg>
```

[//]: # (<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">)

[//]: # (  <rect class="animated-rect" x="0" y="50" width="50" height="50" fill="green" />)

[//]: # (</svg>)

### Easing Functions

Anime.js provides a wide range of easing functions to create natural and realistic animations.

```javascript
anime({
  targets: '.animated-rect',
  translateX: 200,
  duration: 2000,
  easing: 'easeOutElastic(1, .8)'
});
```

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect class="animated-rect" x="0" y="50" width="50" height="50" fill="red" />
</svg>
```

[//]: # (<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">)

[//]: # (  <rect class="animated-rect" x="0" y="50" width="50" height="50" fill="red" />)

[//]: # (</svg>)

## Advanced Usage

### Staggering Animations

Anime.js makes it easy to stagger animations, applying a delay to each element in a group.

```javascript
anime({
  targets: '.staggered-rect',
  translateX: 200,
  delay: anime.stagger(100), // delay by 100ms for each element
  duration: 2000,
  easing: 'easeInOutQuad'
});
```

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect class="staggered-rect" x="0" y="10" width="50" height="50" fill="blue" />
  <rect class="staggered-rect" x="0" y="70" width="50" height="50" fill="red" />
  <rect class="staggered-rect" x="0" y="130" width="50" height="50" fill="yellow" />
</svg>
```

[//]: # (<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">)

[//]: # (  <rect class="staggered-rect" x="0" y="10" width="50" height="50" fill="blue" />)

[//]: # (  <rect class="staggered-rect" x="0" y="70" width="50" height="50" fill="red" />)

[//]: # (  <rect class="staggered-rect" x="0" y="130" width="50" height="50" fill="yellow" />)

[//]: # (</svg>)

### Timeline Animations

Timelines allow you to sequence multiple animations, controlling their playback as a group.

```javascript
const timeline = anime.timeline({
  easing: 'easeInOutQuad',
  duration: 2000,
  loop: true
});

timeline
  .add({
    targets: '.timeline-rect',
    translateX: 200,
  })
  .add({
    targets: '.timeline-rect',
    translateY: 100,
    offset: '-=1000' // Starts 1000ms before the previous animation ends
  })
  .add({
    targets: '.timeline-rect',
    translateX: 0,
    offset: '-=1000'
  })
  .add({
    targets: '.timeline-rect',
    translateY: 0,
    offset: '-=1000'
  });
```

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect class="timeline-rect" x="0" y="0" width="50" height="50" fill="purple" />
</svg>
```

[//]: # (<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">)

[//]: # (  <rect class="timeline-rect" x="0" y="0" width="50" height="50" fill="purple" />)

[//]: # (</svg>)

## Controlling Animations

Anime.js allows you to control the playback of animations, including pausing, playing, reversing, and seeking.

```javascript
const animation = anime({
  targets: '.animated-rect',
  translateX: 200,
  duration: 2000,
  easing: 'easeInOutQuad',
  autoplay: false
});

// Play the animation
animation.play();

// Pause the animation
animation.pause();

// Reverse the animation
animation.reverse();

// Seek to a specific time
animation.seek(1000);
```

## Conclusion

Anime.js provides a powerful and flexible way to create animations with ease. Its intuitive API, support for keyframes, easing functions, and timelines make it an excellent choice for animating SVG elements and more. By leveraging Anime.js, you can create smooth, engaging, and high-performance animations that enhance the user experience on your web pages.

[//]: # (TODO: add js)
