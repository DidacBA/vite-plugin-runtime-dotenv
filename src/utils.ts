import { existsSync, mkdirSync } from 'fs';
import path from 'path';

export function ensureDirectoryExists(filePath: string) {
  const dirname = path.dirname(filePath);
  if (existsSync(dirname)) {
    return;
  }
  ensureDirectoryExists(dirname);
  mkdirSync(dirname);
}

export function trimBasePath(filename: string, base: string) {
  if (!base || base === '/') {
    return filename;
  }

  const basePath = `${path.resolve(base)}/`;
  if (filename.startsWith(basePath)) {
    return filename.slice(basePath.length - 1);
  }

  return filename;
}
