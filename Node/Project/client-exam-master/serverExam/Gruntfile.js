module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        nodemon: {
            dev: { script: 'index.js' }
        },

        env: {
            dev: {
                NODE_ENV: 'development'
            },
            production: {
                NODE_ENV: 'production'
            }
        },

        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                esversion: 6
            },
            all: ['Grunfile.js', 'config/*.js']
        }

    });

    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-contrib-nodemon');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', [
        'env:dev',
        'jshint',
        'nodemon'
    ]);

    grunt.registerTask('production', [
        'env:production',
        'jshint',
        'nodemon'
    ]);

};  