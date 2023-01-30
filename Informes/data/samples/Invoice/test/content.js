// Use the "beforeRender" or "afterRender" hook
// to manipulate and control the report generation
const axios = require('axios');
async function beforeRender(req, res) {

    const response = await axios.get('http://localhost:8000/api/json');
    req.data.articulos = {...response.data.articulos}
    console.log(req.data.articulos)
}