# typescript-script-esm
Script tag support for TypeScript es modules with react support.

[Live demo](https://rikhoffbauer.github.io/typescript-script-esm/example.html)

## Usage

```html
<!DOCTYPE html>
<html>
  <body>
    <main id="app"></main>
    <script-ts>
      import React from "https:/esm.sh/react";
      import React, { createRoot } from "https:/esm.sh/react-dom/client";

       function App() {
         return <div>Hello, World!</div>;
       }

       const root = createRoot(document.getElementById("app"));
       root.render(<App />)
    </script-ts>
    <script src="https://github.com/rikhoffbauer/typescript-script-esm/raw/master/script-ts.element.js"></script>
  </body>
</html>
```

