module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            files: ['css/src/*.css'],
            tasks: ['default'],
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
        }
    });
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['postcss:dist']);
};