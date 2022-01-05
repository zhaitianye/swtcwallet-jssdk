var typescript = require('rollup-plugin-typescript2');

var pkg = require('../package.json');

var version = pkg.version;

var banner =
`/*!
 * ${pkg.name} ${version} (https://github.com/zhaitianye/swtcwallet-jssdk)
 * API https://github.com/zhaitianye/swtcwallet-jssdk/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} zhaitianye. All Rights Reserved
 * Licensed under MIT (https://github.com/zhaitianye/swtcwallet-jssdk/blob/master/LICENSE)
 */
`;

function getCompiler(opt) {
    opt = opt || {
        tsconfigOverride: { compilerOptions : { module: 'ES2015' } }
    }

    return typescript(opt);
}

exports.name = 'swtcwallet';
exports.banner = banner;
exports.getCompiler = getCompiler;
