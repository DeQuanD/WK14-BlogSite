const router = require('express').Router();

router.get('/', async (req,res)=>{
res.render('homepage')})

router.get('/dashboard', async (req,res)=>{
    res.render('homepage')})

 router.get('/login', async (req,res)=>{
     res.render('login')})

module.exports = router 