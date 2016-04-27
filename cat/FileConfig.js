var path = require('path');

var src = {

  css: 'src/css/**/*.less',

  js: 'src/js/**/*.js',

  html: 'src/**/**.html',

  img: 'src/img/**'

}

var modules = {

  "index": {

    src:'index',

    dest: 'index',

    name: 'index'

  }

};

module.exports = new FileConfig();