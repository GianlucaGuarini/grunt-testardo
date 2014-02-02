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
      google: {
        options: {
          'host': 'google.com',
          'loop': 0,
        },
        files: [{
          expand: true,
          cwd: 'tests/',
          src: [
            'google-search.js'
          ]
        }]
      },
      // TODO: check the twitter bootsrap
      // this will come soon
      //
      twbs: {
        options: {
          'host': 'twbs.github.io',
          'https': true,
          'loop': 0,
        },
        files: [{
          expand: true,
          cwd: 'tests/',
          src: [
            'twitter-bootstrap.js'
          ]
        }]
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
  grunt.registerTask('default', ['jshint', 'testardo:google']);

};