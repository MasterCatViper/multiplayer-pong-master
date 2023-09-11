const express = require('express');
const path = require('path');

const helper = express();

helper.use(express.static(path.join(__dirname, 'public')));

helper.use('/', express.static('index.html'));

module.exports = helper;