#!/usr/bin/env node
var path = require("path"),
    cli  = require("./pbjs.js");
var ret  = cli.main(process.argv.slice(2));
if (typeof ret === 'number')
    process.exit(ret);
