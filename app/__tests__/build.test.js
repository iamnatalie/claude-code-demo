const { execSync } = require('child_process');
const path = require('path');

describe('Build', () => {
  test('npm run build completes successfully', () => {
    const appDir = path.resolve(__dirname, '..');
    expect(() => {
      execSync('npm run build', { cwd: appDir, stdio: 'pipe' });
    }).not.toThrow();
  });
});
