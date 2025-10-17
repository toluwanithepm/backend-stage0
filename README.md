# Backend Wizards - Stage 0 Task

A RESTful API endpoint that returns profile information along with dynamically fetched cat facts from an external API.

## 🚀 Features

- ✅ Returns user profile information (email, name, stack)
- ✅ Fetches fresh cat facts from Cat Facts API on every request
- ✅ Dynamic UTC timestamp in ISO 8601 format
- ✅ Proper error handling and graceful degradation
- ✅ CORS enabled for cross-origin requests
- ✅ Health check endpoint for monitoring

## 🛠️ Technologies Used

- **Runtime**: Node.js (v14 or higher)
- **Framework**: Express.js
- **HTTP Client**: Axios
- **Middleware**: CORS

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14.0.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/backend-stage0.git
cd backend-stage0
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure your profile (IMPORTANT!)

Open `server.js` and update the following lines with YOUR information:

```javascript
user: {
  email: 'your.email@example.com',     // YOUR EMAIL HERE
  name: 'Your Full Name',               // YOUR NAME HERE
  stack: 'Node.js/Express'              // YOUR STACK HERE
}
```

### 4. (Optional) Set environment variables

Copy `.env.example` to `.env` if you want to use a custom port:

```bash
cp .env.example .env
```

Edit `.env`:
```
PORT=3000
```

### 5. Start the server

```bash
npm start
```

You should see:
```
=================================
🚀 Server is running on port 3000
📍 Local: http://localhost:3000/me
⏰ Started at: 2025-10-17T14:23:45.123Z
=================================
```

## 🌐 API Endpoints

### Main Endpoint: `GET /me`

Returns your profile information with a dynamic cat fact.

**Request:**
```bash
curl http://localhost:3000/me
```

**Response:**
```json
{
  "status": "success",
  "user": {
    "email": "your.email@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T14:23:45.123Z",
  "fact": "Cats sleep 70% of their lives."
}
```

### Additional Endpoints

**Root: `GET /`**
```bash
curl http://localhost:3000/
```

**Health Check: `GET /health`**
```bash
curl http://localhost:3000/health
```

## 🧪 Testing

### Test locally with curl

```bash

curl http://localhost:3000/me
```

### Test in browser

Simply open your browser and navigate to:
```
http://localhost:3000/me
```

### Test with Postman

1. Open Postman
2. Create a new GET request
3. Enter URL: `http://localhost:3000/me`
4. Click "Send"
5. Verify the response structure

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^4.18.2 | Web framework for Node.js |
| axios | ^1.6.0 | HTTP client for API requests |
| cors | ^2.8.5 | Enable CORS support |

## 🚀 Deployment

This application can be deployed to any Node.js hosting platform:

### Recommended Platforms:
- **Railway** (recommended)
- **Heroku**
- **AWS** (EC2, Elastic Beanstalk, Lambda)
- **Digital Ocean**
- **Google Cloud Platform**
- **Azure**
- **Fly.io**

### Deployment Checklist:
- [ ] Update your profile information in `server.js`
- [ ] Test locally first
- [ ] Ensure `package.json` has correct start script
- [ ] Set `PORT` environment variable (most platforms do this automatically)
- [ ] Deploy and get your public URL
- [ ] Test the deployed endpoint: `http://your-url/me`

## ⚠️ Important Notes

1. **Do NOT use Vercel or Render** - They are forbidden for this cohort
2. **Update your profile info** - Replace placeholder values in `server.js`
3. **Cat facts are fetched fresh** - No caching, new fact every request
4. **Timestamp is dynamic** - Updates with every request
5. **Error handling** - If Cat Facts API fails, a fallback message is used

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill the process using port 3000 (Linux/Mac)
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=8080 npm start
```

### Cannot fetch cat facts
- Check your internet connection
- The Cat Facts API might be temporarily down
- The app will use a fallback message: "Cat fact unavailable at the moment."

### CORS errors
- CORS is already enabled in the code
- If still having issues, check browser console for specific errors

## 📝 Project Structure

```
backend-stage0/
├── server.js           # Main application file
├── package.json        # Dependencies and scripts
├── .gitignore         # Git ignore rules
├── .env.example       # Example environment variables
└── README.md          # This file
```

## 🎯 Acceptance Criteria

- [x] Working GET /me endpoint returning 200 OK
- [x] Response follows exact JSON schema
- [x] All required fields present (status, user, timestamp, fact)
- [x] User object contains email, name, and stack
- [x] Timestamp in UTC ISO 8601 format
- [x] Timestamp updates dynamically
- [x] Cat fact fetched fresh on every request
- [x] Content-Type header is application/json
- [x] Proper error handling
- [x] Well-structured code following best practices

## 👨‍💻 Author

**Toluwani Oluwamuyiwa**
- Email: goldenwritertolu@gmail.com
- GitHub: [@toluwanithepm](https://github.com/toluwanithepm)
- LinkedIn: [Toluwani Oluwamuyiwa](https://linkedin.com/in/toluwanioluwamuyiwa)

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Backend Wizards Program
- Cat Facts API (https://catfact.ninja)

---

**Note**: Remember to update your personal information in `server.js` before deploying!