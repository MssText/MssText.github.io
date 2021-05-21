const readingTime = require('./read-time')

const readingTimePlugin = (options, context) => {
  return {
    name: "reading-time",
    extendPageData($page){
      $page.readingTime = readingTime(
        $page._strippedContent,
        options.wordsPerMinute || context.themeConfig.wordsPerMinute || 300
      );
    },
  };
};

module.exports = readingTimePlugin;
