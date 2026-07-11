import { defineConfig, devices } from '@playwright/test';
import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Use the environment's preinstalled Chromium (do NOT run `playwright install`).
 * Falls back to Playwright's own browser if none is found locally.
 */
function findChromium(): string | undefined {
  const root = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  if (!existsSync(root)) return undefined;
  const candidates = ['chrome-linux/chrome', 'chrome-linux/headless_shell'];
  try {
    for (const dir of readdirSync(root)) {
      if (!dir.toLowerCase().startsWith('chromium')) continue;
      for (const rel of candidates) {
        const full = join(root, dir, rel);
        if (existsSync(full)) return full;
      }
    }
    // Some images expose the binary directly at the root.
    for (const rel of ['chromium', ...candidates]) {
      const full = join(root, rel);
      if (existsSync(full)) return full;
    }
  } catch {
    /* ignore */
  }
  return undefined;
}

const executablePath = findChromium();

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:3000',
  },
  webServer: {
    // Requires a prior `npm run build` (CI and the playbook-import skill run
    // `npm run build && npm run test:a11y`).
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: executablePath ? { executablePath } : {},
      },
    },
  ],
});
