# Animating with CSS

## Introduction

Animating SVG elements with CSS is a powerful technique that allows you to create dynamic and engaging web graphics. CSS animations are widely supported across modern browsers and offer a straightforward way to add motion to your SVG elements without relying on JavaScript or external libraries.

## Basic Concepts

### CSS Transitions

CSS transitions enable you to change property values smoothly over a specified duration. They are perfect for simple animations like changing colors, sizes, or positions.

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="50" class="transition-circle" />
</svg>

<style>
  .transition-circle {
    fill: blue;
    transition: fill 0.5s ease;
  }

  .transition-circle:hover {
    fill: red;
  }
</style>
```

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="50" class="transition-circle" />
</svg>

### CSS Keyframe Animations

CSS keyframes allow you to define intermediate steps in an animation, making it possible to create more complex motion effects.

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="50" class="keyframe-circle" />
</svg>

<style>
  @keyframes moveCircle {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(100px);
    }
    100% {
      transform: translateX(0);
    }
  }

  .keyframe-circle {
    fill: green;
    animation: moveCircle 2s infinite;
  }
</style>
```

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="50" class="keyframe-circle" />
</svg>

## Transformations

### Scaling

Scaling can be applied to SVG elements to increase or decrease their size.

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="100" height="100" class="scale-rect" />
</svg>

<style>
  @keyframes scaleRect {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  .scale-rect {
    fill: orange;
    animation: scaleRect 3s infinite;
  }
</style>
```

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="100" height="100" class="scale-rect" />
</svg>

### Rotation

Rotation can be used to spin SVG elements around a specified point.

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="100" height="100" class="rotate-rect" />
</svg>

<style>
  @keyframes rotateRect {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .rotate-rect {
    fill: purple;
    transform-origin: center;
    animation: rotateRect 4s infinite;
  }
</style>
```

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="100" height="100" class="rotate-rect" />
</svg>

## Combining Animations

You can combine multiple animations and transformations to create more complex effects.

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="100" rx="50" ry="25" class="combined-circle" />
</svg>

<style>
  @keyframes combinedAnimation {
    0% {
      transform: scale(1) rotate(0deg);
    }
    50% {
      transform: scale(1.5) rotate(180deg);
    }
    100% {
      transform: scale(1) rotate(360deg);
    }
  }

  .combined-circle {
    fill: teal;
    transform-origin: center;
    animation: combinedAnimation 5s infinite;
  }
</style>
```

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="100" rx="50" ry="25" class="combined-circle" />
</svg>

## Conclusion

CSS animations provide a powerful and efficient way to add motion to your SVG elements. By using transitions, keyframes, and transformations, you can create engaging and interactive graphics that enhance the user experience. Experiment with different animation techniques to discover the full potential of CSS animations for SVG.


<style>


@keyframes combinedAnimation {
    0% {
      transform: scale(1) rotate(0deg);
    }
    50% {
      transform: scale(1.5) rotate(180deg);
    }
    100% {
      transform: scale(1) rotate(360deg);
    }
  }

  .combined-circle {
    fill: teal;
    transform-origin: center;
    animation: combinedAnimation 5s infinite;
  }
@keyframes rotateRect {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .rotate-rect {
    fill: purple;
    transform-origin: center;
    animation: rotateRect 4s infinite;
  }

@keyframes scaleRect {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  .scale-rect {
    fill: orange;
    animation: scaleRect 3s infinite;
  }

@keyframes moveCircle {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(100px);
    }
    100% {
      transform: translateX(0);
    }
  }

  .keyframe-circle {
    fill: green;
    animation: moveCircle 2s infinite;
  }

.transition-circle {
    fill: blue;
    transition: fill 0.5s ease;
  }

  .transition-circle:hover {
    fill: red;
  }
</style>