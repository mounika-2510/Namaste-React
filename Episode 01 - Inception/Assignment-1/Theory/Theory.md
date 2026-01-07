# Episode 01 – Inception (Theory Assignment)

## 1. What is Emmet?

When we write HTML normally, we have to type a lot of repetitive code.  
Emmet is a tool that helps us write HTML and CSS faster by using short abbreviations.  
For example, if we type `!` and press tab, Emmet automatically creates the full HTML boilerplate.  
This saves time and increases productivity.

---

## 2. Difference between a Library and a Framework

A library is a collection of functions that we can use when we want.  
We are in control of the flow of the program and we decide when to call the library.

A framework is a complete structure that controls the flow of the application.  
In a framework, we follow its rules and it calls our code when needed.

In short:

- **Library**: We control the code
- **Framework**: The framework controls the code

React is a **library**, not a framework.

---

## 3. What is CDN? Why do we use it?

CDN stands for **Content Delivery Network**.  
It is a network of servers distributed across different locations that deliver files like JavaScript, CSS, and images faster.

We use CDN because:

- It loads files faster
- It reduces load on our server
- It improves website performance

In React, we use CDN links to load React and ReactDOM directly in the browser.

---

## 4. Why is React known as React?

React is called React because it **reacts to changes in data**.  
When the state or data changes, React automatically updates the UI.  
We don’t have to manually manipulate the DOM again and again.

---

## 5. What is `crossorigin` in the script tag?

The `crossorigin` attribute is used when loading resources from another domain.  
It allows the browser to handle cross-origin requests properly and improves security.  
It is commonly used with CDN links to avoid CORS issues.

---

## 6. Difference between React and ReactDOM

React is responsible for creating React elements.  
ReactDOM is responsible for rendering those elements into the browser DOM.

In simple words:

- **React** → creates elements
- **ReactDOM** → puts elements into the DOM

---

## 7. Difference between react.development.js and react.production.js

`react.development.js` is used during development.  
It is larger in size and shows detailed error messages and warnings, which helps developers debug.

`react.production.js` is used in production.  
It is smaller, faster, and does not show detailed error messages.

---

## 8. What is async and defer?

Both `async` and `defer` are used to load JavaScript files without blocking HTML parsing.

- **async**: Script is downloaded and executed immediately when ready. It does not wait for HTML parsing.
- **defer**: Script is downloaded in the background but executed only after HTML parsing is complete.

`defer` is generally safer to use for most scripts.

---
