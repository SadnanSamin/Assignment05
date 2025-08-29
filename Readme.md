1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

--> getElementById :
getElementById selects an element by its id and returns a single element

    getElementsByClassName :
            getElementsByClassName selects all the elements with their given class name and returns an array like collection

    querySelector :
            querySelector selects the first matching CSS selector that can be id , class , attributes etc.

    querySelectorAll :
            querySelectorAll selects all the matching CSS selectors and returns an array like nodelist

2. How do you create and insert a new element into the DOM?

--> We can create a new element by using document.createElement() and insert the new element into DOM by using appendChild() method

3. What is Event Bubbling and how does it work?

--> Event Bubbling is a process where an event starts from the target element and bubbles up to the parent element. It starts from the target element and bubbles up to its parent element

4. What is Event Delegation in JavaScript? Why is it useful?

--> Event Delegation is the process where a single event listener is added to the parent element instead of the child elements. It is useful because it makes the code more cleaner and efficient.

5. What is the difference between preventDefault() and stopPropagation() methods?

--> preventDefault() is used to stop the browser's default behavior like stopping it from reloading while submitting a form

stopPropagation() stops the flow of an event that bubbles up to the parent element
