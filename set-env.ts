const dotenv = require('dotenv');
const { writeFileSync, mkdirSync, existsSync } = require('fs');
const path = require('path');

dotenv.config();

const dirPath = './src/environments';
const targetPath = path.join(dirPath, 'environment.ts');

if (!existsSync(dirPath)) {
  mkdirSync(dirPath, { recursive: true });
}

const envFileContent = `
export const environment = {
  production: ${process.env['ENV'] == "PROD"},
  tmdbToken: "${process.env['TMDB_TOKEN']}"
};
`;

writeFileSync(targetPath, envFileContent);
console.log(`Wrote variables to ${targetPath}`);