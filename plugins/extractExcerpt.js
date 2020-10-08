const striptags = require('striptags');

function extractExcerpt(post) {
    if (!post.hasOwnProperty('templateContent')) {
      console.warn(
        'Failed to extract excerpt: Document has no property "templateContent".'
      );
      return null;
    }
  
    let excerpt = null;
    const content = post.templateContent;
  
    excerpt = striptags(content)
      .substring(0, 200) // Cap at 200 characters
      .replace(/^\\s+|\\s+$|\\s+(?=\\s)/g, '')
      .trim()
      .concat('...');
    return excerpt;
}

module.exports = extractExcerpt;
