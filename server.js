const express = require('express')
const path = require('path')

const app = express();
const PORT = 3000

app.use('/view', express.static(path.join(__dirname, 'view')))
app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(express.static(__dirname))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'view','index.html'))
})
app.get('/skills',(req,res)=>{
    res.sendFile(path.join(__dirname,'view','skills.html'))
})
app.get('/projects',(reg,res)=>{
    res.sendFile(path.join(__dirname, 'view', 'projects.html'))
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname, 'view', 'contact.html'))
})
app.get('/resume',(req,res)=>{
    res.sendFile(path.join(__dirname,'view','resume.html'))
})
app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`)
})