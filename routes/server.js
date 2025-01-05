import express from 'express';
import cors from 'cors';
import session from 'express-session';
import { OAuth2Client } from 'google-auth-library'; // For Google OAuth
import menuRoutes from './menu.js';  // Your existing menu routes
import authRoutes from './routes/auth.js';  // Authentication routes (for Google Sign-In)

const app = express();
const PORT = process.env.PORT || 5000;

// Set up middleware
app.use(cors());
app.use(express.json());
app.use(session({
  secret: 'your-session-secret',  // Choose a strong session secret
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  // Set to true if you're using HTTPS
}));

// Use authentication routes
app.use('/auth', authRoutes);  // This will handle Google Sign-In and callbacks

// Use menu routes (your existing functionality)
app.use('/api/menu', menuRoutes);

// A basic profile route to check if user is logged in
app.get('/profile', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/auth/google');  // Redirect to Google login if not authenticated
  }
  res.json(req.session.user);  // Return user profile info
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
