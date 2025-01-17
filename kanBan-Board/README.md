  <h1>Kanban Board</h1>

  <h2>Overview</h2>
  <p>This Kanban board project is a simple task management system built with React.js, TypeScript, Jest, @dnd-kit/core abd @dnd-kit/sortable. It allows users to create, manage, and organize tasks across different columns, such as "To Do", "In Progress", and "Done". The data is stored locally using <code>localStorage</code> and can be managed with features like undo and redo actions.</p>

  <hr>

  <h2>Tech Stack & Rationale</h2>

  <h3>Frontend</h3>
  <ul>
    <li><strong>React.js</strong>: A JavaScript library for building user interfaces. React allows the creation of reusable UI components that update efficiently when data changes. It provides a dynamic, interactive experience in our Kanban board.</li>
    <li><strong>TypeScript</strong>: A superset of JavaScript that adds static types. TypeScript helps us avoid runtime errors, making the codebase more maintainable and predictable.</li>
    <li><strong>Tailwind CSS</strong>: A utility-first CSS framework used to style the components quickly without writing custom CSS. It provides a clean and consistent design across the application.</li>
    <li><strong>@dnd-kit/core</strong>: A set of utilities to handle drag-and-drop interactions within the Kanban board. It makes the task movement between columns smooth and intuitive.</li>
    <li><strong>@dnd-kit/sortable</strong>: A set of utilities specifically designed to simplify implementing sortable drag-and-drop interactions in React applications. 
      This library is built on top of <code>@dnd-kit/core</code>, providing higher-level abstractions to manage sortable lists and grids with ease. It allows users to reorder items within a container, 
      making it ideal for use in applications like Kanban boards where tasks need to be moved between columns or reordered within a single column. With <code>@dnd-kit/sortable</code>, 
      task movement between columns in the Kanban board is smooth, intuitive, and highly customizable, offering built-in support for accessibility, performance, and user interaction.</li>
    <li><strong>Jest</strong>: A popular JavaScript testing framework used for writing unit and integration tests. It provides a simple and efficient way to test React applications, including support for 
      mocking, snapshot testing, and code coverage analysis. Jest is known for its ease of use, built-in assertion library, and automatic test discovery. It helps ensure the correctness of your Kanban 
      board app by running automated tests that check if the components, functions, and user interactions behave as expected. Jest also works well with other libraries, like React Testing Library, for 
      rendering components in a simulated DOM environment and testing their behavior in isolation.</li>


  </ul>

  <hr>

  <h2>Setup Instructions</h2>

  <h3>Prerequisites</h3>
  <p>To run this project locally, ensure you have the following installed:</p>
  <ul>
    <li><strong>Node.js</strong>: Version 14 or later.</li>
    <li><strong>npm or yarn</strong>: Node package managers for managing dependencies.</li>
  </ul>

  <h3>Installation</h3>
  <p>Follow these steps to set up the project:</p>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone [https://github.com/Subashh-Chaudhary/Frontend_Internship_Accessment]</code></pre>
      <p>Then navigate into the project folder:</p>
      <pre><code>cd kanban-board</code></pre>
    </li>
    <li>Install the dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Start the development server:
      <pre><code>npm run dev</code></pre>
    </li>
    <li>Open your browser and visit <a href="http://localhost:3000" target="_blank">http://localhost:5173/</a></li>
  </ol>

  <hr>

  <h2>Technology Choices & Rationale</h2>

  <h3>Why React.js?</h3>
  <ul>
    <li><strong>Component-based Architecture</strong>: React allows us to break down the UI into reusable components, making the code more modular and easier to maintain.</li>
    <li><strong>Fast Rendering</strong>: React's virtual DOM allows efficient updates, which is particularly important for interactive applications like the Kanban board.</li>
    <li><strong>Large Ecosystem</strong>: React has a large community, rich ecosystem, and lots of ready-to-use libraries like <code>@dnd-kit/core</code> for drag-and-drop functionality.</li>
  </ul>

  <h3>Why TypeScript?</h3>
  <ul>
    <li><strong>Static Typing</strong>: TypeScript helps catch potential errors during development (e.g., incorrect data types or null/undefined access).</li>
    <li><strong>Improved Developer Experience</strong>: With TypeScript, IDEs offer enhanced autocompletion, refactoring support, and error checking, which boosts productivity.</li>
    <li><strong>Scalability</strong>: As the project grows, TypeScript ensures better maintainability and reduces bugs by enforcing stricter typing.</li>
  </ul>

  <h3>Why Tailwind CSS?</h3>
  <ul>
    <li><strong>Utility-First Approach</strong>: Tailwind allows us to quickly style components without writing custom CSS, speeding up the design process.</li>
    <li><strong>Consistency</strong>: Tailwind's predefined classes enforce a consistent design across the application.</li>
    <li><strong>Customizability</strong>: We can extend or override Tailwind's default configuration to meet our specific design needs.</li>
  </ul>

  <h3>Why <code>localStorage</code>?</h3>
  <ul>
    <li><strong>No Backend Needed</strong>: We don't need to set up a server for storing tasks and columns. This reduces complexity and makes the app lightweight.</li>
    <li><strong>Persistent Data</strong>: Using <code>localStorage</code> ensures the user's tasks are saved even if the page is reloaded or the browser is closed.</li>
  </ul>

  <hr>

  <h2>Known Limitations / Trade-offs</h2>
  <ul>
    <li><strong>No Authentication</strong>: Since the application uses <code>localStorage</code>, there is no user authentication or multi-user support. If the user clears their browser data, the Kanban board will reset.</li>
    <li><strong>Limited Synchronization</strong>: Since data is stored in <code>localStorage</code>, it is not shared across multiple devices or browsers. The board is user-specific and local.</li>
  </ul>

  <hr>

  <h2>Future Improvements</h2>
  <ul>
    <li><strong>Authentication</strong>: Implement user authentication to allow for multiple users and data persistence across devices.</li>
    <li><strong>Drag-and-Drop Enhancements</strong>: Improve drag-and-drop functionality, such as adding animations or task prioritization.</li>
    <li><strong>Backend Integration</strong>: Introduce a backend (e.g., using Node.js and MongoDB) for storing tasks and columns to enable multi-user collaboration and persistent data storage.</li>
    <li><strong>Task Due Dates & Reminders</strong>: Add the ability to set due dates for tasks and send notifications/reminders.</li>
    <li><strong>Enhanced User Interface</strong>: Improve the UI by adding features such as task filtering, task search, and customizable themes.</li>
  </ul>

  <hr>

  <h2>Contributing</h2>
  <p>If you'd like to contribute to this project, please follow these steps:</p>
  <ol>
    <li>Fork the repository.</li>
    <li>Create a new branch for your feature or bug fix.</li>
    <li>Make your changes and commit them.</li>
    <li>Push your changes to your forked repository.</li>
    <li>Submit a pull request to the main repository.</li>
  </ol>

  <hr>
  
<h2>Developer Details</h2>
<p>This project was developed by <strong>Subash Tharu</strong>. For any inquiries, feel free to reach out at <a href="subashtharu.info@gmail.com">subashtharu.info@gmail.com</a>  <a href="https://www.linkedin.com/in/developer-subash/">LinkedIn</a>.</p>
