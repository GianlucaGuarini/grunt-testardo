# grunt-testardo [![Build Status](https://travis-ci.org/GianlucaGuarini/grunt-testardo.png?branch=master)](https://travis-ci.org/GianlucaGuarini/grunt-testardo)

> grunt plugin to test your project using [testardo](https://github.com/WebReflection/testardo)

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-testardo --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-testardo');
```

## The "testardo" task

### Overview
In your project's Gruntfile, add a section named `testardo` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  testardo: {
    run: {
      options: {
        // Task-specific options go here.
      },
      your_target: {
        // Target-specific file lists and/or options go here.
      }
    }
  },
});
```

### Options

[testardo options](https://github.com/WebReflection/testardo/blob/master/src/server/how-to.js)

#### ip
the ip address to use. by default reachable through the network

#### port
which port should be used to run tests. i.e. http://0.0.0.0:7357/

#### host
the host name. it could be a remote address too

#### mirror
the port to mirror in the host. The usual/default webserver port

#### timeout
global test timeout in milliseconds

#### email
if specified, sends an email with errors/fixes notifications

#### loop
if 0 or false, it exists after first execution

#### show
if 1 or true, it shows all successful attempts


### Usage Examples


```js
grunt.initConfig({
  testardo: {
    run: {
      options: {
        'host': 'google.com',
        'loop': 0
      },
      files: {
        src: ['tests/*.js'],
      }
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

### v0.0.3
 - better error handling


