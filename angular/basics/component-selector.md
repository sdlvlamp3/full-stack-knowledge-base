The selector must be unique so you do not override an existing element/component.

Angular recognizes what element you want the component to target based on what you put in the selector. 
  If you put in `app-servers`, Angular will look for `<app-servers></app-servers>` in the HTML file. If you put in `app-servers` in the HTML file, Angular will look for `<app-servers></app-servers>` in the component file.

The selector can be any valid CSS selector:
  - Element selector: `app-servers` (matches `<app-servers></app-servers>`)
  - Class selector: `.app-servers` (matches `<div class="app-servers"></div>`)
  - Attribute selector: `[app-servers]` (matches `<div app-servers></div>`)

The element selector is the most commonly used selector for components.