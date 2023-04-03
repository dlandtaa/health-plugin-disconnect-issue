const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    outputDir: './cordova/www',
    publicPath: '.',
    transpileDependencies: true,
    configureWebpack: {
        devtool: 'source-map'
    }
});
