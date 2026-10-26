
const fs = require("fs");
const ts = require("/opt/nvm/versions/node/v22.16.0/lib/node_modules/typescript/lib/typescript.js");
const file = process.argv[2];
const source = fs.readFileSync(file, "utf8");
const result = ts.transpileModule(source, {
  compilerOptions: {
    jsx: ts.JsxEmit.ReactJSX,
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext,
    strict: true,
  },
  fileName: file,
  reportDiagnostics: true,
});
const errors = (result.diagnostics || []).filter(d => d.category === ts.DiagnosticCategory.Error);
if (errors.length) {
  for (const d of errors) {
    const msg = ts.flattenDiagnosticMessageText(d.messageText, "\n");
    if (d.file && typeof d.start === "number") {
      const p = d.file.getLineAndCharacterOfPosition(d.start);
      console.log(`${p.line+1}:${p.character+1} ${msg}`);
    } else console.log(msg);
  }
  process.exit(1);
}
console.log("ProductsClient TSX syntax valid");
