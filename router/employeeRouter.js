const express = require('express');
const router = express.Router();
const {Insert,View,Delete,Update} = require('../controller/employee');
router.post('/insert',Insert)
router.get('/view/:id',View)
router.delete('/delete/:id',Delete)
router.put('/update/:id',Update)
module.exports = router;