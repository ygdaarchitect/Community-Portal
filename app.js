const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Middleware for static files and form data
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    const communityNews = [
        { title: "Annual Community Cleanup", date: "Nov 12, 2026", desc: "Join us at the central park for our cleanup drive." },
        { title: "Local Farmers Market", date: "Nov 15, 2026", desc: "Fresh produce and crafts available all weekend." }
    ];
    res.render('index', { news: communityNews });
});

app.post('/contact', (req, res) => {
    const { name, message } = req.body;
    console.log(`Message received from ${name}: ${message}`);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
