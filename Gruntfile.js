module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            A: {
                files: ['css/src/*.css'],
                tasks: ['default']
            },
            B: {
                files: ['js/src/main-pre.js'],
                tasks: ['uglify']
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'css/src/main.css',
                dest: 'css/main.css'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/main.js': ['js/src/main-pre.js']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['postcss:dist']);
};