const fs = require("fs");
const path = require("path");

class CustomJSONReporter {
  constructor(globalConfig, options) {
    this._outputFile = options.outputFile || "report.json";
  }

  onRunComplete(contexts, results) {
    fs.writeFileSync(
      path.resolve(this._outputFile),
      JSON.stringify(results, null, 2)
    );
  }
}

module.exports = CustomJSONReporter;
