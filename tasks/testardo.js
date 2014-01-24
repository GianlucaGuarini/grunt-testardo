/*
 * grunt-testardo
 * https://github.com/gianlucaguarini/grunt-testardo
 *
 * Copyright (c) 2014 Gianluca Guarini
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  var spawn = require('child_process').spawn,
    path = require('path'),
    sys = require('sys');

  grunt.registerMultiTask('testardo', 'Testing the files with testardo', function() {
    var done = this.async(),
      files = this.filesSrc,
      options = [],
      process;
    // get the options
    Object.keys(this.data.options).forEach(function(key) {
      options.push('--' + key + '=' + this.data.options[key]);
    }.bind(this));

    // trigger the testardo shell command
    process = spawn( __dirname + '/../node_modules/.bin/testardo',options.concat(files));

    process.stdout.on('data', function(data) {
      grunt.log.subhead('Please connect your device to following url to run the tests:');
      grunt.log.oklns(String(data).replace(/([a-z]{2}[0-9]:)/,''));
    });
    // listen all the testardo errors
    process.stderr.on('data', function(data) {
      grunt.log.errorlns(data);
      grunt.fail.fatal({
        message:'Damn it! It looks like there was an error somewhere'
      });
    });
  });
};