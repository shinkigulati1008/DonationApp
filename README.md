Shinki Donation App

This project consists of two main components: a client-side React application and a server-side Node.js API.

Client (React)
The client folder contains a React application that is responsible for rendering a donation form. It utilizes React-Markdown for displaying formatted text and Tailwind CSS for styling.

Setup Instructions
1. Navigate to the client folder.
2. Install dependencies using npm:
   npm install
3. Start the development server:
   npm run dev
4. Access the application at http://localhost:5173.

Server (Node.js)
The server folder contains a Node.js API that handles interactions with the Stripe payment gateway. It utilizes the following dependencies:

cors for enabling Cross-Origin Resource Sharing (CORS) headers.
dotenv for loading environment variables from a .env file.
express for building the RESTful API.
firebase-admin for interfacing with Firebase services.
formidable for parsing form data from incoming requests.
helmet for adding security-related HTTP headers.
stripe for interacting with the Stripe API.
##Setup Instructions####
1. Navigate to the server folder.
2. Install dependencies using npm:
   npm install
3. Start the server:
    npm start
4. The server will start listening for requests on the 3001 port.

Environment Variables
Ensure that you provide the necessary environment variables, such as Stripe API keys, in a .env file located in the server directory. I have uploaded env sample you can check
   
   

   
