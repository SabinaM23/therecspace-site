module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("images");
    
    return {
      dir: {
        input: ".",
        output: "_site"
      }
    };
  };
  