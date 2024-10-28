Netflix Clone Project 🎬
A Netflix-inspired streaming web app built with React, Vite, and Firebase, featuring user authentication, data management, and a responsive UI. Deployed on Firebase Hosting for fast and secure access!

![Project Demo](/src/assets/dem.gif)


🔥 Features
Responsive UI with Netflix-like styling and design.
User Authentication with Firebase for secure login and signup.
Firebase Firestore Database to store and manage user data.
Live deployment on Firebase Hosting for easy access and usage.
🛠 Tech Stack
<div> <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" height="40"/> &nbsp; <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" height="40"/> &nbsp; <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML5" height="40"/> &nbsp; <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS3" height="40"/> &nbsp; <img src="https://img.icons8.com/color/48/000000/firebase.png" alt="Firebase" height="40"/> &nbsp; <img src="https://img.icons8.com/color/48/000000/vite.png" alt="Vite" height="40"/> </div>
React: Building the user interface and component structure.
Vite: Lightning-fast development and build tool.
Firebase: Authentication, database management, and hosting.
🚀 Getting Started
Prerequisites
Node.js and npm installed. You can download them here.
Firebase CLI installed for deployment. Install with:
bash
Copy code
npm install -g firebase-tools
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/Rami-Fayad/Netflix-clone-.git
Navigate to the project directory:
bash
Copy code
cd Netflix-clone
Install dependencies:
bash
Copy code
npm install
Running the Project
Start the development server:
bash
Copy code
npm run dev
Open your browser to http://localhost:3000 to view the app.

🌍 Deployment
Deploying on Firebase Hosting
Build the project:

bash
Copy code
npm run build
Initialize Firebase (only the first time):

bash
Copy code
firebase init
Select Hosting.
Choose the dist folder (Vite's default output directory) as your public directory.
Configure it as a single-page app (select yes).
Deploy the project:

bash
Copy code
firebase deploy
Once deployed, Firebase will provide a live URL where your project is accessible!
