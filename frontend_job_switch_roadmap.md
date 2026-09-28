# Frontend Job Switch Roadmap — 3.2+ Years Professional Experience

**Target:** Frontend Engineer / React + TypeScript  
**Level:** Mid-level / SDE-2 equivalent  
**Primary goal:** Prepare for a job switch targeting ₹8–9+ LPA

---

## How to Use This Roadmap

Do **not** try to finish everything at once.

Daily routine:

- [ ] 60–90 min learning
- [ ] 45–60 min coding/DSA
- [ ] 20–30 min interview questions
- [ ] Write down anything you could not explain clearly
- [ ] Every weekend: revise instead of starting lots of new topics

### Rules

1. Prefer **JavaScript** for DSA.
2. Learn concepts by solving small problems, not by watching long tutorials.
3. For every frontend concept, ask: **Why does this happen?**
4. Be able to explain concepts without looking at notes.
5. Use your real editor project as a source of interview examples.
6. Start applying before you feel 100% ready.

---

# Phase 0 — Baseline

Before studying, rate yourself from 0–5:

| Area | Score |
|---|---:|
| JavaScript | /5 |
| TypeScript | /5 |
| React | /5 |
| HTML/CSS | /5 |
| Angular | /5 |
| APIs | /5 |
| Git | /5 |
| DSA | /5 |
| Frontend architecture | /5 |
| Testing | /5 |
| UI/UX | /5 |

Do not worry about the scores. They are only a starting point.

---

# Phase 1 — JavaScript Fundamentals

**Goal:** Become strong enough to explain JavaScript behavior in an interview.

## 1. Execution and Scope

Learn:

- [ ] Execution context
- [ ] Global scope
- [ ] Function scope
- [ ] Block scope
- [ ] `var`, `let`, `const`
- [ ] Hoisting
- [ ] Temporal Dead Zone
- [ ] Lexical scope

### Practice

```js
console.log(a);
var a = 10;
```

```js
console.log(a);
let a = 10;
```

Explain why the two examples behave differently.

---

## 2. Closures

Learn:

- [ ] What a closure is
- [ ] Lexical environment
- [ ] Function retaining access to outer variables
- [ ] Practical uses

Practice:

- [ ] Counter
- [ ] Private state
- [ ] Function factory
- [ ] Memoization

Interview question:

> What is a closure and where would you use one in a real application?

---

## 3. `this`

Learn:

- [ ] Global `this`
- [ ] Object method
- [ ] Regular function
- [ ] Arrow function
- [ ] `call`
- [ ] `apply`
- [ ] `bind`

Practice at least 10 small `this` questions.

---

## 4. Objects and Prototypes

Learn:

- [ ] Object creation
- [ ] Property lookup
- [ ] Prototype chain
- [ ] `prototype`
- [ ] `__proto__`
- [ ] Classes
- [ ] Inheritance

Interview question:

> How does JavaScript inheritance actually work?

---

# Phase 2 — Async JavaScript

## 5. Event Loop

Learn:

- [ ] Call stack
- [ ] Web APIs
- [ ] Task/macrotask queue
- [ ] Microtask queue
- [ ] Event loop
- [ ] `setTimeout`
- [ ] Promise callbacks

Practice predicting output:

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

You should be able to explain the output without guessing.

---

## 6. Promises

Learn:

- [ ] Promise states
- [ ] `.then`
- [ ] `.catch`
- [ ] `.finally`
- [ ] Promise chaining
- [ ] Error propagation
- [ ] `Promise.all`
- [ ] `Promise.allSettled`
- [ ] `Promise.race`
- [ ] `Promise.any`

Practice:

- [ ] Implement a simplified `Promise.all`
- [ ] Retry a failed request
- [ ] Run requests sequentially
- [ ] Run independent requests concurrently

---

## 7. Async/Await

Learn:

- [ ] `async`
- [ ] `await`
- [ ] Error handling
- [ ] Sequential vs parallel requests
- [ ] Avoiding unnecessary API calls

Important interview question:

> What is the difference between these two?

```js
await fetchA();
await fetchB();
```

and

```js
const a = fetchA();
const b = fetchB();

await Promise.all([a, b]);
```

---

# Phase 3 — JavaScript Practical Coding

Solve these without tutorials.

## Easy

- [ ] Reverse a string
- [ ] Check palindrome
- [ ] Find maximum number
- [ ] Remove duplicates
- [ ] Count character frequency
- [ ] Count word frequency
- [ ] Find first non-repeating character
- [ ] Flatten an array
- [ ] Group objects by property
- [ ] Sort objects by property

## Frontend-focused

