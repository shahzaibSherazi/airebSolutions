# Aireb Solutions Backend

Professional Node.js + MongoDB backend for handling contact form submissions with email integration.

## 📋 Features

- ✅ Contact form submission and storage
- ✅ Email notifications to company Gmail
- ✅ Confirmation emails to users
- ✅ MongoDB database integration
- ✅ Input validation and sanitization
- ✅ Rate limiting to prevent spam
- ✅ Security headers with Helmet
- ✅ CORS configuration
- ✅ Admin contact management (view, update, delete)
- ✅ Contact statistics dashboard

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB account (MongoDB Atlas recommended)
- Gmail account with App Password
- npm or yarn

### Installation

1. **Clone the repository and navigate to backend folder:**

   ```bash
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create .env file:**

   ```bash
   cp .env.example .env
   ```

4. **Configure environment variables in `.env`:**

   ```env
   PORT=5000
   NODE_ENV=development
   
   # MongoDB Atlas Connection
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/aireb_solutions
   
   # Gmail Configuration
   GMAIL_USER=your-email@gmail.com
   GMAIL_PASSWORD=your-app-password
   
   # Company Email
   COMPANY_EMAIL=company@airebsolutions.com
   
   # Frontend URL
   FRONTEND_URL=http://localhost:5173
   
   # Email Settings
   ADMIN_EMAIL=admin@airebsolutions.com
   SENDER_NAME=Aireb Solutions
   ```

### Setup Instructions

#### 1. MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new free cluster
3. Create a database user with password
4. Get your connection string and add database name
5. Copy connection string to `MONGODB_URI` in `.env`

#### 2. Gmail App Password Setup

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication if not already enabled
3. Go to "App passwords" section
4. Select "Mail" and "Windows Computer" (or your device)
5. Google will generate a 16-character password
6. Copy this password to `GMAIL_PASSWORD` in `.env`
7. Copy your Gmail address to `GMAIL_USER` in `.env`

#### 3. Run the Server

**Development mode (with auto-reload):**

```bash
npm run dev
```

**Production mode:**

```bash
npm start
```

Server will run on `http://localhost:5000`

## 📡 API Endpoints

### Contact Form Submission

**POST** `/api/contact/submit`

Submit a new contact form.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "city": "New York",
  "email": "john@example.com",
  "phoneNumber": "+1234567890",
  "message": "I'm interested in your services",
  "privacyAgreed": true
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Contact form submitted successfully. We will get back to you soon!",
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "email": "john@example.com"
  }
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

### Admin Routes (for contact management)

#### Get All Contacts

**GET** `/api/contact/`

Returns all submitted contacts sorted by newest first.

#### Get Contact Statistics

**GET** `/api/contact/stats`

Returns contact statistics by status.

#### Get Single Contact

**GET** `/api/contact/:id`

Get details of a specific contact.

#### Update Contact Status

**PATCH** `/api/contact/:id`

Update contact status and add notes.

**Request Body:**
```json
{
  "status": "replied",
  "notes": "Sent proposal on Jan 20"
}
```

#### Delete Contact

**DELETE** `/api/contact/:id`

Delete a contact from database.

### Health Check

**GET** `/api/health`

Check if server is running.

## 📁 Project Structure

```
backend/
├── config/
│   └── database.js          # MongoDB connection
├── controllers/
│   └── contactController.js # Business logic
├── middleware/
│   ├── validation.js        # Input validation
│   └── errorHandler.js      # Error handling
├── models/
│   └── Contact.js           # MongoDB schema
├── routes/
│   └── contactRoutes.js     # API routes
├── services/
│   └── emailService.js      # Email sending logic
├── .env.example             # Environment template
├── .gitignore               # Git ignore rules
├── package.json             # Dependencies
├── server.js                # Main server file
└── README.md               # This file
```

## 🔒 Security Features

