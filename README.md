# Quick-Calc

A simple calculator web application built with React (Vite) for a software engineering testing assignment. It supports addition, subtraction, multiplication, and division, with a full test suite using Jest and React Testing Library.

---

## Project Structure

```
swe-testing-assignment/
├── src/
│   ├── calculator/
│   │   └── calculator.js          # Pure arithmetic functions
│   ├── components/
│   │   └── Calculator.jsx         # React UI component
│   ├── tests/
│   │   ├── calculator.unit.test.js        # Unit tests
│   │   └── calculator.integration.test.js # Integration tests
│   ├── App.jsx
│   └── main.jsx
├── babel.config.js
├── jest.config.js
├── package.json
├── README.md
└── TESTING.md
```

---

## Setup Instructions

**Prerequisites:** Node.js 18+ and npm installed.

```bash
# Clone the repository
git clone https://github.com/<your-username>/swe-testing-assignment.git
cd swe-testing-assignment

# Install dependencies
npm install
```

---

## How to Run the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The calculator will load with two input fields and operation buttons (+, -, *, /, C).

---

## How to Run Tests

```bash
npm test
```

This runs all unit and integration tests using Jest. You should see 10 tests pass (8 unit, 2 integration).

---

## Jest vs Mocha — Comparison and Choice

Jest and Mocha are both popular JavaScript testing frameworks, but they differ significantly in scope and design philosophy. Mocha is a minimal, flexible test runner that requires you to manually install and configure additional libraries for assertions (e.g., Chai), mocking (e.g., Sinon), and code coverage (e.g., Istanbul). This flexibility is powerful but adds setup overhead, especially for beginners or projects that need to move quickly. Jest, by contrast, is an all-in-one solution developed by Meta that ships with built-in assertions, mocking, spying, snapshot testing, and code coverage out of the box. This makes it significantly faster to get started and easier to maintain a consistent testing environment across a team.

Another key difference is React integration. Jest was designed with React in mind and pairs naturally with React Testing Library and jsdom (a simulated browser environment), making it the standard choice for React projects. Mocha can be used with React but requires more manual wiring. Jest also provides features like watch mode, parallel test execution, and rich CLI output that improve the developer experience during active development.

For this project, **Jest was chosen** because it integrates seamlessly with React and Vite (via Babel transforms), requires minimal configuration, and includes everything needed — assertions, jsdom, and mocking — without additional dependencies. Its zero-config philosophy and React-first ecosystem make it the most practical choice for a React-based assignment where the goal is to focus on writing meaningful tests rather than configuring tooling.
