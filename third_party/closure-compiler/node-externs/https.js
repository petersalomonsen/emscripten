/*
 * Copyright 2012 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Definitions for node's https module. Depends on the tls module.
 * @see http://nodejs.org/api/https.html
 * @see https://github.com/joyent/node/blob/master/lib/https.js
 * @externs
 */

/**
BEGIN_NODE_INCLUDE
var https = require('https');
END_NODE_INCLUDE
 */

var https = {};

/**
 * @constructor
 * @extends tls.Server
 */
https.Server = function() {};

/**
 * @param {...*} var_args
 */
https.Server.prototype.listen = function(var_args) {};

/**
 * @param {function()=} callback
 */
https.Server.prototype.close = function(callback) {};

/**
 * @param {tls.CreateOptions} options
 * @param {function(http.IncomingMessage, http.ServerResponse)=} requestListener
 */
https.createServer = function(options, requestListener) {};

/**
 * @typedef {{host: ?string, hostname: ?string, port: ?number, method: ?string, path: ?string, headers: ?Object.<string,string>, auth: ?string, agent: ?(https.Agent|boolean), pfx: ?(string|buffer.Buffer), key: ?(string|buffer.Buffer), passphrase: ?string, cert: ?(string|buffer.Buffer), ca: ?Array.<string>, ciphers: ?string, rejectUnauthorized: ?boolean}}
 */
https.ConnectOptions;

/**
 * @param {https.ConnectOptions|string} options
 * @param {function(http.IncomingMessage)} callback
 * @return {http.ClientRequest}
 */
https.request = function(options, callback) {};

/**
 * @param {https.ConnectOptions|string} options
 * @param {function(http.IncomingMessage)} callback
 * @return {http.ClientRequest}
 */
https.get = function(options, callback) {};

/**
 * @constructor
 * @extends http.Agent
 */
https.Agent = function() {};

/**
 * @type {https.Agent}
 */
https.globalAgent;
