# ip-regex [![Build Status](https://travis-ci.org/sindresorhus/ip-regex.svg?branch=master)](https://travis-ci.org/sindresorhus/ip-regex)

> Regular expression for matching IP addresses


## Install

```sh
$ npm install --save ip-regex
```


## Usage

```js
var ipRegex = require('ip-regex');

// contains an IP address
ipRegex().test('unicorn 192.168.0.1');
//=> true

// is an IP address
ipRegex({exact: true}).test('unicorn 192.168.0.1');
//=> false

ipRegex.v6({exact: true}).test('1:2:3:4:5:6:7:8');
//=> true

'unicorn 192.168.0.1 cake 1:2:3:4:5:6:7:8 rainbow'.match(ipRegex());
//=> ['192.168.0.1', '1:2:3:4:5:6:7:8']
```


## API

### isRegex(options)

Returns a regex for matching both IPv4 and IPv6.

### isRegex.v4(options)

Returns a regex for matching IPv4.

### isRegex.v6(options)

Returns a regex for matching IPv6.

#### options.exact

Type: `boolean`  
Default: `false` *(Matches any IP address in a string)*

Only match an exact string.  
Useful with `RegExp#test` to check if a string is an IP address.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
