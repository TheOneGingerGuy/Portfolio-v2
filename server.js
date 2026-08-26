const express = require('express');
const path = require('path');
const pageRoutes = require('./routes/pages');

const app = express();
const PORT = 3000;

app.use('/view', express.static(path.join(__dirname, 'view')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname, { index: false })); // serves script.js and universal.js

app.use('/', pageRoutes);
app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname, 'view', '404.html'))
})
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});