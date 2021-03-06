/*
 * hapi-bootstrap
 *
 * Copyright (c) 2012 Mark Wolfe
 * Licensed under the MIT license.
 * https://github.com/wolfeidau/hapi-bootstrap/blob/master/LICENSE-MIT
 */

// Basic template description.
exports.description = 'Create a hapi Node.js application, including mocha, chai and sinon for testing.'

// Template-specific notes to be displayed before question prompts.
exports.notes = '_Project name_ shouldn\'t contain "node" or "js" and should ' +
    'be a unique ID not already in use at search.npmjs.org.'

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*'


// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    init.prompt('node_version'),
    init.prompt('main'),
    init.prompt('npm_test', 'grunt test')
  ], function(err, props) {
    props.keywords = []

    // specify the project dependencies.
    props.dependencies = {
      "hapi": "git://github.com/wolfeidau/hapi.git#fixes_for_jade_views",
      "jade": "~0.30.0"
    }

    props.devDependencies = {
      'grunt-contrib-concat': '~0.1.2',
      'grunt-contrib-uglify': '~0.1.1',
      'grunt-contrib-jshint': '~0.1.1',
      'grunt-contrib-watch': '~0.2.0',
      'mocha': '~1.9.0',
      'chai': '~1.6.0',
      'sinon': '~1.6.0',
      'grunt-bower-task': "~0.2.2",
      'grunt-cafe-mocha': '~0.1.3'
    }

    // Files to copy (and process).
    var files = init.filesToCopy(props)

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses)

    // Actually copy (and process) files.
    init.copyAndProcess(files, props)

    // Generate package.json file.
    init.writePackageJSON('package.json', props)

    // All done!
    done()
  })

}