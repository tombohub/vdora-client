/**
 * Tailwind installation and setup script
 *
 * STEPS:
 * Install tailwindcss
 * create src/assets/css folder to hold main.css and tailwind.css
 * initialize full tailwind configuration file
 * insert new package.json scripts commands
 * insert paths for Taiwind purge option
 */

const { execSync } = require("child_process");
const fs = require("fs");

/* ------------------------------ Configuration ----------------------------- */

// directory to keep the css files
const cssDirectory = "src/assets/css";

// main css file which it needs to be imported inside index.js
const mainCssFile = cssDirectory + "/main.css";

// tailwind css holding the tailwind directives
const tailwindCssFile = cssDirectory + "/tailwind.css";

// tailwind directives
const tailwindCssStartData = `@tailwind base; 
@tailwind components; 
@tailwind utilities;`;

// scripts commands to insert into package.json
const tailwindScripts = {
  "build:tailwind": `tailwindcss build ${tailwindCssFile} -o ${mainCssFile}`,
  prestart: "npm run build:tailwind",
  prebuild: "NODE_ENV=production npm run build:tailwind",
};

// paths to include in Tailwind purge option
const tailwindPurgePaths = ["./src/**/*.jsx"];

/* ------------------------------ Installation ------------------------------ */

// execSync("npm install tailwindcss");
// execSync("npx tailwindcss init --full");

// fs.mkdirSync(cssDirectory, { recursive: true });

// fs.writeFileSync(tailwindCssFile, tailwindCssStartData);

// const packageConfig = JSON.parse(
//   fs.readFileSync("package.json", "utf8")
// );

// packageConfig.scripts = Object.assign(
//   tailwindScripts,
//   packageConfig.scripts
// );

// fs.writeFileSync(
//   "package.json",
//   JSON.stringify(packageConfig, null, 2)
// );

async function addPurge() {
  const tailwindConfig = await require("./tailwind.config");
  tailwindConfig.purge = await tailwindPurgePaths;
  const newTailwindConfig = await `module.exports = {
        ${JSON.stringify(tailwindConfig, null, 2)}
    }`;
  await console.log("new", newTailwindConfig);
}
