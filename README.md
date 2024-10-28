
# Netflix Clone Project 🎬

A Netflix-inspired streaming web app built with **React**, **Vite**, and **Firebase**, featuring user authentication, data management, and a responsive UI. Deployed on Firebase Hosting for fast and secure access!

![Demo](src/assets/dem.gif)

---

## 🔥 Features

- **Responsive UI** with Netflix-like styling and design.
- **User Authentication** with Firebase for secure login and signup.
- **Firestore Database** for storing and managing user data.
- **Live Deployment** on Firebase Hosting for easy access and usage.

---

## 🛠 Tech Stack

<div> 
  <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" height="40"/> &nbsp; 
  <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" height="40"/> &nbsp; 
  <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML5" height="40"/> &nbsp; 
  <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS3" height="40"/> &nbsp; 
  <img src="https://img.icons8.com/color/48/000000/firebase.png" alt="Firebase" height="40"/> &nbsp; 
  <img src="https://img.icons8.com/color/48/000000/vite.png" alt="Vite" height="40"/> 
</div>

- **React**: Building the user interface and component structure.
- **Vite**: Lightning-fast development and build tool.
- **Firebase**: Authentication, database management, and hosting.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** and **npm** installed. [Download here](https://nodejs.org/).
- **Firebase CLI** installed for deployment. Install it globally with:

  ```bash
  npm install -g firebase-tools
  ```

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Rami-Fayad/Netflix-clone-.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd Netflix-clone
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

### Running the Project

- Start the development server:

  ```bash
  npm run dev
  ```

- Open your browser to [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🌍 Deployment

### Deploying on Firebase Hosting

1. **Build the project**:

   ```bash
   npm run build
   ```

2. **Initialize Firebase** (only needed the first time):

   ```bash
   firebase init
   ```

   - Select **Hosting**.
   - Choose the `dist` folder (Vite's default output directory) as your public directory.
   - Configure it as a single-page app by selecting **Yes**.

3. **Deploy the project**:

   ```bash
   firebase deploy
   ```

- Once deployed, Firebase will provide a live URL where your project is accessible!
