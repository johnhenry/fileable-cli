import babel from 'rollup-plugin-babel';
import hashbang from 'rollup-plugin-hashbang';
import json from 'rollup-plugin-json';
const plugins = [
    babel({
        exclude: 'node_modules/**',
        extensions: ['.ts'],
        babelrc:false,
        presets: [['@babel/preset-env', {
            "useBuiltIns": "usage"
        }], '@babel/preset-react', '@babel/preset-typescript']
    })
];

export default [{
    file: 'dist/fileable-cli.js',
    input: 'src/index.ts',
    plugins: [...plugins, hashbang(), json()]
}].map(({
            file,
            format = 'cjs',
            input,
            plugins: plugins
        }) => ({
        input,
        plugins,
        output: {file, format}
}));
