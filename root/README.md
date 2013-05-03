# {%= name %}

{%= description %}

These project include:

* [hapi](https://github.com/walmartlabs/hapi)
* [twitter bootstrap](http://twitter.github.com/bootstrap/)
* [JQuery](http://jquery.com/)
* [bower](http://twitter.github.com/bower/)

## Getting Started

Once created you can set up your web application project by running the following commands.

* Firstly run npm to install modules.

```
npm install
```

* Run bower to install UI dependencies.

```
bower install
```

* Start the application.

```
node app.js
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

## Release History
_(Nothing yet)_

## License
Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.