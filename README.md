<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# itermsumabs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a moving sum of absolute values.

<section class="intro">

For a window of size `W`, the moving sum of absolute values is defined as

<!-- <equation class="equation" label="eq:moving_sum_absolute_values" align="center" raw="s = \sum_{i=0}^{W-1} |x_i|" alt="Equation for the moving sum of absolute values."> -->

<div class="equation" align="center" data-raw-text="s = \sum_{i=0}^{W-1} |x_i|" data-equation="eq:moving_sum_absolute_values">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@25402c4af9b25d4b28de2a51aadd864130fb6d8a/lib/node_modules/@stdlib/stats/iter/msumabs/docs/img/equation_moving_sum_absolute_values.svg" alt="Equation for the moving sum of absolute values.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-iter-msumabs
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var itermsumabs = require( '@stdlib/stats-iter-msumabs' );
```

#### itermsumabs( iterator, W )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a moving sum of absolute values. The `W` parameter defines the number of iterated values over which to compute the moving sum.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0, -7.0, -5.0 ] );
var it = itermsumabs( arr, 3 );

// Fill the window...
var s = it.next().value; // [2.0]
// returns 2.0

s = it.next().value; // [2.0, 1.0]
// returns 3.0

s = it.next().value; // [2.0, 1.0, 3.0]
// returns 6.0

// Window begins sliding...
s = it.next().value; // [1.0, 3.0, -7.0]
// returns 11.0

s = it.next().value; // [3.0, -7.0, -5.0]
// returns 15.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the function returns `NaN` for **at least** `W-1` future invocations. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all previously iterated values.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var runif = require( '@stdlib/random-iter-uniform' );
var itermsumabs = require( '@stdlib/stats-iter-msumabs' );

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a moving sum of absolute values:
var it = itermsumabs( rand, 3 );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( typeof v.value === 'number' ) {
        console.log( 'sumabs: %d', v.value );
    }
    if ( v.done ) {
        break;
    }
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/iter/mmeanabs`][@stdlib/stats/iter/mmeanabs]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving arithmetic mean of absolute values.</span>
-   <span class="package-name">[`@stdlib/stats/iter/msum`][@stdlib/stats/iter/msum]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving sum.</span>
-   <span class="package-name">[`@stdlib/stats/iter/sum`][@stdlib/stats/iter/sum]</span><span class="delimiter">: </span><span class="description">compute the sum of all iterated values.</span>
-   <span class="package-name">[`@stdlib/stats/iter/sumabs`][@stdlib/stats/iter/sumabs]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values for all iterated values.</span>

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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-iter-msumabs.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-iter-msumabs

[test-image]: https://github.com/stdlib-js/stats-iter-msumabs/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-iter-msumabs/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-iter-msumabs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-iter-msumabs?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-iter-msumabs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-iter-msumabs/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-iter-msumabs/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-iter-msumabs/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-iter-msumabs/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-iter-msumabs/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/stats/iter/mmeanabs]: https://github.com/stdlib-js/stats-iter-mmeanabs

[@stdlib/stats/iter/msum]: https://github.com/stdlib-js/stats-iter-msum

[@stdlib/stats/iter/sum]: https://github.com/stdlib-js/stats-iter-sum

[@stdlib/stats/iter/sumabs]: https://github.com/stdlib-js/stats-iter-sumabs

<!-- </related-links> -->

</section>

<!-- /.links -->
