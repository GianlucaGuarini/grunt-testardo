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

  /**
   * Build the options array
   * @param  { Object } customOptions options passed via grunt
   * @return { Array }
   */
  var buildOptions = function(customOptions) {
    var options = [];

    Object.keys(customOptions).forEach(function(key) {
      options.push('--' + key + '=' + customOptions[key]);
    }.bind(this));

    return options;
  };

  grunt.registerMultiTask('testardo', 'Testing the files with testardo', function() {
    var done = this.async(),
      files = this.filesSrc,
      options = buildOptions(this.data.options),
      process;
    // get the options

    // check the files
    files.filter(function(filepath) {
      // Remove nonexistent files (it's up to you to filter or warn here).
      if (!grunt.file.exists(filepath)) {
        grunt.log.warn('Source file "' + filepath + '" not found.');
        return false;
      } else {
        return true;
      }
    });
    // trigger the testardo shell command
    process = grunt.util.spawn( {
      cmd:__dirname + '/../node_modules/.bin/testardo',
      args:options.concat(files)
    });

    process.stdout.on('data', function(data) {
      grunt.log.subhead('Please connect your device to following url to run the tests:');
      grunt.log.oklns(String(data).replace(/([a-z]{2}[0-9]:)/,''));
    });
    // listen all the testardo errors
    process.stderr.on('data', function(data) {
      if (data.length){
        grunt.log.errorlns(data);
      }
      grunt.fail.fatal({
        message:'Damn it! It looks like there was an error somewhere'
      });
    });
  });
};