/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

exports.configureRoutes = function (server) {

    // Serve the public folder with listing enabled
    server.addRoute({
        method: 'GET',
        path: '/{path*}',
        handler: {
            directory: {
                path: './public/'
            }
        }
    })

    var rootHandler = function (request) {

        request.reply.view('layout', {
            title: '{%= name %} | Hapi ' + Hapi.utils.version()
        }).send()
    }

    server.addRoute({ method: 'GET', path: '/', handler: rootHandler });
}
