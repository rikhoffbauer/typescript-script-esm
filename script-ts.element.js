class TypeScriptElement extends HTMLElement {
    static get observedAttributes() {
        return ['compilerOptions'];
    }

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.style.display = 'none'; // Hide the content of the custom element
    }

    async connectedCallback() {
        await this.loadTypeScript();
        this.transpile();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'compilerOptions' && oldValue !== newValue) {
            this.transpile();
        }
    }

    async loadTypeScript() {
        if (window.ts) return;

        const script = document.createElement('script');
        script.src = 'https://unpkg.com/typescript@latest/lib/typescript.js';
        script.onload = () => {
            this.transpile();
        };
        document.head.appendChild(script);
    }

    transpile() {
        if (!window.ts) return;

        const code = this.innerHTML.trim();
      
        try {
          const compilerOptionsStr = this.getAttribute('compilerOptions');
          const compilerOptions = JSON.parse(compilerOptionsStr);
        } catch(err) {
          console.group(`Failed to parse compilerOptions`);
          console.groupCollapsed(`compilerOptions`);
          console.log(compilerOptionsStr);
          console.groupEnd();
          console.error(err.message);
          console.groupEnd();
        }

        const transpiledCode = ts.transpile(code, {
            module: ts.ModuleKind.ESNext,
            target: ts.ScriptTarget.ES6,
            jsx: ts.JsxEmit.React,
            ...compilerOptions
        });

        const script = document.createElement('script');
        script.type = 'module';
        script.textContent = transpiledCode;
        this.shadow.innerHTML = '';
        this.shadow.appendChild(script);
    }
}

customElements.define('script-ts', TypeScriptElement);
