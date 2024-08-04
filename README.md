# typescript-script-esm
Script tag support for TypeScript es modules with react support.

[Live demo](https://rikhoffbauer.github.io/typescript-script-esm/example.html)

## Usage

```html
<!DOCTYPE html>
<html>
  <body>
    <main id="app"></main>
    <script type="text/typescript">
      import React from "https:/esm.sh/react";
      import React, { createRoot } from "https:/esm.sh/react-dom/client";

       function App() {
         return <div>Hello, World!</div>;
       }

       const root = createRoot(document.getElementById("app"));
       root.render(<App />)
    </script>
    <script src="https://unpkg.com/typescript@5.5.4/lib/typescript.js"></script>
    <script src="https://github.com/rikhoffbauer/typescript-script-esm/raw/master/transpiler.js"></script>
  </body>
</html>
```

