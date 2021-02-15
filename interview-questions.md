# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a function? Why would you use one?

  Your answer:
  In JavaScript, a function is an object that can be used to run a set of code. The benefits of a function is that it is reusable.

  Researched answer:
  Functions are a set of instructions that are designed to be run when called upon. Functions usually 'receive' data, do something to that data, and 'return' a result. You would use a function because a function allows you to break down a program into substeps, functions are reusable, functions reduce the need for global variables, and functions can be tested in isolation.


2. What is the difference between .map() and .filter()?

  Your answer:
  The .map() built-in function is used to create a new array that is the same length as the original array. The new array from .map() uses a function to get that new value.
  The .filter() built-in function is used to create a new array that is a subarray of the original array. The .filter() function does not modify existing values.

  Researched answer:
  The .map() function is used on arrays to return a new array of the same length that contains updated values. You would not want to use .map() if you're not going to use the array it returns, or if you're not returning a value from the callback function.
  The .filter() function will result in a new smaller array whose values meet a condition as true. If the condition is false for an element, it is not added to the new array.
  For both .map() and .filter(), the functions do not change the original array that it was called on.


3. What is the difference between console.log() and return?

  Your answer:
  The difference between 'console.log()' and 'return' is that 'console.log()' is used to print information in the terminal, and 'return' is used to return something from a function.

  Researched answer:
  The function 'console.log' is used to print or log a message to the console from our code. The message may be a string or a JavaScript object.
  A 'return' statement is used to end the execution of a function. If no value or expression is included in the return statement, 'undefined' is returned.

4. In regards to functions, what is an argument?

  Your answer:
  An argument to a function is an input containing data. This data will then be processed within the function to return something back.

  Researched answer:
  An argument is outside information passed into a function when a function is called. An argument can be either a primitive (e.g. string, number, boolean), an object, or an array of those data types/data structures.


5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer:
  The proper pair programming technique requires two people to work in a pair, with one person being the "driver," and the second person being the "navigator." The "driver" is the person with their hands on the keyboard, typing up the code. The "navigator" is like the person with the map, that tells the driver what to type.

  Researched answer:
  Proper pair programming requires a two people with distinct roles. There is a "driver," who is the only one on the keyboard. The driver is responsible for typing the code and following the directions of the "navigator." The navigator on the other hand provides instructions and tries to guide the driver as to what to type.


6. What is iteration?

  Your answer:
  Iteration is using repetition within a process. A process may require repeating a step for different values. Each instance of this is an iteration.

  Researched answer:
  An iteration is a set of instructions that are continually repeated (usually through a loop). We would iterate until a condition is met, iterate a specific number of times, or iterate through elements of a list or an array.


7. What are advantages and disadvantages for using terminal commands to interact with your computer?

  Your answer:
  The advantages of using terminal commands is speed and manueverability. The disadvantage of using terminal commands is that mistakes are easier to make, and mistakes are more costly.

  Researched answer:
  A terminal, or CLI (command line interface) has the advantage of functionality, speed, multitasking, scripting, and automation. The disadvantage of a terminal is the ease of use.

8. What is something we did in class this week you found helpful?  

  Your answer:
  Something that we did in class this week that I found helpful was pair programming. Having to explain my thought process helped break down how things work when it comes to code.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- Jest - a testing framework to perform quality assurance on JavaScript code
- Test Driven Development - the process of using software requirements as test cases to help guide how we write our code
- Classes - a function that contains data and methods, and serve as a blueprint for objects
- React - a JavaScript library used for building user interfaces or UI components
- React State - an object that stores the property values of a component and it controls how a component looks and works
- CRUD - acronym for Create, Read, Update, Delete. These functions are necessary when it comes to persistent data (data that sticks around long term)
