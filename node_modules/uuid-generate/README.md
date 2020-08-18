# *uuid-generate*

[![npm](https://img.shields.io/npm/dt/uuid-generate.svg)](https://www.npmjs.com/package/uuid-generate)
[![license](https://img.shields.io/npm/l/uuid-generate.svg)](https://github.com/victorgianvechio/uuid-generate/blob/master/LICENSE)
[![NPM Version](https://badge.fury.io/js/uuid-generate.svg?style=flat)](https://npmjs.org/package/uuid-generate)
[![Build Status](https://travis-ci.org/victorgianvechio/uuid-generate.svg?branch=master)](https://travis-ci.org/victorgianvechio/uuid-generate)
[![Dependency Status](https://david-dm.org/victorgianvechio/uuid-generate.svg)](https://david-dm.org/victorgianvechio/uuid-generate)

Generate unique UUID like:

**ed9b9aede340-edc9ae-ed18ba-ed5b85-ed65f5ed25daed1425**

---

## Installation

via npm:

```sh
npm i -S uuid-generate
```

### Scripts

test generator output:

```sh
npm run generate
```

### Usage

```javascript
const UUID = require('uuid-generate')
let my_uuid = UUID.generate() // => a37d50a394a8-a3ea14-a34cf6-a34d5f-a3fbf8a311e7a36c30
```

## Changelog

See the update notes at [CHANGELOG](https://github.com/victorgianvechio/uuid-generate/blob/master/CHANGELOG.md).

## License

MIT License

Copyright ® 2019 Victor Gianvechio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
