const childProcess = require("child_process")
const path = require("path")

const apps = {
 base: path.resolve(__dirname, './projects/base'),
 base1: path.resolve(__dirname, './projects/base1'),
 main_pro: path.resolve(__dirname, './projects/main_pro'),
}

function run_apps() {
 Object.values(apps).forEach(path => {
  childProcess.spawn(`cd ${path} && pnpm run dev`, {stdio: 'inherit', shell: true})
 })
}

run_apps()