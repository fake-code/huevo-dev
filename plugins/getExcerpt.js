const striptags = require('striptags');
function getExcerpt(post) {
    if (!post.hasOwnProperty('templateContent')) {
      console.warn(
        'Failed to extract excerpt: Document has no property "templateContent".'
      );
      return null;
    }
  
    const content = post.templateContent;
    const excerpt = content.match(/(<!--\sexcerpt\s-->)((.|\n)*?)\1/i);

    return excerpt ? striptags(excerpt[2]) : '';
}

module.exports = getExcerpt;