- **Helmet.js**: Sets various HTTP headers for security
- **CORS**: Restricted to frontend URL
- **Rate Limiting**: 5 requests per 15 minutes per IP
- **Input Validation**: Server-side validation on all fields
- **Email Sanitization**: Emails are normalized and validated
- **Environment Variables**: Sensitive data kept in .env

## 📧 Email Integration

### Company Email (Contact Submission)

When a contact form is submitted:
1. Email sent to company with all contact details
2. Professional HTML template
3. Reply-To set to user's email

### User Confirmation Email

When form is submitted:
1. Confirmation email sent to user
2. Sets expectations (24-48 hour response)
3. Professional branding

## 🧪 Testing the API

### Using cURL

```bash
curl -X POST http://localhost:5000/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "city": "New York",
    "email": "john@example.com",
    "phoneNumber": "+1234567890",
    "message": "I am interested in your services for a web project",
    "privacyAgreed": true
  }'
```

### Using Postman

1. Create new POST request
2. URL: `http://localhost:5000/api/contact/submit`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON):
```json
{
  "fullName": "John Doe",
  "city": "New York",
  "email": "john@example.com",
  "phoneNumber": "+1234567890",
  "message": "I am interested in your services for a web project",
  "privacyAgreed": true
}
```

## 🐛 Troubleshooting

### MongoDB Connection Error
- Check your `MONGODB_URI` in `.env`
- Ensure whitelist IP in MongoDB Atlas (allow 0.0.0.0)
- Verify database user has correct password

### Email Not Sending
- Check `GMAIL_USER` and `GMAIL_PASSWORD` in `.env`
- Ensure you're using App Password (not regular password)
- Check Less Secure App Access is enabled
- Verify `COMPANY_EMAIL` is correct

### CORS Error
- Check `FRONTEND_URL` matches your frontend domain
- Ensure frontend is sending from correct origin

### Rate Limiting
- Current limit: 5 requests per 15 minutes per IP
- Change in `server.js` if needed
- Clear local IP cache if testing locally

## 📊 Database Schema

### Contact Schema

```javascript
{
  fullName: String (required, 2-100 chars),
  city: String (required, 2-100 chars),
  email: String (required, valid email),
  phoneNumber: String (required, min 10 chars),
  message: String (required, 10-5000 chars),
  privacyAgreed: Boolean (required, must be true),
  status: String (enum: 'new', 'read', 'replied', default: 'new'),
  notes: String (optional, for admin),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

## 🚢 Deployment

### Deploy to Render.com

1. Push code to GitHub
2. Go to [Render.com](https://render.com)
3. Create new Web Service
4. Connect your GitHub repository
5. Set environment variables
6. Deploy

### Deploy to Heroku

1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set variables: `heroku config:set VAR_NAME=value`
5. Deploy: `git push heroku main`

## 📝 Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| NODE_ENV | Environment | development/production |
| MONGODB_URI | MongoDB connection | mongodb+srv://... |
| GMAIL_USER | Gmail address | your-email@gmail.com |
| GMAIL_PASSWORD | Gmail app password | xxxx xxxx xxxx xxxx |
| COMPANY_EMAIL | Company email | company@example.com |
| FRONTEND_URL | Frontend domain | http://localhost:5173 |
| ADMIN_EMAIL | Admin email | admin@example.com |
| SENDER_NAME | Email sender name | Aireb Solutions |

## 🤝 Integration with Frontend

Update your frontend form submission to:

```javascript
const submitForm = async (formData) => {
  try {
    const response = await fetch('http://localhost:5000/api/contact/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const data = await response.json();
    
    if (data.success) {
      console.log('Form submitted successfully!');
    } else {
      console.error('Errors:', data.errors);
    }
  } catch (error) {
    console.error('Submission error:', error);
  }
};
```

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review error messages in server logs
3. Verify all environment variables are set correctly

## 📄 License

MIT License - Feel free to use this project for commercial purposes.

## ✨ Next Steps

1. Test the API with Postman or cURL
2. Update frontend to call the backend API
3. Verify emails are being sent correctly
4. Monitor MongoDB collections
5. Deploy to production when ready
