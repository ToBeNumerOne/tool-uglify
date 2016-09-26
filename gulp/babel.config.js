const config = {
    presets:[
        'es2015-ie',
        'react',
        'stage-0'
    ],
    plugins: [
        'transform-class-properties',
        'add-module-exports',
        'transform-decorators-legacy'
    ],
    compact: true
};
module.exports = config;