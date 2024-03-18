const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = mergeConfig(getDefaultConfig(__dirname), {
    watchFolders: [
        path.resolve(__dirname, '../core'),
      ],
      resolver: {
        extraNodeModules: new Proxy(
          {},
          {
            get: (target, name) => {
              if (target.hasOwnProperty(name)) {
                return target[name]
              }
              return path.join(process.cwd(), `node_modules/${name}`)
            },
          },
        ),
      },
});

module.exports = withNativeWind(config, { input: './src/global.css'})