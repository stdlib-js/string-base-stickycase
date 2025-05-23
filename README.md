<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# stickycase

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a string to sticky case.

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/string-base-stickycase
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var stickycase = require( '@stdlib/string-base-stickycase' );
```

#### stickycase( str\[, p] )

Converts a string to sticky case, where each character in the input string is randomly converted to either uppercase or lowercase.

```javascript
var str = 'hello world';
var out = stickycase( 'hello world' );
// returns <string>
```

By default, the probability for any character to be capitalized is `0.5`. To set a different probability, provide a `p` argument.

```javascript
var str = 'welcome!';
var out = stickycase( 'welcome!', 0.2 );
// returns <string>

str = 'good morning';
out = stickycase( 'good morning', 0.8 );
// returns <string>
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var stickycase = require( '@stdlib/string-base-stickycase' );

var str = 'Hello World!';
var out = stickycase( str );
// returns <string>
// returns <string>

str = 'I am a tiny little teapot';
out = stickycase( str );
// returns <string>

str = 'with big problems';
out = stickycase( str, 0.1 );
// returns <string>

str = 'To be, or not to be: that is the question.';
out = stickycase( str, 0.9 );
// returns <string>

str = 'isMobile';
out = stickycase( str );
// returns <string>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string-base/camelcase`][@stdlib/string/base/camelcase]</span><span class="delimiter">: </span><span class="description">convert a string to camel case.</span>
-   <span class="package-name">[`@stdlib/string-base/lowercase`][@stdlib/string/base/lowercase]</span><span class="delimiter">: </span><span class="description">convert a string to lowercase.</span>
-   <span class="package-name">[`@stdlib/string-base/snakecase`][@stdlib/string/base/snakecase]</span><span class="delimiter">: </span><span class="description">convert a string to snake case.</span>
-   <span class="package-name">[`@stdlib/string-base/uppercase`][@stdlib/string/base/uppercase]</span><span class="delimiter">: </span><span class="description">convert a string to uppercase.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-base-stickycase.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-base-stickycase

[test-image]: https://github.com/stdlib-js/string-base-stickycase/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/string-base-stickycase/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-base-stickycase/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-base-stickycase?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-base-stickycase.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-base-stickycase/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-base-stickycase/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-base-stickycase/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-base-stickycase/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-base-stickycase/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-base-stickycase/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-base-stickycase/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-base-stickycase/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-base-stickycase/main/LICENSE

<!-- <related-links> -->

[@stdlib/string/base/camelcase]: https://github.com/stdlib-js/string-base-camelcase

[@stdlib/string/base/lowercase]: https://github.com/stdlib-js/string-base-lowercase

[@stdlib/string/base/snakecase]: https://github.com/stdlib-js/string-base-snakecase

[@stdlib/string/base/uppercase]: https://github.com/stdlib-js/string-base-uppercase

<!-- </related-links> -->

</section>

<!-- /.links -->
