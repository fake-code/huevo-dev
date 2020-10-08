const extractExcerpt = require('./plugins/extractExcerpt');
const readableDate = require('./plugins/readableDate');

module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy({ '_includes/assets': 'assets' });
    eleventyConfig.addShortcode('excerpt', (post) => extractExcerpt(post));
    eleventyConfig.addShortcode('readableDate', (post) => readableDate(post));
};