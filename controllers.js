const { default: axios } = require('axios');
const constants = require('./constants');

const gitHub = async function (req, res) {
    const { org_name, endpoint } = req.params;
    try {
      const { data } = await axios.get(`https://${constants.hostname}/orgs/${org_name}${endpoint ? `/${endpoint}` : ''}`)
      res.send(data);
    } catch (err) {
      console.error(err)
      res.status(500).send(err.response.message)
    }
}

module.exports = { gitHub }