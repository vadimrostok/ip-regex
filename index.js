'use strict';

const v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';

const v6seg = '[0-9a-fA-F]{1,4}';
const v6 = ('\n(\n(?:' + v6seg + ':){7}(?:' + v6seg + '|:)|(?:' + v6seg + ':){6}(?:' + v4 + '|:' + v6seg + '|:)|(?:' + v6seg + ':){5}(?::' + v4 + '|(:' + v6seg + '){1,2}|:)|(?:' + v6seg + ':){4}(?:(:' + v6seg + '){0,1}:' + v4 + '|(:' + v6seg + '){1,3}|:)|(?:' + v6seg + ':){3}(?:(:' + v6seg + '){0,2}:' + v4 + '|(:' + v6seg + '){1,4}|:)|(?:' + v6seg + ':){2}(?:(:' + v6seg + '){0,3}:' + v4 + '|(:' + v6seg + '){1,5}|:)|(?:' + v6seg + ':){1}(?:(:' + v6seg + '){0,4}:' + v4 + '|(:' + v6seg + '){1,6}|:)|(?::((?::' + v6seg + '){0,5}:' + v4 + '|(?::' + v6seg + '){1,7}|:)))(%[0-9a-zA-Z]{1,})?').replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim();

const ip = function (opts) { return opts && opts.exact ? new RegExp('(?:^' + v4 + '$)|(?:^' + v6 + '$)') : new RegExp('(?:' + v4 + ')|(?:' + v6 + ')', 'g'); };

ip.v4 = function (opts) { return opts && opts.exact? new RegExp('^' + v4 + '$') : new RegExp(v4, 'g'); };
ip.v6 = function (opts) { return opts && opts.exact? new RegExp('^' + v6 + '$') : new RegExp(v6, 'g'); };

module.exports = ip;
