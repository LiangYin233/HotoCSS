module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                expand: true,
                cwd: 'src/',
                src: 'hoto.js',
                dest: 'dist/',
                flatten: true,
                filter: 'isFile',
            },
        },
        watch: {
            files: ['src/**/*.scss', '**/*.html', 'src/**/*.js'],
            tasks: ['copy', 'sass', 'postcss', 'cssmin'],
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dist/hoto.css': 'src/hoto.scss'
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')(),
                    require('cssnano')()
                ]
            },
            dist: {
                src: 'dist/*.css'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist',
                    ext: '.min.css'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('@lodder/grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['copy', 'sass', 'postcss', 'cssmin']);

};