# Testing Documentation — Quick-Calc

---

## Testing Strategy

The testing strategy for Quick-Calc follows a structured, layered approach to ensure both correctness of the core logic and reliability of the user-facing interface. Tests are divided into two layers:

- **Unit tests** validate each pure arithmetic function in isolation, covering expected inputs, edge cases (division by zero, negative numbers, decimals), and large values.
- **Integration tests** simulate real user interactions through the React UI, verifying that the component renders correctly, responds to input, calls the right functions, and displays the correct result.

This separation makes failures easier to diagnose: if a unit test fails, the issue is in the logic layer; if an integration test fails while unit tests pass, the issue is in how the component wires up the logic.

---

## Testing Pyramid

The Testing Pyramid is a framework for balancing different types of tests in a software project:

```
        /\
       /  \
      / E2E \          ← Few, slow, expensive (e.g. Cypress)
     /--------\
    /Integration\      ← Some (test component + logic together)
   /--------------\
  /   Unit Tests   \   ← Many, fast, isolated (test functions alone)
 /------------------\
```

- **Unit tests** form the base — they are fast, cheap, and numerous. They test individual functions with no dependencies.
- **Integration tests** sit in the middle — they test how multiple parts (UI + logic) work together.
- **End-to-end (E2E) tests** sit at the top — they simulate a full browser session. Not included in this project but would use tools like Cypress or Playwright.

Quick-Calc follows this pyramid with 8 unit tests and 2 integration tests.

---

## Black-box vs White-box Testing

**Black-box testing** treats the system as an opaque box — the tester knows only the inputs and expected outputs, not the internal implementation. Tests are written purely from the perspective of the user or API consumer.

**White-box testing** (also called glass-box or clear-box testing) has full knowledge of the internal implementation. Tests are written to cover specific code paths, branches, or conditions.

In Quick-Calc:
- The **integration tests** are black-box — they interact with the rendered UI exactly as a user would, without knowledge of how `Calculator.jsx` is implemented internally.
- The **unit tests** are white-box — they directly import and call internal functions (`add`, `divide`, etc.) and test specific branches such as the division-by-zero error path.

---

## Functional vs Non-functional Testing

**Functional testing** verifies that the software does what it is supposed to do — it checks specific behaviours, inputs, and outputs against requirements.

**Non-functional testing** verifies qualities of the system that are not about specific features: performance, security, accessibility, scalability, and reliability.

In Quick-Calc:
- All tests in this project are **functional** — they confirm that addition produces the correct sum, division by zero throws an error, and the Clear button resets the result.
- **Non-functional** concerns (e.g. rendering speed, accessibility compliance, memory usage) are out of scope for this assignment but could be addressed with tools like Lighthouse or axe-core.

---

## Regression Testing

Regression testing is the practice of re-running existing tests whenever new code is added or changed, to ensure that previously working functionality has not been broken.

In Quick-Calc, running `npm test` at any point acts as a regression check. If a developer modifies `calculator.js` or `Calculator.jsx`, the full suite of 10 tests will immediately flag any broken behaviour. This prevents regressions from going unnoticed and supports confident refactoring.

---

## Test Summary Table

| Test Name                        | Type        | Pass Status |
|----------------------------------|-------------|-------------|
| addition works                   | Unit        | ✅ Pass     |
| subtraction works                | Unit        | ✅ Pass     |
| multiplication works             | Unit        | ✅ Pass     |
| division works                   | Unit        | ✅ Pass     |
| division by zero throws error    | Unit        | ✅ Pass     |
| negative numbers                 | Unit        | ✅ Pass     |
| decimal numbers                  | Unit        | ✅ Pass     |
| large numbers                    | Unit        | ✅ Pass     |
| 5 + 3 = 8 (UI interaction)      | Integration | ✅ Pass     |
| clear resets result to 0 (UI)   | Integration | ✅ Pass     |


TESTING CHECKED