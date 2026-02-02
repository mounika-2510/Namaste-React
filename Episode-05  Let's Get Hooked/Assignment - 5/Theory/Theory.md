# _Episode 05 – Let’s Get Hooked_

---

## 1. What is the difference between `Named export`, `Default export`, and `* as export`?

**Ans:**
In JavaScript (ES6), export and import are used to share code between different files. There are mainly three ways to export and import in React.

### Named Export

- We can have **multiple named exports** in a single file.
- While importing, we must use **the same name** as exported.
- Curly braces `{}` are required while importing.

**Example:**

```js
// MyComponent.js
export const MyComponent = () => {};
export const MyComponent2 = () => {};
```

**Importing:**

```js
// importing single named export
import { MyComponent } from "./MyComponent";

// importing multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";

// renaming during import
import { MyComponent2 as MyNewComponent } from "./MyComponent";
```

---

### Default Export

- A file can have **only one default export**.
- While importing, we can **use any name**.
- Curly braces `{}` are **not used**.

**Example:**

```js
// MyComponent.js
const MyComponent = () => {};
export default MyComponent;
```

**Importing:**

```js
import MyComponent from "./MyComponent";
```

---

### `* as` Export

- Used when we want to import **all exports together**.
- All exported items are accessed using a **single object**.

**Example:**

```js
// MyComponent.js
export const MyComponent = () => {};
export const MyComponent2 = () => {};
export const MyComponent3 = () => {};
```

**Importing:**

```js
import * as MainComponents from "./MyComponent";
```

**Usage:**

```js
<MainComponents.MyComponent />
<MainComponents.MyComponent2 />
<MainComponents.MyComponent3 />
```

---

### Using Named and Default Export Together

We can use both named and default export in the same file.

```js
export const MyComponent2 = () => {};
const MyComponent = () => {};
export default MyComponent;
```

```js
import MyComponent, { MyComponent2 } from "./MyComponent";
```

---

## 2. What is the importance of `config.js` file?

**Ans:**
A `config.js` file is used to store **configuration and constant values** used in the application.

- Helps in keeping components **clean and readable**
- Avoids hard-coding values inside components
- Easy to update values from **one place**
- Follows industry best practices

Examples of data stored in config files:

- API URLs
- Image URLs
- Constants
- Mock data

**Simple Example:**

```js
export const NAME = "Bharat";
export const SURNAME = "Kumar";
```

Using a config file makes the application **easy to maintain and scalable**.

---

## 3. What are `React Hooks`?

**Ans:**
React Hooks were introduced in **React 16.8**.
Hooks are **special JavaScript functions provided by React** that allow us to use React features in functional components.

- Hooks help in using **state and lifecycle features**
- They make code **reusable and cleaner**
- Hooks can manage state and side-effects

### Commonly Used React Hooks:

- `useState` – used to manage state
- `useEffect` – used for side effects like API calls
- `useContext` – used to access context values
- `useReducer` – used for complex state logic
- `useRef` – used to access DOM elements
- `useMemo` – used for performance optimization
- `useCallback` – used to prevent unnecessary re-renders

Hooks can be used **only inside functional components**.

---

## 4. Why do we need `useState` Hook?

**Ans:**
The `useState` hook is used to **manage state in functional components**.

- Normal variables do not update the UI
- `useState` creates a **state variable**
- When state changes, React **re-renders the component**

`useState` takes an **initial value** and returns:

1. Current state value
2. Function to update the state

### Syntax:

```js
const [state, setState] = useState(initialState);
```

### Importing useState:

```js
import { useState } from "react";
```

### Example:

```js
const Example = () => {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
};
```

- Each `useState` manages **one value**
- For multiple states, we use **multiple useState hooks**
