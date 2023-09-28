In many cases, string interpolation and property binding are interchangable.

  <p>{{allowNewServer}}</p>
  <p [innerText]="allowNewServer"></p>

When to use string interpolation:

  When you want to output something in your template, print some text to it, then you can use string interpolation.

When to use property binding:

  When you want to change some property of an element, directive, or component, then you can use property binding.

DO NOT mix Property binding and String interpolation.