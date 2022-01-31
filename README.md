# Ant Design Patterns - `useAntPattern` Hook - v1.0.1

Extended Ant Design components by controllers.

## When do you should use this solution?

If you want to control [Ant Design](https://ant.design/) React components you can save your time by use prepared patterns. You do not more need focus at React states and rerendering problems. You can just use prepared hook to create Ant Design components and next change their props and render them again with new ones features.

## What mean hooks in React?

You can read more about hooks in React at [official documentation](https://reactjs.org/docs/hooks-intro.html).

## What `useAntPattern` hook requires?

- Item [Ant Design](https://ant.design/)
- Item [React v16.8v or newer](https://reactjs.org/docs/hooks-intro.html)
- Item [Lodash](https://lodash.com/)
- Item [TypeScript](https://www.typescriptlang.org/docs/handbook/react.html)

## How to use `useAntPattern` hook?

###Usage Example:
Options definiton:
`const buttonOptions = useRef<IPatternOptions<ButtonProps>>({ element: Button, //imported from 'antd' default: { type: 'primary', children: `I can change my icon 😊`, onClick: setIcon } })`

Hook call:
`const buttonPattern = useAntPattern(buttonOptions.current)`

JSX element:
`<>{buttonPattern.element}</>`

Controller call:
`const setIcon = (): void => {buttonToChangePattern.controller.update({ icon: <StepBackwardOutlined /> }) }`

### Extensions:

- Item Each Ant Design component returned from `useAntPattern` hook has additional parameter at `default` settings named `children` type of `string | any`. That parameter means JSX code inside rendered component. For example for button or checkbox it means displayed text.
- Item When do you need change value of components based on `form`, `input`, `textareas`, you can use controller method `setValue`. That requirement exists for reason described at [React documentation](https://reactjs.org/docs/forms.html). This method is connected to `onChange` event. For this moment `onValuesChange` is not supported.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode for examples preview.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learn More About React:

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# License

MIT License
Copyright (c) 2022 Amaranthusss - Oskar Szkurłat
