const vue2 = require('@efox/plugin-vue-2')
const {defineConfig} = require('@efox/emp')
const esm = (name, mode, version) =>
  `https://esm.sh/${name}${version ? '@' + version : ''}${mode === 'development' ? '?dev' : ''}`
module.exports = defineConfig(({mode, env}) => {
  // const target = 'es2018'
  const target = 'es5'
  const isESM = !['es3', 'es5'].includes(target)
  return {
    plugins: [vue2],
    appEntry: 'main.js',
    server: {port: 9001},
    html: {title: 'EMP Vue2 Base1'},
    build: {target},
    empShare: {
      name: 'vue2Base1',
      exposes: {
        './Content': './src/components/Content',
        './Table': './src/components/table',
        './CompositionApi': './src/components/CompositionApi',
        './App1': './src/App1', // 为什么改成了App1，引用发现导出的组件不能和其他组件同名，如果同名，会出现两个组件只加载一次的问题
        './Home1': "./src/views/home"
      },
      shareLib: !isESM
        ? {
            vue: 'Vue@https://cdn.bootcss.com/vue/2.7.14/vue.min.js',
            'element-ui': [
              'ELEMENT@https://unpkg.com/element-ui/lib/index.js',
              `https://unpkg.com/element-ui/lib/theme-chalk/index.css`,
            ],
          }
        : {
            vue: esm('vue'),
            'element-ui': esm('element-ui'),
          },
    },
  }
})
