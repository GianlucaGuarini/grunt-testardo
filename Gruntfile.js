/*
 * grunt-testardo
 * https://github.com/gianlucaguarini/grunt-testardo
 *
 * Copyright (c) 2014 Gianluca Guarini
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        'tests/*.js',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Configuration to be run (and then tested).
    testardo: {
      run: {
        options: {
          // 'ip': '0.0.0.0',
          // 'port': 7357,
          'host': 'google.com',
          // 'mirror': 8888,
          // 'timeout': 30000,
          // 'email': 'me@you.us',
          'loop': 0,
          // 'show': 1
        },
        files: [{
          expand:true,
          cwd:'tests/',
          src:[
            '*.js'
          ]
        }],
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['jshint']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'testardo']);

};