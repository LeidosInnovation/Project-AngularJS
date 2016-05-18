/*jslint node: true */
"use strict";

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bower: {
            install: {
                options: {
                    install: true,
                    copy: false,
                    targetDir: './libs',
                    cleanTargetDir: true
                }
            }
        },

        uglify: {
            dist: {
                files: [
                   // the files to concatenate
                   { src: '*.js',
                       // the location of the resulting JS file
                       dest: 'dist/<%= pkg.name %>.js'
                   },
                    {
                        src: '*.html',
                        // the location of the resulting JS file
                        dest: '/'
                    }
                   ],
                options: {
                    mangle: false
                }
            }
        },

       clean: {
            temp: {
                src: ['tmp']
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['*.js', '*.js'],
                dest: 'dist/app.js'
            }
        },

        jshint: {
            all: ['Gruntfile.js', 'app/*.js', 'app/**/*.js']
        },

        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 8080
                }
            }
        },

        watch: {
            dev: {
                files: ['Gruntfile.js', '*.js', '*.html'],
                tasks: ['jshint', 'karma:unit', 'html2js:dist', 'concat:dist', 'clean:temp'],
                options: {
                    atBegin: true
                }
            },
            min: {
                files: ['Gruntfile.js', '*.js', '*.html'],
                tasks: ['jshint', 'karma:unit', 'html2js:dist', 'concat:dist', 'clean:temp', 'uglify:dist'],
                options: {
                    atBegin: true
                }
            }
        },

        compress: {
            dist: {
                options: {
                    archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip'
                },
                files: [{
                    src: ['index.html'],
                    dest: '/'
                }, {
                    src: ['*.js'],
                    dest: 'dist/'
                }, {
                    src: ['assets/**'],
                    dest: 'assets/'
                }, {
                    src: ['libs/**'],
                    dest: 'libs/'
                }]
            }
        },

        karma: {
            options: {
                configFile: 'config/karma.conf.js'
            },
            unit: {
                singleRun: true
            },

            continuous: {
                singleRun: false,
                autoWatch: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('dev', ['bower', 'connect:server', 'watch:dev']);
    grunt.registerTask('test', ['bower', 'jshint', 'karma:continuous']);
    grunt.registerTask('minified', ['bower', 'connect:server', 'watch:min']);
    grunt.registerTask('package', ['bower', 'jshint', 'karma:unit', 'html2js:dist', 'concat:dist', 'uglify:dist',
      'clean:temp', 'compress:dist']);
};