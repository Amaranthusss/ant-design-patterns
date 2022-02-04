# Ant Design Pattern

AntPattern - v1.0.2\
\
Extended Ant Design components by controllers returned from callbacks.

## When do you should use this solution?

If you want to control [Ant Design](https://ant.design/) React components you can save your time by use prepared patterns. You do not more need focus at React states and rerendering problems. You can just use prepared universal React component to call Ant Design components and next change their props and render them again with new ones features.

## What mean hooks in React?

You can read more about hooks in React at [official documentation](https://reactjs.org/docs/hooks-intro.html).

## What AntPattern requires?

- [Ant Design](https://ant.design/)
- [React v16.8+](https://reactjs.org/docs/hooks-intro.html)
- [Lodash](https://lodash.com/)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/react.html)

## How to use AntPattern?

### Usage Example:

Step 0. Optional: Prepare controller component object:
```typescript
const buttonCtrl = useRef<IAntPatternComponent<ButtonProps>>()
```

Step 1. Prepare component options object:
```typescript
const buttonOptions = useRef<IAntPatternOptions<ButtonProps>>({
  element: Button,
  default: {
    type: 'primary',
    children: `It's text inside button 😊`,
    onClick: onClickHandler,
  },
  controllerCallback: (controller: IAntPatternComponent<ButtonProps>) => {
    buttonCtrl.current = controller
  },
})
```

Step 2. Call component in JSX:
```jsx
<AntPattern options={buttonOptions.current}/>
```

### Extensions:

- Each Ant Design Pattern component at `default` settings has additional parameter named `children` type of `string | any`. That parameter means JSX code inside rendered component. For example for button or checkbox it means displayed text.
- When do you need change value of components based on `form`, `input`, `textareas`, you can use controller method `setValue`. That requirement exists for reason described at [React documentation](https://reactjs.org/docs/forms.html). This method is connected to `onChange` event. For this moment `onValuesChange` is not supported.
- Rest of params is the same as at Ant Design documentation of selected component.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode for examples preview.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learn More About React

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## License

MIT License
Copyright (c) 2022 Amaranthusss - Oskar Szkurłat
