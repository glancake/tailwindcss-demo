import fs from 'fs'

function addCommasToLines(filePath) {
  // 读取文件内容
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // 将文本按行分割成数组
  const lines = fileContent.split('\n');

  // 遍历每一行,并在最后添加英文逗号
  const modifiedLines = lines.map(line => {
    if (line.trim() !== '') {
      return `${line},`;
    } else {
      return line;
    }
  });

  // 将修改后的行重新拼接成字符串
  const modifiedContent = modifiedLines.join('\n');

  // 将修改后的内容写回文件
  fs.writeFileSync(filePath, modifiedContent, 'utf8');
}

// 使用示例
addCommasToLines('./src/assets/sentence/sentence-10000.json');