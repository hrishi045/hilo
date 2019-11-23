Hilo
====
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/erikroyall/hilo?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Build Status](https://travis-ci.org/erikroyall/hilo.svg?branch=master)](https://travis-ci.org/erikroyall/hilo)
[![Code Climate](https://codeclimate.com/github/erikroyall/hilo/badges/gpa.svg)](https://codeclimate.com/github/erikroyall/hilo)

_0.1.0 pre dev beta_ - **0.1.0-pre-dev-beta-10**

Hilo is a JavaScript library that provides utility functions that solve common tasks.

## Features

- DOM Manipulation
- Feature & Browser Detection
- Events
- AJAX
- FX
- Testing

## Usage

**Note: Hilo is currently under development. Even a public beta version has not yet released. The current version is _0.1.0-pre-dev-beta-10_ .**

Add Hilo in the `<head>` or `<body>` section of your page.

```html
<head>
  ...
  <script type="text/javascript" src="hilo.js"></script>
</head>
    ...
```

Create another `<script>` and write Hilo code there.

```html
<script>
  Hilo(function () {
    Hilo('div').click(function () {
      Hilo(this).toggle();
    });
  });
</script>
```

## About Hilo

### License

Copyright (c) 2013 **Erik Royall**

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
