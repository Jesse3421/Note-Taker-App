const express = require('express');
const PORT = process.env.PORT || 3005;
const app = express();
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

app.use('/api', apiRoutes)
app.use('/', htmlRoutes)


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`API server now on port http://localhost:${PORT}!`)
});