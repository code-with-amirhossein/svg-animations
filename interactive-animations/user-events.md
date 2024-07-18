# Responding to User Events

## Introduction

Interactivity is a crucial aspect of modern web applications, and SVG animations can greatly enhance user experience by responding to user events such as clicks, hovers, and scrolls. By leveraging JavaScript, you can create dynamic and interactive SVG animations that respond to various user interactions.

## Basic Concepts

### Event Listeners

Event listeners are functions that wait for a specific event to occur on an element. Common events include `click`, `mouseover`, `mouseout`, and `scroll`.

### Adding Event Listeners

You can add event listeners to SVG elements using the `addEventListener` method in JavaScript.

```javascript
const element = document.querySelector('.interactive-rect');

element.addEventListener('click', () => {
  alert('Rectangle clicked!');
});
```

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect class="interactive-rect" x="50" y="50" width="100" height="100" fill="blue" />
</svg>
```

[//]: # (<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">)

[//]: # (  <rect class="interactive-rect" x="50" y="50" width="100" height="100" fill="blue" />)

[//]: # (</svg>)

## Creating Interactive Animations

### Click Event

You can trigger animations in response to a click event.

```javascript
const rect = document.querySelector('.click-rect');

rect.addEventListener('click', () => {
  anime({
    targets: rect,
    fill: ['#0000FF', '#FF0000'],
    duration: 1000,
    easing: 'easeInOutQuad'
  });
});
```

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect class="click-rect" x="50" y="50" width="100" height="100" fill="blue" />
</svg>
```

[//]: # (<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">)

[//]: # (  <rect class="click-rect" x="50" y="50" width="100" height="100" fill="blue" />)

[//]: # (</svg>)

### Hover Event

You can create hover effects by using the `mouseover` and `mouseout` events.

```javascript
const hoverRect = document.querySelector('.hover-rect');

hoverRect.addEventListener('mouseover', () => {
  anime({
    targets: hoverRect,
    scale: 1.5,
    duration: 500,
    easing: 'easeInOutQuad'
  });
});

hoverRect.addEventListener('mouseout', () => {
  anime({
    targets: hoverRect,
    scale: 1,
    duration: 500,
    easing: 'easeInOutQuad'
  });
});
```

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect class="hover-rect" x="50" y="50" width="100" height="100" fill="green" />
</svg>
```

[//]: # (<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">)

[//]: # (  <rect class="hover-rect" x="50" y="50" width="100" height="100" fill="green" />)

[//]: # (</svg>)

### Scroll Event

You can create animations that respond to the scroll position of the page.

```javascript
const scrollRect = document.querySelector('.scroll-rect');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  anime({
    targets: scrollRect,
    translateY: scrollY / 2,
    duration: 0,
    easing: 'linear'
  });
});
```

```xml
<svg width="200" height="1000" xmlns="http://www.w3.org/2000/svg">
  <rect class="scroll-rect" x="50" y="50" width="100" height="100" fill="purple" />
</svg>
```

[//]: # (<svg width="200" height="1000" xmlns="http://www.w3.org/2000/svg">)

[//]: # (  <rect class="scroll-rect" x="50" y="50" width="100" height="100" fill="purple" />)

[//]: # (</svg>)

## Combining Events

You can combine multiple events to create more complex interactions.

```javascript
const combinedRect = document.querySelector('.combined-rect');

combinedRect.addEventListener('click', () => {
  anime({
    targets: combinedRect,
    rotate: '1turn',
    duration: 1000,
    easing: 'easeInOutQuad'
  });
});

combinedRect.addEventListener('mouseover', () => {
  anime({
    targets: combinedRect,
    scale: 1.2,
    duration: 500,
    easing: 'easeInOutQuad'
  });
});

combinedRect.addEventListener('mouseout', () => {
  anime({
    targets: combinedRect,
    scale: 1,
    duration: 500,
    easing: 'easeInOutQuad'
  });
});
```

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect class="combined-rect" x="50" y="50" width="100" height="100" fill="orange" />
</svg>
```

[//]: # (<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">)

[//]: # (  <rect class="combined-rect" x="50" y="50" width="100" height="100" fill="orange" />)

[//]: # (</svg>)

## Conclusion

Responding to user events is a powerful way to create interactive and engaging SVG animations. By leveraging JavaScript event listeners and libraries like Anime.js, you can create dynamic animations that respond to clicks, hovers, scrolls, and other user interactions. This enhances the user experience and makes your web applications more interactive and enjoyable.

[//]: # (TODO: add js)
