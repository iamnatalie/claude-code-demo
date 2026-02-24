const { execSync } = require('child_process');
const path = require('path');

describe('Build', () => {
  test('npm run build completes without errors', () => {
    expect(() => {
      execSync('npm run build', { cwd: path.join(__dirname, '..') });
    }).not.toThrow();
  });
});
