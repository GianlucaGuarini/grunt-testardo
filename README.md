# This plugin is under development it's not yet ready!

# grunt-testardo

> Grunt wrapper to [testardo](https://github.com/WebReflection/testardo)

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
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
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
    options: {
      'ip': '0.0.0.0',
      'port': 7357,
      'host': 'localhost',
      'mirror': 80,
      'timeout': 30000,
      'email': 'me@you.us',
      'loop': 1,
      'show': 1
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_


