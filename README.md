
---

# FaceLink - Video Call App

FaceLink is a video call application built using React and integrated with ZegoCloud for real-time video communication. It allows users to join a video call by using a unique room ID and provides features like personal shared links for easy access.

## Features
- 1-on-1 video call functionality.
- Personal shared link for each video room.
- Real-time video and audio communication.
  
## Prerequisites

Before running this app, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (Recommended version: 14.x or higher)
- [npm](https://www.npmjs.com/) (or Yarn)

## Getting Started

### 1. Clone the Repository
Clone the project to your local machine:
```bash
git clone https://github.com/your-username/FaceLink.git
cd FaceLink
```

### 2. Install Dependencies
Inside the project directory, run the following command to install the required dependencies:
```bash
npm install
```

### 3. Set Up ZegoCloud API
This app uses ZegoCloud’s video call services. In order to use the ZegoCloud API, you need to replace the `serverSecret` and `appID` in the code with your own credentials.

- **App ID**: Your ZegoCloud application ID.
- **Server Secret**: Your ZegoCloud server secret.

#### Steps to Obtain Your ZegoCloud Credentials:
1. Go to the [ZegoCloud Dashboard](https://console.zegocloud.com/) and log in or sign up.
2. Create a new project or use an existing project to get the **App ID** and **Server Secret**.

### 4. Replace ZegoCloud Credentials in the Code
In the `Room.js` file, replace the `appID` and `serverSecret` with your own:

```js
const appID = <YOUR_APP_ID>;  // Replace with your ZegoCloud App ID
const serverSecret = "<YOUR_SERVER_SECRET>";  // Replace with your ZegoCloud Server Secret
```

### 5. Run the Application
After replacing the credentials, run the app by executing the following command in your terminal:
```bash
npm start
```

This will start the development server and the app will be available at `http://localhost:3000/`.

### 6. Accessing a Room
To join a video call:
1. Open a browser window and go to `http://localhost:3000/room/:id`, replacing `:id` with a unique room ID.
2. The app will generate a personal link to the meeting, and users can join the call.

### 7. Deployment (Optional)
To deploy the app for production, you can use Vercel, Netlify, or any other static hosting service. For Vercel:
1. Push your code to GitHub or any other Git repository.
2. Connect your GitHub repository to [Vercel](https://vercel.com/) and deploy.

### How the App Works

1. **ZegoCloud Integration**: The app utilizes ZegoCloud’s `ZegoUIKitPrebuilt` library for real-time video call functionality. 
2. **Room Management**: The app allows users to join a specific room by providing a unique room ID in the URL. This ID is used to generate a ZegoCloud Kit Token for secure room entry.
3. **Personal Links**: Each user is provided a personal link to join the room, which can be shared with others.
4. **1-on-1 Calls**: The default scenario is set to 1-on-1 call mode using `ZegoUIKitPrebuilt.OneONoneCall`. However, this can be adjusted for group calls.

## Technologies Used
- **React**: For building the user interface.
- **ZegoCloud**: For real-time video communication.
- **React Router**: For handling dynamic URLs for different rooms.

## Customization
Feel free to adjust the app as needed:
- Change the call mode to support group calls by using `ZegoUIKitPrebuilt.GroupCall`.
- Add more features like chat, screen sharing, etc.

## License
This project is open-source and available under the MIT License.

---
