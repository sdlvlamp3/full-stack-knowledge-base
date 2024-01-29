*//------------------------------------------------------------INTRO TO RUBY ON RAILS------------------------------------------------------------//*

 # FRONTEND V.S. BACKEND, AND SYSTEM DESIGN:
   - Frontend Development (AKA client-side development) is the practice of using HTML, CSS and JavaScript for a website / web application so that a user can see and interact directly with them.
     * The challenge with Frontend is that the techniques and tools used to create the frontend are constantly changing.
     * Developers must be constantly aware of how the field is developing.
     * Core concepts of the frontend are as follows:
         + HTML / CSS / JavaScript: These are the core technologies behind every webpage. HTML (HyperText Markup Language) dictates the structure, CSS (Cascading Style Sheets) sets the visual appearance, and JavaScript makes the page interactive.
         + Responsive Design: Websites must work well on multiple devices (phones, tablets, computers, laptops, etc.) requiring and understanding of responsive design principles.
         + Performance Optimization: Ensuring that websites are fast and efficient.
         + Frameworks and Libraries: Knowledge of frameworks like React, Angular, or Vue.js is often essential.
         + There is more, but these are the BIG concepts.
   - Backend Development (AKA server-side development) focuses on databases, scripting, and website architecture.
     * This is where all the magic happens that allows websites to function.
     * Backend works in tandem with frontend to deliver the final product to the end-user.
     * Some of the core concepts of backend are as follows:
         + Languages: Java, Python, Ruby, Node.js, PHP, .NET, and more.
         + Database Management: Understanding database management systems like SQL, MongoDB, or Oracle are essential
         + Server Management: Understanding server management and architecture is crucial. This includes handling Apache, Nginx, and similar platforms.
         + APIs (Application Programming Interfaces): APIs are critical for communication between the frontend and backend.
         + There are more, but these are the BIG concepts.
   - System Design, in the context of web development, focuses on the architecture of the system.
     * Specifically, it is about designing a system to handle loads efficiently and to scale as necessary.
     * This involves optimizing the code, database queries, and employing caching strategies as well as managing servers and networks.  
     * The following are some questions regarding system design:
         + Design a Simple Blogging Platform
             - How would you design a basic blogging platform where users can create and read blog posts?
             - What kind of database would you choose (SQL or NoSQL) for storing blog posts and user information. Why?
             - How would you ensure that the platform can handle an increase in the number of users and blog posts over time?
         + Design a Task Management Application\
             - How would you design a simple application for managing tasks and to-do lists?
             - What would be your approach to store and retrieve tasks efficiently?
             - Consider how multiple users might use the application simultaneously. How would your design accommodate this?
     * When it comes to frontend and backend, there's also a side of system design that comes into play.
   - Together, frontend and backend, form the backbone of the web.
   - Both are essential to the web and they both require a lot of skill and knowledge to do both well.
   - This is why it takes a team of developers to build a web application. It's not something that can be done by one person alone within a reasonable amount of time.

 # OTHER SKILLS FOR WEB DEVELOPMENT:
   - Design: Design is critical for web development because it's what makes a website look good and function well.\
     * Designers need to understand color theory, typography, and user experience (UX). 
   - Testing: Making sure that a website works as intended.
     * Testers need to understand how to write test cases, how to run tests, and how to report bugs.
     * Testing allows us to ensure that our code is working as intended and can save a lot of time and money. 
   - Project Management / DevOps: Making sure that a website is delivered on time and on budget.
     * Project managers / DevOps need to understand how to plan projects, manage teams, and communicate with clients. 
   - Security
     * Making sure that a website !!WHY ARE ALL OF THESE THE SAME!! 
   - Of course, there are more but these are the "larger" skills.

 # OVERVIEW OF COMMON FULL STACK TECHNOLOGIES:
   - Frontend:
     * HTML / CSS: Building blocks of web development
     * JavaScript: Essential for adding interactivity to web pages.
     * Frameworks: Angular, ReactJS, and Vue.js for advanced JS handling.
     * Libraries: jQuery, Bootstrap for UI components and faster development.
   - Backend:
     * Languages: Node.js (JavaScript), Ruby, Python, PHP, Java
     * Frameworks: Express (for Node.js), Django (Python), Ruby on Rails (Ruby)
     * Databases: MySQL, MongoDB, Oracle, SQLServer 
     * Server Management: Knowledge of AWS, Heroku, etc.
   - DevOps and Version Control: 
     * Git: For version control
     * DevOps Tools: Docker, Jenkins, Kubernetes 
   - Testing and Debugging: 
     * Unit Testing: JUnit (Java), Jest (JavaScript)
     * Debugging Tools: Chrome DevTools, Visual Studio Code Debugger.

 # UNDERSTANDING THE INTERNET AND WEB SERVERS:
   - The internet is a vast network of computers and servers interconnected globally. 
   - It is the infrastructure that allows devices to connect and communicate with each other.
   - There is something called data transmission in which data is sent from one device to another through a system of standardized protocols.
   - These protocols are a set of rules that define how data is transmitted between in a network.
   - The most common protocol is TCP/IP (Transmission Control Protocol/Internet Protocol) which is the protocol that allows the internet to work.
   - In regards to transferring data over the internet, there are two types of devices: clients and servers.
   - Clients are devices that request data from servers.
   - Servers are devices that store and send data to clients.
   - Ex: You computer is the client and the website has a server.
     * Your computer requests data from the server and the server send the data back to your computer. 
     * Data refers to files like HTML, CSS, JavaScript, images, videos, etc.

 # WEB SERVERS:
   - Function: Web servers are powerful computers that store web site files and serve them to users on request.
   - Software: They run software like Apache, Nginx, which handles the incoming requests from clients and responds with the requested pages.