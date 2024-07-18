#!/bin/bash

# Base directory for the documentation
base_dir="docs"

# Array of paths
paths=(
  "introduction/overview"
  "introduction/benefits"
  "basic-concepts/syntax-structure"
  "basic-concepts/coordinate-system"
  "tools-libraries/inkscape"
  "tools-libraries/adobe-illustrator"
  "tools-libraries/svgomg"
  "tools-libraries/libraries"
  "basic-animations/css"
  "basic-animations/smil"
  "advanced-animations-js/introduction"
  "advanced-animations-js/web-animations-api"
  "advanced-animations-js/gsap"
  "advanced-animations-js/anime-js"
  "interactive-animations/user-events"
  "interactive-animations/maps-diagrams"
  "interactive-animations/data-visualizations"
  "optimizing-animations/performance"
  "optimizing-animations/minimizing-file-size"
  "optimizing-animations/reducing-jank"
  "techniques-examples/morphing"
  "techniques-examples/path-animations"
  "techniques-examples/drawing-animations"
  "techniques-examples/masks-clipping-paths"
  "workflows/integration"
  "workflows/coordination"
  "workflows/testing-debugging"
  "case-studies/success-stories"
  "case-studies/pitfalls-solutions"
  "case-studies/industry-examples"
  "resources/recommended-reading"
  "resources/online-tutorials"
  "resources/communities-forums"
)

# Array of titles
titles=(
  "Overview of SVG"
  "Benefits of Using SVG Animations"
  "SVG Syntax and Structure"
  "Understanding SVG Coordinate System"
  "Inkscape"
  "Adobe Illustrator"
  "SVGOMG (SVGO)"
  "Libraries: Snap.svg, GSAP, Anime.js"
  "Animating with CSS"
  "Animating with SMIL"
  "Introduction to JavaScript Animations"
  "Using the Web Animations API"
  "Integrating GreenSock (GSAP)"
  "Using Anime.js"
  "Responding to User Events"
  "Creating Interactive Maps and Diagrams"
  "Animating Data Visualizations"
  "Performance Best Practices"
  "Minimizing SVG File Size"
  "Reducing Animation Jank"
  "Morphing"
  "Path Animations"
  "Drawing Animations"
  "Complex Animations with Masks and Clipping Paths"
  "Integrating SVG Animations into Modern Web Projects"
  "Coordinating with Designers and Developers"
  "Testing and Debugging SVG Animations"
  "Success Stories"
  "Common Pitfalls and Solutions"
  "Industry Examples"
  "Recommended Reading"
  "Online Tutorials and Courses"
  "Communities and Forums"
)

# Create directories and files
length=${#paths[@]}
index=0

while [ $index -lt $length ]; do
  path=${paths[$index]}
  title=${titles[$index]}

  # Create directory if it doesn't exist
  dir_path="$base_dir/$(dirname "$path")"
  if [ ! -d "$dir_path" ]; then
    mkdir -p "$dir_path" || { echo "Failed to create directory: $dir_path"; exit 1; }
  fi

  # Create markdown file with a title
  file_path="$base_dir/$path.md"
  if [ ! -f "$file_path" ]; then
    echo "# $title" > "$file_path" || { echo "Failed to create file: $file_path"; exit 1; }
  fi

  index=$((index + 1))
done

echo "Documentation structure has been created successfully."
