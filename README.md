# GetPaws Veterinary Assistance Platform

A real-time, server-integrated veterinary assistance system for pet owners.

## Features

- Real-time vet availability dashboard (WebSockets)
- Symptom checker tool (REST API)
- Book vet appointments (DB + email confirmation)
- Pet medical history viewer (DB, filters)
- Reusable React components
- Server-side engineering best practices

## How to Run

1. **Install dependencies** in both `/server` and `/client`
2. **Set up environment variables** in `/server/.env`:
   ```
   MONGO_URI=your_mongodb_uri
   EMAIL_USER=your_gmail
   EMAIL_PASS=your_gmail_app_password
   ```
3. **Start backend**:  
   `cd server && npm run dev`
4. **Start frontend**:  
   `cd client && npm start`
5. Visit [http://localhost:3000](http://localhost:3000)

## About

See the "About" page in the app for a summary of server-side concepts and component reuse.