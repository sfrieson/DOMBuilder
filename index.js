const domb = require('./lib')
const fs = require('fs')

domb(fs.readFileSync('./html/xhtml.html', 'utf8'), 'xhtml')
