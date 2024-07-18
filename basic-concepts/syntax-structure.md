# SVG Syntax and Structure

## Introduction

SVG (Scalable Vector Graphics) is an XML-based format used for creating two-dimensional vector graphics. Understanding the syntax and structure of SVG is essential for creating and manipulating these graphics effectively.

## Basic Structure of an SVG File

An SVG file starts with the `<svg>` root element and can contain various elements to define shapes, text, and other graphical content.

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <!-- SVG content goes here -->
</svg>
```

### Key Attributes of the `<svg>` Element

- `width` and `height`: Define the dimensions of the SVG canvas.
- `xmlns`: Specifies the XML namespace for SVG.

## Common SVG Elements

### `<rect>` - Rectangle

```xml
<rect x="10" y="10" width="100" height="50" fill="blue" />
```

- `x` and `y`: Coordinates of the top-left corner.
- `width` and `height`: Dimensions of the rectangle.
- `fill`: Fill color.

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="100" height="50" fill="blue" />
</svg>

### `<circle>` - Circle

```xml
<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
```

- `cx` and `cy`: Center coordinates.
- `r`: Radius.
- `stroke`: Stroke color.
- `stroke-width`: Width of the stroke.
- `fill`: Fill color.

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>

### `<ellipse>` - Ellipse

```xml
<ellipse cx="100" cy="50" rx="80" ry="40" fill="green" />
```

- `cx` and `cy`: Center coordinates.
- `rx` and `ry`: Radii along the x and y axes.
- `fill`: Fill color.

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="50" rx="80" ry="40" fill="green" />
</svg>

### `<line>` - Line

```xml
<line x1="0" y1="0" x2="200" y2="200" stroke="orange" />
```

- `x1`, `y1`, `x2`, `y2`: Start and end coordinates.
- `stroke`: Stroke color.

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="0" x2="200" y2="200" stroke="orange" />
</svg>

### `<polygon>` - Polygon

```xml
<polygon points="50,150 150,150 100,50" fill="purple" />
```

- `points`: List of points defining the polygon.
- `fill`: Fill color.

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,150 150,150 100,50" fill="purple" />
</svg>

### `<path>` - Path

```xml
<path d="M10 10 H 90 V 90 H 10 L 10 10" stroke="pink" fill="transparent" />
```

- `d`: Path data (commands and coordinates).
- `stroke`: Stroke color.
- `fill`: Fill color.

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 10 H 90 V 90 H 10 L 10 10" stroke="pink" fill="transparent" />
</svg>

## Text in SVG

### `<text>` Element

```xml
<text x="50" y="50" font-family="Verdana" font-size="20" fill="blue">Hello, SVG!</text>
```

- `x` and `y`: Coordinates of the starting point.
- `font-family`: Font family.
- `font-size`: Font size.
- `fill`: Text color.

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <text x="50" y="50" font-family="Verdana" font-size="20" fill="blue">Hello, SVG!</text>
</svg>

## Grouping Elements

### `<g>` Element

```xml
<g fill="none" stroke="black" stroke-width="2">
  <circle cx="50" cy="50" r="40" />
  <rect x="90" y="10" width="100" height="50" />
</g>
```

- `fill`, `stroke`, `stroke-width`: Inherited by child elements.

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="yellow" stroke-width="2">
    <circle cx="50" cy="50" r="40" />
    <rect x="90" y="10" width="100" height="50" />
  </g>
</svg>

## Transformations

### `transform` Attribute

```xml
<rect x="50" y="20" width="30" height="30" fill="blue" transform="rotate(30)" />
```

- `rotate`, `scale`, `translate`: Transformation functions.

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="20" width="30" height="30" fill="blue" transform="rotate(30)" />
</svg>

## Conclusion

Understanding the syntax and structure of SVG files is fundamental for creating and manipulating vector graphics. The flexibility and power of SVG make it a valuable tool for web developers and designers.