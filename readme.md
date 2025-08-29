1.What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

 **Answer:**

 **getElementById:**  It returns a single DOM element by an Id.

 **getElementsByClassName:** It returns a group of DOM elements by a common class name.

 **querySelector:** It returns the first element.
 
 **querySelectorAll:** It returns nodelist of all matching elements.

**2.How do you create and insert a new element into the DOM?**

 **Answer:**

 First, create the new element using 'document.createElement()' method.Then set it's content using 'innerText' attribute.Next, select the parent node.Finally, Insert the element using 'appendChild()' to the last of the parent container.

**3.What is Event Bubbling and how does it work?**
  
  **answer:**

  Event Bubbling is the process where elements propagate upward in a DOM by its parent element and continue doing that until it found root parent.

  i. first it triggered an event for example 'click'.

  ii.the event first execute the target element,then it traverse
   through its immediate parent then going up to the root.

  iii.Finally it reaches the document and execute further tasks.
  
  **4.What is Event Delegation in JavaScript? Why is it useful?**
   
   **answer:** 

   Event Delegation is a process where we attach single event listener to its parent element to control its child element instead of adding multiple event listener.

   **Benefits:**

   i.increase code efficiency

   ii.it work dynamically

   iii.add only one eventlistener to handle all child.

**5.What is the difference between preventDefault() and stopPropagation() methods?**
 
 answer:

 **preventDefault():** it stops the default behavior of an element.for example, a button in a form reload each time but when use it the form do not work default mode.

 **stopPropagation():** it stops the event bubbling up.that means not able to propagate so do not reach the root.

 