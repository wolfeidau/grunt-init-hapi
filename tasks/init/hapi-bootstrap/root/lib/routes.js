/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

// Serve the public folder with listing enabled
http.addRoute({
    method: 'GET',
    path: '/{path*}',
    handler: {
        directory: {
            path: './public/'
        }
    }
})
