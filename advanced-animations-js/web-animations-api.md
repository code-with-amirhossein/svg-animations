# Using the Web Animations API

## Introduction

The Web Animations API (WAAPI) is a modern JavaScript API that allows you to create complex animations directly in the browser. WAAPI provides a performant and flexible way to animate elements, offering better integration with the browser's rendering engine compared to traditional methods like CSS animations or JavaScript libraries.

## Basic Concepts

### Keyframes

Keyframes define the stages of an animation, specifying the styles at various points during the animation.

```javascript
const keyframes = [
  { transform: 'translateX(0px)' },
  { transform: 'translateX(200px)' }
];
```

### Timing Options

Timing options control the duration, delay, easing, and iteration of the animation.

```javascript
const timing = {
  duration: 2000,
  iterations: Infinity,
  easing: 'ease-in-out'
};
```

## Creating an Animation

### Basic Example

To create an animation, you need to select the element and call the `animate` method with the keyframes and timing options.

```javascript
const element = document.querySelector('.animated-rect');
const keyframes = [
  { transform: 'translateX(0px)' },
  { transform: 'translateX(200px)' }
];
const timing = {
  duration: 2000,
  iterations: Infinity,
  easing: 'ease-in-out'
};

element.animate(keyframes, timing);
```

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect class="animated-rect" x="0" y="50" width="50" height="50" fill="blue" />
</svg>
```

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect class="animated-rect" x="0" y="50" width="50" height="50" fill="blue" />
</svg>

### Controlling Animations

The Web Animations API allows you to control the playback of animations, including pausing, playing, reversing, and seeking.

```javascript
const animation = element.animate(keyframes, timing);

// Pause the animation
animation.pause();

// Play the animation
animation.play();

// Reverse the animation
animation.reverse();

// Seek to a specific time (in milliseconds)
animation.currentTime = 1000;
```

### Handling Animation Events

You can listen for various animation events such as `finish`, `cancel`, and `remove`.

```javascript
animation.onfinish = () => {
  console.log('Animation finished');
};

animation.oncancel = () => {
  console.log('Animation cancelled');
};

animation.onremove = () => {
  console.log('Animation removed');
};
```

## Advanced Usage

### Grouping Animations

You can group multiple animations together using `AnimationGroup` or `SequenceEffect` to create more complex animations.

```javascript
const moveRight = new KeyframeEffect(
  element,
  [{ transform: 'translateX(0px)' }, { transform: 'translateX(200px)' }],
  { duration: 1000, fill: 'forwards' }
);

const moveDown = new KeyframeEffect(
  element,
  [{ transform: 'translateY(0px)' }, { transform: 'translateY(200px)' }],
  { duration: 1000, fill: 'forwards' }
);

const sequence = new SequenceEffect([moveRight, moveDown]);
const sequenceAnimation = new Animation(sequence, document.timeline);

sequenceAnimation.play();
```

### Using `animate` Method with Options

You can pass a variety of options to the `animate` method to fine-tune your animations.

```javascript
const animationOptions = {
  id: 'my-animation',
  delay: 500,
  direction: 'alternate',
  duration: 1500,
  iterations: 3,
  easing: 'ease-in-out'
};

element.animate(keyframes, animationOptions);
```

## Conclusion

The Web Animations API offers a robust and performant way to create and control animations directly in the browser. By using keyframes and timing options, you can create smooth and complex animations. Additionally, the ability to control and handle animation events provides flexibility and interactivity that can enhance the user experience on your web pages.

[//]: # (TODO: ADD JS)