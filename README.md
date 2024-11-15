# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Results summary component solution](#frontend-mentor---results-summary-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
      - [Mobile view](#mobile-view)
      - [Desktop view](#desktop-view)
      - [Active state](#active-state)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

#### Mobile view

![](./sources/screenshots/Mobile%20view.png)

#### Desktop view

![](./sources/screenshots/Desktop%20view.png)

#### Active state

![](./sources/screenshots/Active%20state.png)

### Links

- Solution URL: [Result summary card using HTML and CSS (Sass)](https://www.frontendmentor.io/solutions/result-summary-card-using-html-and-css-sass-XfakBL63ME)
- Live Site URL: [Frontend Mentor | Results summary component](https://vangmanawkairung.github.io/Frontend-Mentor_result-summary-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Sass (Scss)
- Media Queries
- Typography
- Gradient Background
- Accessibility

### What I learned

During this "Results Summary Component" challenge, I learned how to combine Semantic HTML5, responsive design techniques, and Sass to create an accessible, visually appealing, and user-friendly component. One of my proudest achievements was utilizing CSS Grid to structure the layout and adapting it for mobile-first workflows with a smooth transition to desktop views using media queries. Additionally, I became more confident with using Sass mixins to simplify repetitive tasks, like setting element dimensions consistently across the layout:

```
@mixin set-size($w, $h) {
  width: $w;
  height: $h;
}
```

Another highlight was implementing gradient backgrounds to enhance visual appeal, such as the circular score box:

```
div.result-score-box {
  @include set-size(140px, 140px);
  background-image: linear-gradient(
    $violet-blue-circle -20%,
    $persian-blue-circle 110%
  );
  border-radius: 50%;
}
```

This challenge also strengthened my understanding of Flexbox and Grid working together to create adaptable layouts. It was rewarding to see how small details, like ARIA attributes for accessibility and hover effects for interactivity, came together to make the component functional and inclusive. Overall, I feel proud of the balance I achieved between design, responsiveness, and accessibility.

### Continued development

I plan to enhance the component by adding animations and transitions to improve user interactivity, such as smooth fades for the button hover states or subtle scaling for the score box. I also want to explore integrating JavaScript for dynamic functionality, like updating the scores based on user input or fetching data from an API. Additionally, I aim to further optimize accessibility by testing with screen readers and ensuring perfect compatibility across various browsers.

### Useful resources

- [JSON HTML](https://www.w3schools.com/js/js_json_html.asp) - This webpage shows how to use JSON file with HTML (via JavaScript).

## Author

- Frontend Mentor - [@VangmanawKairung](https://www.frontendmentor.io/profile/VangmanawKairung)
- GitHub - [VangmanawKairung](https://github.com/VangmanawKairung)

## Acknowledgments

I want to express my gratitude to Frontend Mentor for creating this engaging challenge, which helped me hone my skills in responsive design and accessibility. A big thanks to macOS for its clean interface that made previewing and adjusting element sizes easier, as well as VSCode and Chrome for providing an efficient development and debugging environment. I also appreciate the wealth of online resources and tools that supported me throughout this project, from Google Fonts for typography to Sass for streamlining my CSS workflow. These tools and platforms were instrumental in bringing this component to life.
