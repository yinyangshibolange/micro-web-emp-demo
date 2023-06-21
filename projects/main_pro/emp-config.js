const {defineConfig} = require('@efox/emp')
const plugin_vue = require('@efox/plugin-vue-2')
module.exports = defineConfig({
  plugins: [plugin_vue],
  html: {title: 'EMP Vue2 project'},
  server: {port: 9002},
  appEntry: 'main.js',
  externals: [{module: 'vue', global: 'Vue', entry: 'https://cdn.bootcss.com/vue/2.7.14/vue.min.js'}],
  async moduleFederation() {
    return {
      name: 'vue2Project',
      remotes: {
        '@v2b': 'vue2Base@http://localhost:9000/emp.js',
        '@v2b1': 'vue2Base1@http://localhost:9001/emp.js',
      },
      shared: ['vue/dist/vue.esm.js'],
    }
  },
})
