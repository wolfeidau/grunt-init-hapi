/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */
var Hapi = require('hapi')
    , Path = require('path')

// Configure views
var options = {
    views: {
        path: Path.join(__dirname, 'views'), engine: {
            module: 'jade', extension: 'jade'
        }
    }
}

// Create Hapi server
var server = Hapi.createServer('localhost', 8000, options)

require('./lib/routes').configureRoutes(server)

http.start()