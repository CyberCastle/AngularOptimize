const zlib = require('zlib');
const CompressionPlugin = require('compression-webpack-plugin');

// Webpack configuration to optimize angular build size
module.exports = {
    plugins: [
        new CompressionPlugin({
            filename: '[path][base].br',
            // Use brotli compression algorithm: https://github.com/google/brotli
            algorithm: 'brotliCompress',
            test: /\.(js|css|html|svg|eot|woff2|woff|ttf)$/,
            compressionOptions: {
                params: {
                    // For more options, check https://nodejs.org/api/zlib.html#zlib_class_brotlioptions
                    [zlib.constants.BROTLI_PARAM_QUALITY]: 11
                }
            },
            threshold: 0,
            minRatio: Infinity,
            // We only keep the .br assets
            // deleteOriginalAssets: true
            deleteOriginalAssets: false
        })
    ]
};
