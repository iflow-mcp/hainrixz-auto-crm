#!/usr/bin/env node
const { execSync } = require('child_process');

// Get the path to the project root
const projectRoot = __dirname;

try {
  // Run the TypeScript file using tsx
  execSync(`npx tsx "${projectRoot}/crm-server.ts"`, {
    stdio: 'inherit',
    cwd: projectRoot
  });
} catch (error) {
  process.exit(error.status || 1);
}