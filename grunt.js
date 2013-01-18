module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        lint: {
            files: ["grunt.js", "bin/hapi-bootstrap", "tasks/init/hapi-bootstrap.js"]
        },

        jshint: {
            options: {
                asi: true,
                curly: true,
                laxcomma: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                node: true,
                "strict": false
            },
            globals: {
                exports: true
            }
        }
    })

    // Default task.
    grunt.registerTask('default', 'lint')

}