
var db = function (file, type) {
  var dom = {}
  // const originalFile = file

  // File Cleanup
  file = file.trim()
  file = file.replace(/^\s+</ig, '<')
  file = file.replace(/>(\s+$)/ig, '>')

  // Parsing
  console.log(`\n\nParsing${' ' + type}:\n\n`)
  // console.log(file.match(re.doctype))
  file = parseAttr('doctype', dom, file)
  console.log(dom.doctype)
}

module.exports = db

var re = {
  doctype: /^<!doctype [a-z0-9.:/"\- ]+>/i
}

function parseAttr (attr, dom, file) {
  dom[attr] = file.match(re[attr])[0]
  return file.replace(dom[attr], '')
}
