const getExcerpt = require('./plugins/getExcerpt');
const readableDate = require('./plugins/readableDate');
const getContentWithoutExcerpt = require('./plugins/getContentWithoutExcerpt');

module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy({ '_includes/assets': 'assets' });
    eleventyConfig.addShortcode('getExcerpt', (post) => getExcerpt(post));
    eleventyConfig.addShortcode('readableDate', (post) => readableDate(post));

    eleventyConfig.addFilter('getContentWithoutExcerpt', (content) => getContentWithoutExcerpt(content));
};