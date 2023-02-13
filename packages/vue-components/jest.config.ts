module.exports = {
  displayName: 'vue-components',
  preset: '../../jest.preset.js',
  transform: {
    '^.+.vue$': '@vue/vue3-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/packages/vue-components',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'packages/vue-components/tsconfig.spec.json',
    },
    'vue-jest': {
      tsConfig: 'packages/vue-components/tsconfig.spec.json',
    },
  },
};
