const path = require("path")
const root = path.resolve(__dirname)

const settings = {
  api_version: "49.0",
  repository : {
    remote : "https://github.com/sfdc-ea-pmm/sfdc-ea-demo-templates.git",
    branches : {
      master : "master",
      beta : "beta"
    },
    template_path : "/force-app/main/default/waveTemplates",
    static_path : "/force-app/main/default/staticresources"
  },
  local : {
    all : root + "/staging",
    staging : root + "/staging/temp",
    beta : root + "/staging/beta",
    master : root + "/staging/master",
    static : root + "/staging/static"
  },
  bucket : {
    name: "ac-template-repo",
    folders : {
      beta : "beta/",
      master : "master/",
      manifest: "manifest/"
    }
  }
}

module.exports = settings
