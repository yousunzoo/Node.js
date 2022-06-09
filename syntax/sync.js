var fs = require('fs');

// readFilySync
/*
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8')
console.log(result);
console.log('C');
*/

console.log('A');

// 불러올 파일은 상위 폴더 기준으로 경로 설정
// utf8 처리해줘야 txt 파일 읽을 수 있음
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
  console.log(result);
});

console.log('C');
