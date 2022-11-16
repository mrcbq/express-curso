const axios = require ('axios')

function HomeRouter(app) {
    app.get('/', (req, res) => {
        let isActive = true

        const users = [
            {
                id:1,
                name: "ryan",
                lastname: "perez"
            },
            {
                id:2,
                name: "joe",
                lastname: "mc millan"
            }
        ]

        const title = 'Mi pagina creada desde express'

        res.render('index', {
            title,
            isActive,
            users
        })
        // res.send('about page')
    })

    app.get('/about', (req, res) => {

        res.render('about')
        // res.send('about page')
    })

    app.get('/posts', async (req, res) => {

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts')  // tambien se puede con el metodo fetch incluido en node v.18
        // const data = await response.json()

        console.log(response);

        res.render('posts', {
            posts: response.data,
            // posts: data
        })
    })

    app.get('/dashboard', (req, res) => {
        res.render('dashboard')
        // res.send('Dashboard page')
    })
}

module.exports = HomeRouter