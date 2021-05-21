// see：https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/v1/packages/reading-time

// 匹配所有的英文单词
const getWords = (data) =>
  data.match(/[\w\d\s\u00C0-\u024F]+/giu) || [];

// 匹配中文
const getChinese = (data) =>
  data.match(/[\u4E00-\u9FA5]/gu) || [];


const getWordNumber = (data) =>
  getWords(data).reduce(
    (accumulator, word) =>
      accumulator + (word.trim() === "" ? 0 : word.trim().split(/\s+/u).length),
    0
  ) + getChinese(data).length;

// data -> 插件函数上下文提供的页面的元数据
// wordsPerMinute 配置项 每分钟读取多少字 默认是300
const readingTime = (
  data,
  wordsPerMinute = 300
) => {
  debugger
  const words = getWordNumber(data || "");

  return {
    minutes: Math.round(words / wordsPerMinute ),
    words,
  };
};

module.exports = readingTime
