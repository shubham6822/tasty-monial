# Testimonial Component Library

A simple and customizable React component for displaying testimonials in your application.

## Features

- Responsive and mobile-friendly
- Customizable styles using props
- Supports multiple testimonials with carousel/slider functionality
- Lightweight and easy to integrate

## Installation

You can install the library using npm or yarn:

```sh
npm install tasty-monial
```

or

```sh
yarn add tasty-monial
```

## Usage

Import the `Testimonial` component and use it in your React project:

```jsx
import React from 'react';
import Testimonial from 'tasty-monial';

const App = () => {
  return (
    <div>
      <h1>User Testimonials</h1>
      <Testimonial />
    </div>
  );
};

export default App;
```

## Props

| Prop        | Type      | Description                                  | Default |
|------------|----------|----------------------------------------------|---------|
| testimonials | Array    | List of testimonial objects (name, feedback, designation, image) | [] |
| autoPlay   | Boolean  | Enable automatic sliding of testimonials | false |
| interval   | Number   | Time interval for auto-slide (in ms) | 5000 |
| showArrows | Boolean  | Show navigation arrows | true |
| showDots   | Boolean  | Show indicator dots | true |

## Customization

You can customize the component's styles using CSS or styled-components. Additionally, pass a `className` prop for further styling.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any queries, reach out via [GitHub Issues](https://github.com/your-repo/testimonial-component-library/issues).

