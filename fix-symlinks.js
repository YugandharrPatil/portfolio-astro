import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

try {
  const sourceDir = path.resolve(__dirname, 'src/tslib-vendor');
  const targetDir = path.resolve(__dirname, 'node_modules/tslib');

  console.log('Fixing tslib symlinks with local vendored copy...');
  console.log(`Source: ${sourceDir}`);
  console.log(`Target: ${targetDir}`);

  if (!fs.existsSync(sourceDir)) {
    console.error('Error: src/tslib-vendor does not exist!');
    process.exit(1);
  }

  // Remove existing target (symlink or dir) safely
  let exists = false;
  try {
    fs.lstatSync(targetDir);
    exists = true;
  } catch (e) {
    // Target does not exist (not even a broken symlink)
  }

  if (exists) {
    console.log('Removing existing tslib directory or symlink...');
    fs.rmSync(targetDir, { recursive: true, force: true });
  }

  // Copy tslib-vendor recursively to node_modules/tslib
  fs.cpSync(sourceDir, targetDir, { recursive: true });
  console.log('Successfully copied local tslib-vendor to node_modules/tslib!');
} catch (error) {
  console.error('Failed to fix tslib symlinks:', error);
  process.exit(1);
}
