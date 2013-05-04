/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */
var Hapi = require('hapi')

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

    request.reply.view('index', {
      title: '{%= name %}', message: 'Welcome to {%= name %}.', version: Hapi.utils.version()
    })
  }

  var aboutHandler = function (request) {

    request.reply.view('index', {
      title: '{%= name %}', message: 'About {%= name %}.', version: Hapi.utils.version()
    })
  }

  server.addRoute({ method: 'GET', path: '/', handler: rootHandler })
  server.addRoute({ method: 'GET', path: '/about', handler: aboutHandler })

}