- [ ] Implement debounce
- [ ] Implement throttle
- [ ] Implement memoization
- [ ] Deep clone an object
- [ ] Deep compare two objects
- [ ] Convert nested object to flat object
- [ ] Implement simple event emitter
- [ ] Implement simple cache
- [ ] Implement retry logic
- [ ] Implement concurrency limit

---

# Phase 4 — TypeScript

## Fundamentals

- [ ] Primitive types
- [ ] Arrays
- [ ] Objects
- [ ] Functions
- [ ] Interfaces
- [ ] Type aliases
- [ ] Union types
- [ ] Intersection types
- [ ] Literal types
- [ ] Optional properties
- [ ] `unknown`
- [ ] `any`
- [ ] `never`

## Advanced

- [ ] Generics
- [ ] Generic constraints
- [ ] `keyof`
- [ ] `typeof`
- [ ] Indexed access types
- [ ] Conditional types
- [ ] Mapped types
- [ ] Utility types
- [ ] Discriminated unions
- [ ] Type narrowing

Practice designing types for:

```text
API response
↓
Loading / success / error state
↓
React component props
↓
Editor node types
```

---

# Phase 5 — React

## 1. React Mental Model

Understand:

- [ ] Components
- [ ] Props
- [ ] State
- [ ] Rendering
- [ ] Re-rendering
- [ ] Reconciliation
- [ ] Keys
- [ ] Component lifecycle

### Critical question

> What causes a React component to re-render?

You should be able to answer this confidently.

---

## 2. Hooks

Master:

- [ ] `useState`
- [ ] `useEffect`
- [ ] `useRef`
- [ ] `useMemo`
- [ ] `useCallback`
- [ ] `useContext`
- [ ] Custom hooks

For each hook, know:

1. Why it exists
2. When to use it
3. When NOT to use it
4. Common mistakes

---

## 3. `useEffect`

This deserves special attention.

Learn:

- [ ] Dependency array
- [ ] Cleanup
- [ ] Stale closures
- [ ] Race conditions
- [ ] Fetching data
- [ ] Effect vs event handler
- [ ] Avoiding unnecessary effects

Interview question:

> Why can an API call happen multiple times after a component re-renders?

---

# Phase 6 — React Performance

Learn:

- [ ] Why components re-render
- [ ] Parent → child rendering
- [ ] Referential equality
- [ ] `React.memo`
- [ ] `useMemo`
- [ ] `useCallback`
- [ ] Context performance
- [ ] Large lists
- [ ] Virtualization
- [ ] Code splitting
- [ ] Lazy loading
- [ ] Profiling

Practice diagnosing:

```text
Component renders
    ↓
API call
    ↓
setState
    ↓
render
    ↓
API call again
    ↓
...
```

Be able to identify exactly why the loop happens.

---

# Phase 7 — React Architecture

Learn how to structure:

```text
Application
├── Pages
├── Features
├── Components
├── Hooks
├── Services
├── API
├── State
├── Types
└── Utils
```

Understand:

- [ ] Component composition
- [ ] Container/presentational thinking
- [ ] Feature-based structure
- [ ] State ownership
- [ ] Global vs local state
- [ ] Server state vs UI state
- [ ] API abstraction
- [ ] Error boundaries
- [ ] Form architecture

---

# Phase 8 — Frontend Data & APIs

Learn:

- [ ] REST
- [ ] HTTP methods
- [ ] Status codes
- [ ] Request lifecycle
- [ ] Authentication
- [ ] Authorization
- [ ] Tokens
- [ ] Refresh tokens
- [ ] Pagination
- [ ] Filtering
- [ ] Sorting
- [ ] Search
- [ ] Caching
- [ ] Optimistic updates
- [ ] Error handling

Practice designing:

> A reusable API/data-fetching layer for a React application.

---

# Phase 9 — HTML/CSS/UI

You don't need to become a CSS specialist, but you should be strong.

Learn:

- [ ] Semantic HTML
- [ ] Accessibility
- [ ] Flexbox
- [ ] Grid
- [ ] Positioning
- [ ] Stacking contexts
- [ ] `z-index`
- [ ] Responsive design
- [ ] CSS specificity
- [ ] Overflow
- [ ] Container queries
- [ ] Animations
- [ ] Design tokens

Important:

> Be able to debug a layout instead of randomly changing CSS values.

---

# Phase 10 — DSA

Use JavaScript.

## Pattern 1 — Arrays

- [ ] Two Sum
- [ ] Best Time to Buy and Sell Stock
- [ ] Contains Duplicate
- [ ] Maximum Subarray

## Pattern 2 — Hash Maps

- [ ] Two Sum
- [ ] Valid Anagram
- [ ] Group Anagrams
- [ ] First Unique Character

