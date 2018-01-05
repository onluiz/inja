const ManageComponents = {
  install(Vue, opts = {}) {
      if (this.installed) return

      this.installed = true

      if (opts.components) {
          Object.keys(opts.components).forEach(key => {
              const c = opts.components[key]
              Vue.use(c)
          })
      }
  }
}

export default ManageComponents