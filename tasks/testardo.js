/*
 * grunt-testardo
 * https://github.com/gianlucaguarini/grunt-testardo
 *
 * Copyright (c) 2014 Gianluca Guarini
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  // __dirname + '/../node_modules/.bin/handlebars -m
  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  var exec = require('child_process').exec,
    path = require('path'),
    sys = require('sys');

  grunt.registerMultiTask('testardo', 'A grunt wrapper for testardo.', function() {


    grunt.registerMultiTask('testardo', 'Testing the files with testardo', function() {
      var done = this.async(),
        files = this.filesSrc.join(path.resolve() + this.files.cwd + ' '),
        options = '';
      Object.keys(this.data.options).forEach(function(key) {
        options += '--' + key + '=' + this.data.options[key] + ' ';
      }.bind(this));
      console.log(this);
      console.log(options + files);

      /*    exec('__dirname + '/../node_modules/.bin/testardo ' + options + files, function(error, stdout, stderr) {
          sys.print('stdout: ' + stdout);
          sys.print('stderr: ' + stderr);
          if (error !== null) {
            console.log('exec error: ' + error);
          }
        });*/

    });
  });

};