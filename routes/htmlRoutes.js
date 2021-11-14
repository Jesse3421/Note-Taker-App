const path = require('path')
const router = require('express').Router()

router.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, '../../miniature-eureka-main/Develop/public/notes.html'))
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../miniature-eureka-main/public/index.html'))
});




module.exports = router