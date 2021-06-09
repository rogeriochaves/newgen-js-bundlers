// watch.js
const esbuild = require("esbuild");
const servor = require("servor");

esbuild.build({
  // pass any options to esbuild here...
  entryPoints: ["src/app.jsx"],
  outdir: "dist",
  bundle: true,
  watch: true,
});

async function serve() {
  console.log("running server from: http://localhost:8080/");
  await servor({
    // pass any options to servor here...
    // browser: true,
    root: "dist",
    port: 8080,
  });
}

serve();
