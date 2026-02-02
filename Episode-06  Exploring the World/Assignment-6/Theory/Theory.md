# _Episode 06 – Exploring the World_

---

## 1. What is a `Microservice`?

**Ans:**
Microservice architecture is a way of building applications where the application is divided into **small, independent services**.
Each service focuses on a single feature like authentication, database, payment, or UI, and they communicate with each other using APIs.

Each microservice:

- Has its own logic
- Can be developed and deployed independently
- Can be scaled separately

This architecture helps teams work independently and makes applications easier to maintain and scale.

**Benefits of Microservices:**

- Easy scaling
- Faster development
- Independent deployment
- Better fault isolation
- Reusable services

---

## 2. What is `Monolith Architecture`?

**Ans:**
Monolith architecture is a traditional way of building applications where **all components are part of a single codebase**.

In a monolithic application:

- UI, backend, and database logic are tightly coupled
- The entire application is deployed as one unit
- Any small change requires redeploying the whole application

As the application grows, it becomes difficult to maintain and scale.

---

## 3. What is the difference between `Monolith` and `Microservice`?

**Ans:**

**Monolith Architecture:**

- Single large codebase
- All features are tightly coupled
- Difficult to scale specific features
- A single failure can affect the entire application
- Slower development as application grows

**Microservice Architecture:**

- Application is divided into small services
- Each service is independent
- Easy to scale specific services
- Failure in one service does not crash the entire app
- Faster development and deployment

---

## 4. Why do we need a `useEffect` Hook?

**Ans:**
`useEffect` is a React Hook used to handle **side effects** in functional components.

Side effects include:

- Fetching data from an API
- Setting timers
- Subscribing to events
- Direct DOM operations

`useEffect` takes:

1. A callback function
2. A dependency array (optional)

```js
useEffect(() => {}, []);
```

- If dependency array is empty `[]`, useEffect runs **only once after initial render**
- If dependency array has values, it runs when those values change
- If dependency array is not provided, it runs **after every render**

```js
useEffect(() => {
  setState(true);
}, [state]);
```

---

## 5. What is `Optional Chaining`?

**Ans:**
Optional chaining (`?.`) is used to safely access object properties.

If a property does not exist, it returns `undefined` instead of throwing an error.

```js
user?.address?.city;
```

This helps prevent application crashes when data is missing or undefined, especially while working with API responses.

---

## 6. What is `Shimmer UI`?

**Ans:**
Shimmer UI is a **loading placeholder UI** shown while actual data is being fetched.

Instead of showing a loading spinner, shimmer UI:

- Looks similar to the final UI
- Improves user experience
- Gives feedback that data is loading

It is commonly used when API data takes time to load.

---

## 7. What is the difference between `JS Expression` and `JS Statement`?

**Ans:**

**JavaScript Expression:**

- Produces a value
- Can be used inside JSX

Examples:

```js
1 + 2;
name.toUpperCase();
isLoggedIn ? "Yes" : "No";
```

**JavaScript Statement:**

- Does not return a value
- Used for control flow

Examples:

```js
let x;
if (condition) {
}
for (let i = 0; i < 5; i++) {}
```

Only **expressions** are allowed directly inside JSX using `{}`.

---

## 8. What is `Conditional Rendering`? Explain with code example.

**Ans:**
Conditional rendering means rendering UI elements based on a condition.

React uses JavaScript conditions like `if`, ternary operator, and logical `&&`.

**Example using ternary operator:**

```js
{
  isLoggedIn ? <Logout /> : <Login />;
}
```

**Example using logical AND:**

```js
{
  isLoggedIn && <button>Logout</button>;
}
```

React updates the UI automatically when the condition changes.

---

## 9. What is `CORS`?

**Ans:**
CORS (Cross-Origin Resource Sharing) is a browser security mechanism.

It controls whether a web application can request resources from a **different origin (domain, port, or protocol)**.

If the server does not allow the request, the browser blocks it to protect users from security risks.

---

## 10. What is `async` and `await`?

**Ans:**
`async` and `await` are used to handle asynchronous operations in JavaScript.

- `async` makes a function return a promise
- `await` pauses execution until the promise is resolved

This makes asynchronous code easier to read and write.

**Example:**

```js
async function getRestaurants() {
  const data = await fetch("API_URL");
  const json = await data.json();
  console.log(json);
}
```

---

## 11. What is the use of `const json = await data.json()` in `getRestaurants()`?

**Ans:**
`fetch()` returns a response object, not actual data.

`data.json()`:

- Converts the response into JSON format
- Returns a promise

Using `await` resolves the promise and gives the actual JSON data.

```js
const json = await data.json();
```

This allows us to work with the API response data inside the application.
