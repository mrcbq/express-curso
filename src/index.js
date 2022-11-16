// const http = require ('http')
// const fs = require ('fs')

// const server = http.createServer((req,res)=>{
//     const read = fs.createReadStream('./static/index.html')
//     read.pipe(res)
// })

// server.listen(3000)
// console.log(`server on port${3000}`);
const express = require("express");
const morgan = require('morgan')
const path = require('path')
const connectDB = require('./db')
require ('ejs')

connectDB()

const app = express();

const HomeRoutes = require("./routes/home")
const UserRoutes = require("./routes/users")

//settings
app.set('case sensitive routing', true) //esto es para que las rutas sean sensibles a mayus y minus
app.set('appName', 'Express Course') //express settings, es importante que esten antes de los middlewares.
app.set('port', 3000)
app.set('view engine', 'ejs')//esto le dice al proyecto que el otoro de vistas va a ser ejs
app.set('views', path.join(__dirname, 'views'))//esto le dice al prpoyecto adonde va a buscar las vistas

//middlewares
app.use(express.json())
app.use(morgan('dev'))//middleware morgan es un logger usando la opcion dev

HomeRoutes(app)//se usa asi cuando las rutas se crean usando funciones como el archivo home.js, en este caso sigue sirviendo el case sensitive routing
app.use(UserRoutes)//se usa asi cuando se crean las rutas usando el metodo router de express en el archivo users.js, cuando s etrabaja de esta manera no sigue sirviendo el case sensitive routing.

//Routes
// app.get('/note.txt', (req, res) => { res.send('este no es un archivo') })

// app.get('/UserName', (req, res) => {
//     res.send('Username Route')
// })

// app.post('/profile', (req, res) => {
//     console.log(req.body);
//     res.send('profile page')
// })

// app.all('/about', (req, res) => {
//     res.send('about page')
// })

/* app.use((req, res, next) => {
    //middlewares, primero pasa por esta funcion antes de las rutas que estan abajo
    //isAutorized?
    if (req.query.login === 'fazt@faztweb.com') {
        next()
    } else {
        res.send('No autorizado')
    }
}) */

// app.get('/dashboard', (req, res) => {
//     res.sendFile('Dashboard page')
// })

// console.log(__dirname);

//carpetas staticas, generalmente se sirven al final de las rutas.
app.use('/public', express.static(path.join(__dirname, 'public')))//middleware que sirve el contenido de la carpeta public
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))//middleware que sirve el contenido de la carpeta public


app.listen(3000);
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`);

/* app.use((req, res, next) => {
    //middlewares, primero pasa por esta funcion antes de las rutas que estan abajo
    //se reeemplaza usando morgan
    //logger
    console.log(`Route: ${req.url} Metodo" ${req.method}`);
    next()
}) */

/*
//este metodo reemplaza a todos los demas, hace lo mismo que cualqueir otro
app.all('/info', (req, res) => {
    res.send('server info')
})

//queries
app.get('/search', (req, res) => {
    console.log(req.query);
    if (req.query.q === 'javascript books') {
        res.send('Lista de libros de javascript')
    } else {
        res.send('pagina normal')
    }
})

//params
app.get('/hello/:username', (req, res) => {
    console.log(typeof (req.params.username));
    res.send(`Hello ${req.params.username.toUpperCase()}`)
})

app.get('/add/:x/:y', (req, res) => {
    const { x, y } = req.params
    console.log(typeof (x));
    res.send(`Result ${parseInt(x) + parseInt(y)}`)
})

app.get('/users/:username/photo', (req, res) => {
    console.log((req.params));
    if (req.params.username === "fazt") {
        return res.sendFile('./javascript.png', {
            root: __dirname
        })
    }

    res.send(`El usuario no tiene acceso}`)
})

app.get('/name/:name/age/:age', (req, res) => {
    console.log(req.params);
    res.send(`el usuario ${req.params.name} tiene ${req.params.age} anhos`)
})

*/

// Para procesar petiocnes post
// app.use(express.text())
// app.use(express.json())
// app.use(express.urlencoded({extended: false}))


// app.post('/user', (req, res) => {
//     console.log(req.body)
//     res.send('Nuevo usuario creado')
// })

/* 
app.get("/products", (req, res) => {
    res.send("Lista de productos");
});

//para enviar archivos
app.get("/miarchivo", (req, res) => {
    res.sendFile("./javascript.png", {
        root: __dirname,
    });
});

app.get("/user", (req, res) => {
    res.json({
        name: "fazt",
        lastname: "ray",
        age: 40,
        points: [10, 20, 30],
        address: {
            city: "new york",
            street: "some street 123",
        },
    });
});

//este no devuelve anda, solo es status code 204, pero no recarga el navegador
app.get('/isAlive', (req, res) => {
    res.sendStatus(204).end
})
*/