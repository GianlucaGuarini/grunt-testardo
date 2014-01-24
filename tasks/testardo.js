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

    console.log();

    // trigger the testardo shell command
    process = spawn(__dirname + '/../node_modules/.bin/testardo', options.concat(files), done);

    process.stdout.on('data', function(data) {
      console.log('stdout:' + data);
    });

    process.stderr.on('data', function(data) {
      console.log('stderr:' + data);
    });

    process.stdin.on('data', function(data) {
      console.log('stdin:' + data);
    });
  });
};