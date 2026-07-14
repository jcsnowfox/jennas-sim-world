import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
const exe =
  process.platform === 'win32'
    ? 'release/win-unpacked/Somewhere Ours Private City.exe'
    : 'release/linux-unpacked/somewhere-ours-private-city';
if (!existsSync(exe)) throw new Error(`Packaged app not found: ${exe}`);
const child = spawn(exe, ['--smoke-test'], { stdio: 'inherit' });
child.on('exit', (code) => process.exit(code ?? 1));
