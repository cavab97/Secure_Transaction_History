module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-react'],
  plugins: ['react-native-reanimated/plugin'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
