try {
  // getting the updated coverage numbers and putting them in the package.json as thresholds if they are higher

  const { writeFileSync } = require('fs');

  const coverageSummary = require('../coverage/coverage-summary.json');
  const packageJson = require('../package.json');

  for (const key in packageJson.jest.coverageThreshold.global) {
    packageJson.jest.coverageThreshold.global[key] = Math.max(
      coverageSummary.total[key].pct,
      packageJson.jest.coverageThreshold.global[key]
    );
  }
  writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + '\n');
} catch (e) {
  console.log(e);
}
