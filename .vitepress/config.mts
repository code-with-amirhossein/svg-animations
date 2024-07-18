import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SVG Animations",
  description: "A Knowledge Sharing Of Animating SVG Files for Front-end Developers",
  base: '/svg-animations',
  themeConfig: {
    outline: "deep",
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Overview of SVG', link: '/introduction/overview' },
          { text: 'Benefits of Using SVG Animations', link: '/introduction/benefits' }
        ]
      },
      {
        text: 'Basic Concepts',
        items: [
          { text: 'SVG Syntax and Structure', link: '/basic-concepts/syntax-structure' },
          { text: 'Understanding SVG Coordinate System', link: '/basic-concepts/coordinate-system' }
        ]
      },
      // {
      //   text: 'Tools and Libraries for SVG Animations',
      //   items: [
      //     { text: 'Inkscape', link: '/tools-libraries/inkscape' },
      //     { text: 'Adobe Illustrator', link: '/tools-libraries/adobe-illustrator' },
      //     { text: 'SVGOMG (SVGO)', link: '/tools-libraries/svgomg' },
      //     { text: 'Libraries: Snap.svg, GSAP, Anime.js', link: '/tools-libraries/libraries' }
      //   ]
      // },
      {
        text: 'Creating Basic SVG Animations',
        items: [
          { text: 'Animating with CSS', link: '/basic-animations/css' },
          { text: 'Animating with SMIL', link: '/basic-animations/smil' }
        ]
      },
      {
        text: 'Advanced SVG Animations with JavaScript',
        items: [
          { text: 'Introduction to JavaScript Animations', link: '/advanced-animations-js/introduction' },
          { text: 'Using the Web Animations API', link: '/advanced-animations-js/web-animations-api' },
          { text: 'Integrating GreenSock (GSAP)', link: '/advanced-animations-js/gsap' },
          { text: 'Using Anime.js', link: '/advanced-animations-js/anime-js' }
        ]
      },
      {
        text: 'Interactive SVG Animations',
        items: [
          { text: 'Responding to User Events', link: '/interactive-animations/user-events' },
          { text: 'Creating Interactive Maps and Diagrams', link: '/interactive-animations/maps-diagrams' },
          { text: 'Animating Data Visualizations', link: '/interactive-animations/data-visualizations' }
        ]
      },
      {
        text: 'Optimizing SVG Animations',
        items: [
          { text: 'Performance Best Practices', link: '/optimizing-animations/performance' },
          { text: 'Minimizing SVG File Size', link: '/optimizing-animations/minimizing-file-size' },
          { text: 'Reducing Animation Jank', link: '/optimizing-animations/reducing-jank' }
        ]
      },
      {
        text: 'SVG Animation Techniques and Examples',
        items: [
          { text: 'Morphing', link: '/techniques-examples/morphing' },
          { text: 'Path Animations', link: '/techniques-examples/path-animations' },
          { text: 'Drawing Animations', link: '/techniques-examples/drawing-animations' },
          { text: 'Complex Animations with Masks and Clipping Paths', link: '/techniques-examples/masks-clipping-paths' }
        ]
      },
      // {
      //   text: 'SVG Animation Workflows',
      //   items: [
      //     { text: 'Integrating SVG Animations into Modern Web Projects', link: '/workflows/integration' },
      //     { text: 'Coordinating with Designers and Developers', link: '/workflows/coordination' },
      //     { text: 'Testing and Debugging SVG Animations', link: '/workflows/testing-debugging' }
      //   ]
      // },
      // {
      //   text: 'Case Studies and Real-World Applications',
      //   items: [
      //     { text: 'Success Stories', link: '/case-studies/success-stories' },
      //     { text: 'Common Pitfalls and Solutions', link: '/case-studies/pitfalls-solutions' },
      //     { text: 'Industry Examples', link: '/case-studies/industry-examples' }
      //   ]
      // },
      // {
      //   text: 'Resources and Further Learning',
      //   items: [
      //     { text: 'Recommended Reading', link: '/resources/recommended-reading' },
      //     { text: 'Online Tutorials and Courses', link: '/resources/online-tutorials' },
      //     { text: 'Communities and Forums', link: '/resources/communities-forums' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/amir78729' },
      { icon: 'npm', link: 'https://www.npmjs.com/~amir78729' },
      { icon: 'x', link: 'https://x.com/thealibakhshi' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/amirhosseinalibakhshi/' },
    ]
  }
})
