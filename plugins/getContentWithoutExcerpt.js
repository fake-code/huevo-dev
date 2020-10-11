function getContentWithoutExcerpt(content) {
    return content.replace(/(<!--\sexcerpt\s-->)((.|\n)*?)\1/i, '');
}

module.exports = getContentWithoutExcerpt;
