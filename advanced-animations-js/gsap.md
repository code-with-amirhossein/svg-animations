# Integrating GreenSock (GSAP)

## Introduction

GreenSock Animation Platform (GSAP) is a powerful JavaScript library that simplifies the creation of complex animations. GSAP offers a robust set of tools for creating high-performance animations with greater control and flexibility compared to traditional CSS or SMIL animations. It is widely used in the industry for creating professional-grade animations.

## Setting Up GSAP

### Installation

To use GSAP, you need to include the library in your project. You can do this via a CDN or by installing it using npm.

#### Using a CDN

Include the GSAP library in your HTML file using a CDN link.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GSAP Animation</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
</head>
<body>
  <!-- Your SVG content here -->
</body>
</html>
```

#### Using npm

If you are using a build tool like Webpack or Parcel, you can install GSAP via npm.

```bash
npm install gsap
```

Then, import GSAP into your JavaScript file.

```javascript
import { gsap } from 'gsap';
```

## Basic GSAP Animation

### Tweening

Tweening is the process of creating intermediate frames between two keyframes to produce a smooth transition. GSAP's `gsap.to()` method allows you to animate properties of an element over a specified duration.

```javascript
const element = document.querySelector('.animated-rect');

gsap.to(element, {
  x: 200,
  duration: 2,
  ease: 'power1.inOut'
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

### Timeline Animations

Timelines allow you to sequence multiple animations and control their playback as a group. GSAP's `Timeline` object makes it easy to build complex animation sequences.

```javascript
const timeline = gsap.timeline({ repeat: -1, yoyo: true });

timeline
  .to('.animated-rect', { x: 200, duration: 1, ease: 'power1.inOut' })
  .to('.animated-rect', { y: 100, duration: 1, ease: 'power1.inOut' })
  .to('.animated-rect', { x: 0, duration: 1, ease: 'power1.inOut' })
  .to('.animated-rect', { y: 50, duration: 1, ease: 'power1.inOut' });
```

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect class="animated-rect" x="0" y="50" width="50" height="50" fill="green" />
</svg>
```

[//]: # (<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">)

[//]: # (  <rect class="animated-rect" x="0" y="50" width="50" height="50" fill="green" />)

[//]: # (</svg>)

### Stagger Animations

GSAP provides an easy way to stagger animations, allowing you to animate multiple elements in sequence with a slight delay between each.

```javascript
const elements = document.querySelectorAll('.staggered-rect');

gsap.to(elements, {
  x: 200,
  duration: 1,
  stagger: 0.2,
  ease: 'power1.inOut'
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

### Controlling Animations

GSAP allows you to pause, play, reverse, and seek animations, giving you full control over the playback.

```javascript
const animation = gsap.to('.animated-rect', {
  x: 200,
  duration: 2,
  ease: 'power1.inOut',
  paused: true
});

// Play the animation
animation.play();

// Pause the animation
animation.pause();

// Reverse the animation
animation.reverse();

// Seek to a specific time
animation.seek(1);
```

## Conclusion

Integrating GreenSock (GSAP) into your project allows you to create sophisticated and high-performance animations with ease. By leveraging its powerful API, you can build complex animation sequences, control their playback, and enhance the interactivity of your web applications. Whether you are creating simple transitions or intricate animations, GSAP provides the tools you need to achieve professional results.

[//]: # (TODO: add js)