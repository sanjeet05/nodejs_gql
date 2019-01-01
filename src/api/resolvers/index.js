const articleResolver = require('./article.resolver');

const rootResolver = {
  ...articleResolver
};

module.exports = rootResolver;