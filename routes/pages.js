const express = require('express');
const path = require('path');

const router = express.Router();

const viewPath = path.join(__dirname, '..', 'view');

router.get('/', (req, res) => {
    res.sendFile(path.join(viewPath, 'index.html'));
});

router.get('/skills', (req, res) => {
    res.sendFile(path.join(viewPath, 'skills.html'));
});

router.get('/projects', (req, res) => {
    res.sendFile(path.join(viewPath, 'projects.html'));
});

router.get('/contact', (req, res) => {
    res.sendFile(path.join(viewPath, 'contact.html'));
});

router.get('/resume', (req, res) => {
    res.sendFile(path.join(viewPath, 'resume.html'));
});

module.exports = router;