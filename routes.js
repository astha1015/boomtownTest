const express = require('express');
const controllers=require('./controllers');

const router = express.Router();

router.get('/orgs/:org_name/:endpoint?', controllers.gitHub)


module.exports = router;