import express from 'express';

const router = express.Router();

router.use('/', require('./react'));

module.exports = router;
