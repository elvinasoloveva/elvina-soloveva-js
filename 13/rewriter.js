const fs = require("fs");
const file = process.argv[2];

if (!file) {
  console.log("Использование: node rewriter.js <file.txt>");
  process.exit(1);
}

console.log("Текущее содержимое файла:\n");
console.log(fs.readFileSync(file, "utf8"));
console.log("\nВведите новый текст (завершите Ctrl+D или Ctrl+Z+Enter):");

let input = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => (input += chunk));

process.stdin.on("end", () => {
  fs.writeFileSync(file, input, "utf8");
  console.log("\nФайл полностью перезаписан.");
});
