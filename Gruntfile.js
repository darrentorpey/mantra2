module.exports = function(grunt) {
  'use strict';

  var ROOT_PATH = '';

  // Project configuration.
  grunt.initConfig({
    // We only want to bother linting the Gruntfile itself and first-party JS (not libraries)
    jshint: {
      all: [
        ROOT_PATH + 'app/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Define what should be rebuilt for the watch task
    watch: {
      scripts: {
        files: ['<%= jshint.all %>', '.jshintrc'],
        tasks: ['jshint', 'karma:unit:run'],
        options: {
          interrupt: true
        }
      }

    },

    karma: {
      unit: {
        configFile: ROOT_PATH + 'config/karma.conf.js',
        background: true
      },
      continuous: {
        configFile: ROOT_PATH + 'config/karma.conf.js',
        singleRun: true
      }
    },

    'http-server': {
        'dev': {
            // the server root directory
            root: 'demos/hello/index.html',

            port: 8282,
            // port: function() { return 8282; }

            host: "127.0.0.1",

            showDir : true,
            autoIndex: true,

            // server default file extension
            ext: "html",

            // run in parallel with other tasks
            runInBackground: false
        }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-http-server');

  // By default, lint
  grunt.registerTask('default', ['jshint', 'karma:continuous']);
  grunt.registerTask('watch-tests', ['karma:unit', 'watch']);
};

