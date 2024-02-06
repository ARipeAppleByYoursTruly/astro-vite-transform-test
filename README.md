# astro-transform-vite-test

`testFolder` contains the Astro integration



## Expected behaviour

When running `npm run build`, the integration will `transform` the class name `testClassName` that is present in `src/pages/index.astro` and `src/styles/style.css` to the class name `asd`



## Where to check test result

In `dist/index.html`, if the class name used by `<div>` is `asd`, that means the test works

Otherwise, the test fails
