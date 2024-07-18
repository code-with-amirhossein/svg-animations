# Drawing Animations

## Introduction

Drawing animations involve animating the process of drawing SVG paths, giving the impression that they are being drawn in real-time. This technique is particularly effective for creating engaging visual effects, such as handwriting, logo reveals, or any illustration that benefits from showing the creation process.

## Basic Concepts

### Stroke-Dasharray and Stroke-Dashoffset

- **stroke-dasharray**: Defines the pattern of dashes and gaps used to stroke paths.
- **stroke-dashoffset**: Specifies the distance into the dash pattern to start the dash.

By animating these properties, you can create the effect of a path being drawn over time.

## Example: Simple Drawing Animation with CSS

### SVG Structure

Here’s an example SVG with a path that will be animated to look like it is being drawn.

```xml
<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <path id="path" d="M10,90 Q140,10 280,90 T400,90" stroke="black" fill="none" stroke-width="2"/>
</svg>
```

<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <path id="path" d="M10,90 Q140,10 280,90 T400,90" stroke="black" fill="none" stroke-width="2"/>
</svg>

### Adding CSS Animation

Use CSS to animate the `stroke-dashoffset` property.

```html
<style>
  #path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: draw 5s linear forwards;
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
```

## Example: Drawing Animation with Anime.js

### SVG Structure

Here’s an example of an SVG path that will be animated using Anime.js.

```xml
<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <path id="animePath" d="M10,90 Q140,10 280,90 T400,90" stroke="black" fill="none" stroke-width="2"/>
</svg>
```

<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <path id="animePath" d="M10,90 Q140,10 280,90 T400,90" stroke="black" fill="none" stroke-width="2"/>
</svg>

### Adding Drawing Animation with Anime.js

Use Anime.js to animate the `stroke-dashoffset` property.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script>
  anime({
    targets: '#animePath',
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 3000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
  });
</script>
```

## Example: Drawing Animation with GSAP

### SVG Structure

Here’s an example of an SVG path that will be animated using GSAP.

```xml
<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <path id="gsapPath" d="M10,90 Q140,10 280,90 T400,90" stroke="black" fill="none" stroke-width="2"/>
</svg>
```

<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <path id="gsapPath" d="M10,90 Q140,10 280,90 T400,90" stroke="black" fill="none" stroke-width="2"/>
</svg>

### Adding Drawing Animation with GSAP

Use GSAP to animate the `stroke-dashoffset` property.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
<script>
  gsap.fromTo("#gsapPath", 
    { strokeDasharray: "1000", strokeDashoffset: "1000" }, 
    { strokeDashoffset: "0", duration: 3, ease: "power1.inOut", repeat: -1, yoyo: true }
  );
</script>
```

## Combining with Other Effects

You can combine drawing animations with other effects, such as color changes or transformations, to create more complex animations.

```html
<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <path id="complexPath" d="M10,90 Q140,10 280,90 T400,90" stroke="black" fill="none" stroke-width="2"/>
</svg>

<script>
  gsap.fromTo("#complexPath", 
    { strokeDasharray: "1000", strokeDashoffset: "1000" }, 
    { strokeDashoffset: "0", duration: 3, ease: "power1.inOut", repeat: -1, yoyo: true }
  );
  
  gsap.to("#complexPath", {
    stroke: "red",
    duration: 1.5,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
  });
</script>
```

<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <path id="complexPath" d="M10,90 Q140,10 280,90 T400,90" stroke="black" fill="none" stroke-width="2"/>
</svg>

## Conclusion

Drawing animations can add a dynamic and engaging element to your web projects. By animating the `stroke-dasharray` and `stroke-dashoffset` properties, you can create the effect of SVG paths being drawn in real-time. Using libraries like Anime.js and GSAP allows you to easily implement and customize these animations to create unique and compelling visual effects. Experiment with combining drawing animations with other transformations and styles to create complex and captivating animations.