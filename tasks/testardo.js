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
    return Object.keys(customOptions).map(function(key) {
      return '--' + key + '=' + customOptions[key];
    });
  };

  grunt.registerMultiTask('testardo', 'Testing the files with testardo', function() {
    var done = this.async(),
      files = this.filesSrc,
      // get the options
      options = buildOptions(this.data.options),
      process;

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

    // check the files
    if (!files.length) {
      grunt.fail.fatal({
        message: 'Testardo has received no files to test. Check again your paths'
      });
    }

    // trigger the testardo shell command
    process = grunt.util.spawn({
      cmd: __dirname + '/../node_modules/.bin/testardo',
      args: options.concat(files)
    });

    process.stdout.on('data', function(data) {
      // testardo was not able to trigger the tests
      if (/testardo/gi.test(data)) {
        grunt.log.write(data);
        done(false);
      } else {
        grunt.log.subhead('Please connect your device to following url to run the tests:');
        grunt.log.oklns(String(data).replace(/([a-z]{2}[0-9]:)/, ''));
      }
    });
    // listen all the testardo errors
    process.stderr.on('data', function(data) {
      grunt.log.errorlns(data);
      grunt.fail.fatal({
        message: 'Damn it! It looks like there was an error somewhere'
      });
    });
  });
};