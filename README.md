# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. Describe the biggest difference between `.forEach` & `.map`.

The differences between .forEach and .map include the following: 
- .forEach will not work on objects within an array .map WILL work on objects within an array.
- .Map will return a new array whereas .forEach will not.


2. What is the difference between a function and a method?

The difference between a function and a method is small because a method is also a function. A method is a function located within an object. A function is a stand alone declaration outsite of an object. Because everything in JS is technically an object you could say that a method is a "functional object" within another object rather than just a piece of data or some other type of declaration. 

3. What is closure?
Closure is when you have a subset of code protected from outter scopes because the subset is nested within a larger set of code. The more traditional definition is a combination of functions and the lexical environment within which that function is being declared. The nested variable or function have the ability to reach outward for context but outter scopes cannot look inward for context which is exactly what protects this code and creates "closure".

4. Describe the four rules of the 'this' keyword.
 1. Global Binding (when you have the 'this' keyword pointing at the window or global scope)
 2. Implicit Binding (When you call something using dot notation the object to the left of the dot is what the 'this' keyword point at for a reference)
 3. New keyword Binding (when you have a constructor function, the 'this' keyword gets pointed at the "NEW" object being created by the constructor function)
 4. Explicit Binding (when you demand the this keyword be attached to a specific object by using the call or apply method on the object in question)

5. Why do we need super() in an extended class?
JavaScript is a language that does not technically have classes and so the class identifier is simply referred to syntactical sugar. This means that the OOP(object oriented programming) along with constructor objects, prototypes, and inheritance principles have a different syntax to express the same code when using classes. 
super() is used for the inheritance of the parent constructor which passes on any methods which would traditionally been located within the prototype.

## Project Set up

Follow these steps to set up and work on your project:

- [ x] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
