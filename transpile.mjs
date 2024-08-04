import {transpile} from "https://esm.sh/typescript";

const scripts = [...document.querySelectorAll(`script[type="typescript"]`)];

for (const script of scripts) {
  script.remove();
  Object.assign(script, {
    type: "module",
    innerHTML: transpile(script.innerHTML.trim(), {
      module: "ESNext", 
      target: "ES6", 
      jsx: "React"
    }), 
  });
}

document.body.append(...scripts);
