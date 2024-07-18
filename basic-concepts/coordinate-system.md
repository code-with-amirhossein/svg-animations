# Understanding SVG Coordinate System

## Introduction

The SVG (Scalable Vector Graphics) coordinate system is a crucial concept to understand when working with SVG graphics. It defines how elements are positioned and scaled within the SVG canvas. This section covers the basics of the SVG coordinate system, including the default coordinate system, transformations, and viewBox attribute.

## Default Coordinate System

### Origin and Units

The default coordinate system in SVG has its origin (0,0) at the top-left corner of the SVG canvas. The units are in pixels by default, but can be specified in other units such as em, ex, pt, pc, cm, mm, in, and percentages.

### Basic Example

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="100" height="50" fill="blue" />
</svg>
```

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="100" height="50" fill="blue" />
</svg>

## The `viewBox` Attribute

### Definition and Purpose

The `viewBox` attribute defines the coordinate system within the SVG canvas. It allows you to specify a custom coordinate system and scale the content to fit within the SVG element's dimensions.

### Syntax

The `viewBox` attribute takes four values: `min-x`, `min-y`, `width`, and `height`.

```xml
<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="50" height="50" fill="blue" />
</svg>
```

<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="50" height="50" fill="blue" />
</svg>

### Aspect Ratio and Scaling

The `preserveAspectRatio` attribute controls how the SVG content is scaled and aligned within the viewport.

```xml
<svg width="200" height="200" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="50" height="50" fill="blue" />
</svg>
```

<svg width="200" height="200" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="50" height="50" fill="blue" />
</svg>

## Transformations

### Translation

Translation moves elements by a specified distance along the x and y axes.

```xml
<rect x="10" y="10" width="50" height="50" fill="blue" transform="translate(20,30)" />
```

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="50" height="50" fill="blue" transform="translate(20,30)" />
</svg>

### Rotation

Rotation rotates elements around a specified point.

```xml
<rect x="50" y="50" width="50" height="50" fill="blue" transform="rotate(45 75 75)" />
```

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="50" height="50" fill="blue" transform="rotate(45 75 75)" />
</svg>

### Scaling

Scaling resizes elements by a specified factor along the x and y axes.

```xml
<rect x="10" y="10" width="50" height="50" fill="blue" transform="scale(2,1.5)" />
```

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="50" height="50" fill="blue" transform="scale(2,1.5)" />
</svg>

## Combining Transformations

You can combine multiple transformations in a single `transform` attribute.

```xml
<rect x="10" y="10" width="50" height="50" fill="blue" transform="translate(20,30) rotate(45 75 75) scale(2,1.5)" />
```

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="50" height="50" fill="blue" transform="translate(20,30) rotate(45 75 75) scale(2,1.5)" />
</svg>

## Conclusion

Understanding the SVG coordinate system is essential for creating and manipulating SVG graphics effectively. By mastering the default coordinate system, viewBox attribute, and transformations, you can precisely control the positioning and scaling of SVG elements.