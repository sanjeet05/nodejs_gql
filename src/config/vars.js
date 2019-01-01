const env = process.env.NODE_ENV || 'development';

const development = {
  env,  
  port: process.env.PORT || 3100,
  mongo: {
    uri: 'mongodb://localhost:27017/graphql_dev',
  },
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
};


const production = {
  env,
  port: process.env.PORT || 3100,
  mongo: {
    uri: 'mongodb://localhost:27017/graphql_stage',
  },
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
};

const config = {
  development,
  production,
};

module.exports = config[env];