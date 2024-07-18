# Complex Animations with Masks and Clipping Paths

## Introduction

Masks and clipping paths are powerful SVG features that allow you to create complex animations and effects. Masks define which parts of an element are visible, while clipping paths define which parts of an element are displayed. By combining these features with animations, you can create intricate and engaging visual effects.

## Basic Concepts

### Clipping Paths

A clipping path restricts the region of the SVG content that is visible. Anything outside the path is hidden.

### Masks

Masks use the luminance or alpha values of another element to define the transparency of the content they are applied to. This allows for more complex visibility effects than clipping paths.

## Example: Clipping Path Animation

### SVG Structure

Here’s an example SVG that uses a clipping path.

```xml
<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="clip">
      <circle id="clipCircle" cx="50" cy="100" r="50" />
    </clipPath>
  </defs>
  <rect width="400" height="200" fill="skyblue" clip-path="url(#clip)" />
  <text x="200" y="100" font-size="40" text-anchor="middle" fill="black">Clipped Text</text>
</svg>
```

<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="clip">
      <circle id="clipCircle" cx="50" cy="100" r="50" />
    </clipPath>
  </defs>
  <rect width="400" height="200" fill="skyblue" clip-path="url(#clip)" />
  <text x="200" y="100" font-size="40" text-anchor="middle" fill="black">Clipped Text</text>
</svg>

### Adding Animation with GSAP

Animate the clipping path using GSAP.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
<script>
  gsap.to("#clipCircle", {
    duration: 2,
    cx: 350,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
</script>
```

## Example: Mask Animation

### SVG Structure

Here’s an example SVG that uses a mask.

```xml
<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <mask id="mask">
      <rect width="400" height="200" fill="white" />
      <circle id="maskCircle" cx="50" cy="100" r="50" fill="black" />
    </mask>
  </defs>
  <rect width="400" height="200" fill="lightgreen" mask="url(#mask)" />
  <text x="200" y="100" font-size="40" text-anchor="middle" fill="black">Masked Text</text>
</svg>
```

<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <mask id="mask">
      <rect width="400" height="200" fill="white" />
      <circle id="maskCircle" cx="50" cy="100" r="50" fill="black" />
    </mask>
  </defs>
  <rect width="400" height="200" fill="lightgreen" mask="url(#mask)" />
  <text x="200" y="100" font-size="40" text-anchor="middle" fill="black">Masked Text</text>
</svg>

### Adding Animation with GSAP

Animate the mask using GSAP.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
<script>
  gsap.to("#maskCircle", {
    duration: 2,
    cx: 350,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
</script>
```

## Combining Masks and Clipping Paths

You can combine masks and clipping paths to create even more complex animations.

### SVG Structure

```xml
<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="clip">
      <rect x="0" y="0" width="400" height="200" />
    </clipPath>
    <mask id="mask">
      <rect width="400" height="200" fill="white" />
      <circle id="maskCircle" cx="50" cy="100" r="50" fill="black" />
    </mask>
  </defs>
  <rect width="400" height="200" fill="lightblue" clip-path="url(#clip)" />
  <rect width="400" height="200" fill="lightgreen" mask="url(#mask)" />
  <text x="200" y="100" font-size="40" text-anchor="middle" fill="black">Combined Effects</text>
</svg>
```

<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="clip">
      <rect x="0" y="0" width="400" height="200" />
    </clipPath>
    <mask id="mask">
      <rect width="400" height="200" fill="white" />
      <circle id="maskCircle" cx="50" cy="100" r="50" fill="black" />
    </mask>
  </defs>
  <rect width="400" height="200" fill="lightblue" clip-path="url(#clip)" />
  <rect width="400" height="200" fill="lightgreen" mask="url(#mask)" />
  <text x="200" y="100" font-size="40" text-anchor="middle" fill="black">Combined Effects</text>
</svg>

### Adding Combined Animation with GSAP

Animate both the clipping path and mask using GSAP.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
<script>
  gsap.to("#maskCircle", {
    duration: 2,
    cx: 350,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });

  gsap.to("#clip rect", {
    duration: 2,
    x: 200,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
</script>
```

## Conclusion

Masks and clipping paths offer powerful ways to create complex animations and visual effects in SVG. By animating these properties with libraries like GSAP, you can create dynamic and engaging experiences that captivate your audience. Experiment with different shapes, paths, and animations to discover the full potential of masks and clipping paths in your SVG projects.