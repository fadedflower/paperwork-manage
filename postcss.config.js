module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 750,
      selectorBlackList: ['van', 'login-form-icon', '.nav-bar-dummy', '.layout-view', '.layout-view-plain']
    }
  }
}