## Pattern 3 — Two Pointers

- [ ] Valid Palindrome
- [ ] Two Sum II
- [ ] Remove Duplicates
- [ ] Container With Most Water

## Pattern 4 — Sliding Window

- [ ] Maximum Average Subarray
- [ ] Longest Substring Without Repeating Characters
- [ ] Minimum Size Subarray Sum

## Pattern 5 — Stack

- [ ] Valid Parentheses
- [ ] Min Stack
- [ ] Daily Temperatures

## Pattern 6 — Binary Search

- [ ] Binary Search
- [ ] Search Insert Position
- [ ] Search in Rotated Sorted Array

## Pattern 7 — Linked Lists

- [ ] Reverse Linked List
- [ ] Middle of Linked List
- [ ] Linked List Cycle
- [ ] Merge Two Sorted Lists

## Pattern 8 — Trees

- [ ] Maximum Depth
- [ ] Invert Binary Tree
- [ ] Binary Tree Level Order Traversal
- [ ] Validate Binary Search Tree

## Pattern 9 — Basic Graphs

- [ ] Number of Islands
- [ ] Flood Fill
- [ ] Clone Graph

---

# Phase 11 — Frontend System Design

This is where your existing experience becomes valuable.

## Design these

- [ ] Canva-like editor
- [ ] Rich-text editor
- [ ] File upload system
- [ ] Notification system
- [ ] Infinite scrolling feed
- [ ] Search/autocomplete
- [ ] Dashboard with multiple APIs
- [ ] Data table with server-side pagination
- [ ] Design system
- [ ] Undo/redo system

For every design, discuss:

```text
Requirements
↓
UI architecture
↓
Component architecture
↓
State
↓
API
↓
Data model
↓
Performance
↓
Error handling
↓
Accessibility
↓
Testing
```

---

# Phase 12 — Your Real Project Deep Dive

Prepare these stories from your current editor project.

## Story 1 — Complex editor architecture

Explain:

- [ ] Document model
- [ ] Blocks/nodes
- [ ] Rendering
- [ ] Property panels
- [ ] Drag/drop
- [ ] Preview/client view

## Story 2 — Performance

Prepare a real example involving:

- [ ] Excessive renders
- [ ] API calls
- [ ] Large documents
- [ ] Tiptap
- [ ] DOM operations
- [ ] Component trees

Use:

**Problem → Investigation → Root cause → Solution → Result**

## Story 3 — Difficult bug

Prepare one real production/debugging story.

## Story 4 — Architecture decision

Prepare one example where you had multiple possible approaches and explain why you chose one.

## Story 5 — UI/UX improvement

Explain a meaningful UX problem you solved.

---

# Phase 13 — Interview Questions

## JavaScript

- [ ] Explain closure.
- [ ] Explain event loop.
- [ ] Explain promises.
- [ ] `var` vs `let` vs `const`.
- [ ] Explain `this`.
- [ ] Arrow function vs regular function.
- [ ] Shallow vs deep copy.
- [ ] Debounce vs throttle.
- [ ] What is prototypal inheritance?
- [ ] How does garbage collection work?

## React

- [ ] What causes a re-render?
- [ ] What is reconciliation?
- [ ] Why are keys important?
- [ ] Why does `useEffect` run more than expected?
- [ ] When should you use `useMemo`?
- [ ] When should you use `useCallback`?
- [ ] How do you optimize a large React application?
- [ ] How do you prevent duplicate API calls?
- [ ] How do you structure a large React application?
- [ ] How would you debug a slow component?

## Architecture

- [ ] Design a dashboard.
- [ ] Design a data table.
- [ ] Design a file upload system.
- [ ] Design a rich-text editor.
- [ ] Design a Canva-like editor.
- [ ] Design an autocomplete search.
- [ ] Design notifications.

---

# Phase 14 — Behavioral Interview

Prepare answers for:

- [ ] Tell me about yourself.
- [ ] Explain your current project.
- [ ] What was your hardest technical problem?
- [ ] Tell me about a production bug.
- [ ] Tell me about a disagreement with a teammate.
- [ ] Tell me about a mistake you made.
- [ ] Tell me about something you learned recently.
- [ ] Why are you changing jobs?
- [ ] Why should we hire you?
- [ ] Why React?
- [ ] What are your strengths?
- [ ] What are your weaknesses?

Use the **STAR** structure where appropriate:

```text
Situation
Task
Action
Result
```

---

# Phase 15 — Resume

Your positioning:

> Frontend Engineer with 3+ years of professional experience building complex, interactive web applications using TypeScript, Angular, React, and modern frontend technologies.

Emphasize:

