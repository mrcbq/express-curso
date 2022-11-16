const { Router } = require("express")

const router = Router()

router.get('/users', (req, res) => {
    res.render('users')
    // console.log(req.body);
    // res.send('profile page')
})

// router.get('/UserName', (req, res) => {
//     res.send('Username Route')
// })

module.exports = router