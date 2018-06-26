module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 5,
                title: '<%= pkg.name %>'
            }
        },
        less: {
            default: {
                options: {
                    ieCompat: true,
                    optimization: 2,
                    compress: true,
                    yuicompress: false,
                },
                files: {
                    "dist/css/bootstrap.css": "less/bootstrap.less"
                }
            }
        },
        watch: {
            less: {
                options: {
                    spawn: false
                },
                files: [
                    "less/bootstrap.less"
                ],
                tasks: ['newer:less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-notify');

    grunt.task.run('notify_hooks');
    grunt.registerTask('default', ['watch']);

};