- Complex UI
- Editor architecture
- Performance
- Component architecture
- API integration
- Rich text
- Drag/drop
- UI/UX
- TypeScript
- React

Avoid making the resume a giant list of technologies.

Focus on:

**What you built + how difficult it was + what improved.**

---

# Phase 16 — Job Application Strategy

Don't wait until preparation is complete.

Start applying once you have:

- [ ] Resume ready
- [ ] LinkedIn updated
- [ ] 20–30 JavaScript questions practiced
- [ ] Basic React interview preparation
- [ ] 20 DSA problems completed
- [ ] Project explanation ready

Then apply continuously.

Track:

| Company | Role | Date | Stage | Result | Weak Area |
|---|---|---|---|---|---|
| | | | | | |

Use interview failures as feedback.

---

# First 14 Days — Exact Schedule

## Day 1

- [ ] JavaScript scope
- [ ] `var`, `let`, `const`
- [ ] Hoisting
- [ ] 5 coding problems

## Day 2

- [ ] Closures
- [ ] Lexical scope
- [ ] Counter implementation
- [ ] 5 problems

## Day 3

- [ ] `this`
- [ ] Arrow functions
- [ ] `call/apply/bind`
- [ ] 5 problems

## Day 4

- [ ] Objects
- [ ] Prototypes
- [ ] Classes
- [ ] 5 problems

## Day 5

- [ ] Event loop
- [ ] Call stack
- [ ] Microtasks
- [ ] Macrotasks
- [ ] Output prediction questions

## Day 6

- [ ] Promises
- [ ] Promise chaining
- [ ] Promise utilities
- [ ] 5 problems

## Day 7

**Revision day**

- [ ] No new topics
- [ ] Re-answer interview questions
- [ ] Solve 5 mixed problems
- [ ] Write down weak areas

## Day 8

- [ ] Async/await
- [ ] API requests
- [ ] Sequential vs parallel requests
- [ ] Retry logic

## Day 9

- [ ] Arrays
- [ ] Hash maps
- [ ] Two Sum
- [ ] Contains Duplicate
- [ ] Valid Anagram

## Day 10

- [ ] Two pointers
- [ ] Sliding window
- [ ] 4 problems

## Day 11

- [ ] Stack
- [ ] Queue
- [ ] 4 problems

## Day 12

- [ ] Binary search
- [ ] 3 problems

## Day 13

- [ ] React rendering
- [ ] Re-rendering
- [ ] Props/state
- [ ] Keys

## Day 14

- [ ] `useEffect`
- [ ] Dependency arrays
- [ ] API calls
- [ ] Duplicate API calls
- [ ] Mock interview

---

# Your First Task

Do **not** start with React.

Start here:

### JavaScript — Day 1

Answer these without looking anything up:

1. What is scope?
2. Difference between `var`, `let`, and `const`.
3. What is hoisting?
4. What is the Temporal Dead Zone?
5. What will this output?

```js
console.log(a);

var a = 10;

console.log(b);

let b = 20;
```

Then solve:

```text
1. Reverse a string
2. Find the largest number in an array
3. Remove duplicates from an array
4. Count character frequency
5. Find the first non-repeating character
```

**Don't worry if you can't solve everything.** The purpose of Day 1 is to discover what you actually know.

---

# Progress Tracker

## JavaScript

- [ ] Fundamentals
- [ ] Closures
- [ ] `this`
- [ ] Prototypes
- [ ] Event loop
- [ ] Promises
- [ ] Async/await
- [ ] Practical JS

## TypeScript

- [ ] Fundamentals
- [ ] Generics
- [ ] Utility types
- [ ] Advanced types

## React

- [ ] Rendering
- [ ] Hooks
- [ ] Effects
- [ ] State
- [ ] Performance
- [ ] Architecture
- [ ] Data fetching
- [ ] Testing

## DSA

- [ ] Arrays
- [ ] Hash maps
- [ ] Two pointers
- [ ] Sliding window
- [ ] Stack
- [ ] Binary search
- [ ] Linked lists
- [ ] Trees
- [ ] Graphs

## Interview

- [ ] Resume
- [ ] Project explanation
- [ ] JavaScript interview
- [ ] React interview
- [ ] DSA interview
- [ ] System design
- [ ] Behavioral interview
- [ ] Mock interviews
- [ ] Applications

---

# Final Goal

By the end of this preparation, you should be able to confidently say:

> "I'm a frontend engineer with 3+ years of experience building complex web applications. My strongest areas are JavaScript, TypeScript, React, frontend architecture, and complex interactive UI. I've worked on real problems involving editors, rich text, drag-and-drop, API integration, rendering, and performance."

That is the profile we are going to build toward.
