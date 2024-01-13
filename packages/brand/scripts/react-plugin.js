module.exports = {
  name: 'react',
  setup(build) {
    build.onResolve({filter: /^(react|react-dom)$/}, args => {
      return {
        path: args.path,
        namespace: 'react-ns'
      }
    })
    build.onLoad({filter: /^react$/}, () => {
      return {
        contents: 'module.exports = React'
      }
    })
    build.onLoad({filter: /^react-dom$/}, () => {
      return {
        contents: 'module.exports = ReactDOM'
      }
    })
  }
}
