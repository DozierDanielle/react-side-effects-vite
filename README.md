# React Side Effects Lab (Completed)

## What this project does
- Fetches and displays a random programming joke from `https://v2.jokeapi.dev/joke/Programming?type=single` on initial load using `useEffect`.
- Allows fetching a new joke with a single button.
- Shows a loading message while waiting for responses.
- Handles API errors gracefully.
- Contains only one `<button>` and one `<p>` element that contains the joke text, per the lab requirements.

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

3. Run the test helper (this repo includes a simple test harness script):
   ```bash
   npm run test
   ```

## Git workflow (local -> GitHub)
```bash
git init
git add .
git commit -m "feat: implement side effects lab - fetch programming jokes with useEffect"
# add your remote (example):
git remote add origin https://github.com/DozierDanielle/react-side-effects-lab.git
git branch -M main
git push -u origin main
```

## Notes
- The app file of interest is `src/App.jsx`.
- The joke text is rendered inside a single `<p>` element. There is exactly one `<button>` to fetch a new joke.
