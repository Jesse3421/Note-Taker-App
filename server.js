const express = require('express');
const PORT = process.env.PORT || 3003;
const app = express();
const apiRoutes = require('../Note-Taker-App/routes/apiRoutes')
const htmlRoutes = require('../Note-Taker-App/routes/htmlRoutes')

app.use('/api', apiRoutes)
app.use('/', htmlRoutes)





app.listen(PORT, () => {
    console.log(`API server now on port http://localhost:${PORT}!`)
});