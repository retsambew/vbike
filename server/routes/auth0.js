import { auth } from 'express-openid-connect';

const config = {
    authRequired: true,
    auth0Logout: true,
    baseURL: 'http://localhost:5000',
    clientID: 'cwK1ekxsrylAR8iaBp7c2YLjUNbGtWmq',
    issuerBaseURL: 'https://stream.au.auth0.com',
    secret: 't3DwFWENn9YmQgkvM8IR3IdtjggNWCH3D4iu07lZ8N74Qx1O2n_nDkK3dcrYSsBA'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
});