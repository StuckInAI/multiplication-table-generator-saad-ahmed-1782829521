---
status: pending
title: Multiplication Table of 22
---

1. In `/app/src/main.tsx`, ensure the app's single stylesheet (`/app/src/styles/global.css`) is imported and the root page is rendered. Expected outcome: the app boots with global styling applied.

2. Confirm `/app/src/styles/global.css` begins with the Tailwind import line. Expected outcome: Tailwind utility classes work throughout the app.

3. Create a reusable display component at `/app/src/components/MultiplicationTable.tsx` that accepts a number and how many rows to show. It should produce rows reading like "22 × 1 = 22", "22 × 2 = 44", and so on. Expected outcome: a clean, self-contained block that lists each line of the table.

4. Style the component with Tailwind utility classes using a yellow theme: a centered card with a soft yellow background and amber border, a clear heading ("Table of 22") in a deep amber tone, comfortable spacing between rows, alternating light-yellow row shading for readability, and a bold amber result number. Expected outcome: the table looks tidy, warm, and easy to read on screen.

5. Create a page at `/app/src/pages/TablePage.tsx` that places the table component in the center of the screen with a warm yellow background and page title. Use the table component to render the table of 22 from 1 through 10. Expected outcome: opening the app shows the multiplication table of 22 nicely centered on a yellow theme.

6. Wire `/app/src/pages/TablePage.tsx` as the page rendered by `/app/src/main.tsx`. Expected outcome: the table page is what appears when the app loads.

7. (Optional polish) Add a small control styled in the yellow theme (amber buttons) to switch the range between "up to 10" and "up to 20". Expected outcome: the visitor can choose how many rows of the table to view.
