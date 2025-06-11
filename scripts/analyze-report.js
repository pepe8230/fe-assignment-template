const fs = require("fs");

function analyzeReport() {
  const report = JSON.parse(fs.readFileSync("report.json", "utf-8"));

  // 테스트 통계 가져오기
  const totalTests = report.numTotalTests || 0;
  const passedTests = report.numPassedTests || 0;

  if (totalTests === 0) {
    console.log("테스트가 없습니다.");
    return;
  }

  const passPercent = ((passedTests / totalTests) * 100).toFixed(2);

  // 결과 문자열 생성
  const summary = `
테스트 결과 요약
총 테스트: ${totalTests}
통과 테스트: ${passedTests}
통과율: ${passPercent}%
`;

  console.log(summary);

  // summary.txt 파일로 저장
  fs.writeFileSync("summary.txt", summary);
}

analyzeReport();
