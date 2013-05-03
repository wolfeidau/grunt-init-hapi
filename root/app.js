/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */
var Hapi = require('hapi')

// Create Hapi server
var server = Hapi.createServer('localhost', 8000)

server.views({
  engines: {
    jade: 'jade'
  },
  path: '/views'
})

require('./lib/routes').configureRoutes(server)

http.start()