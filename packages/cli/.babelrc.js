module.exports = {
    presets: [
        '@babel/preset-typescript',
        ['@babel/preset-env', { targets: { node: '12' } }],
    ],
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                alias: {
                    '~': './src',
                },
            },
        ],
    ],
};
