module.exports = function(grunt) {
  'use strict';

  var ROOT_PATH = '';

  // Project configuration.
  grunt.initConfig({
    // We only want to bother linting the Gruntfile itself and first-party JS (not libraries)
    jshint: {
      all: [
        ROOT_PATH + 'src/*.js'
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
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');

  // By default, lint
  grunt.registerTask('default', ['jshint', 'karma:continuous']);
  grunt.registerTask('watch-tests', ['karma:unit', 'watch']);
};

