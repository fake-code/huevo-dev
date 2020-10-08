const dayjs = require('dayjs');
require('dayjs/locale/ru');

dayjs.locale('ru');

function readableDate(post) {
    if (!post.hasOwnProperty('date')) {
      console.warn(
        'Failed to extract excerpt: Document has no property "date".'
      );
      return null;
    }

    return dayjs(post.date).format('MMMM D, YYYY');
}

module.exports = readableDate;
