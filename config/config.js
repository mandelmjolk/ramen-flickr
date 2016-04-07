var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'flickrapp'
    },
    port: 3000,
    db: 'sqlite://localhost/flickrapp-development',
    storage: rootPath + '/data/flickrapp-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'flickrapp'
    },
    port: 3000,
    db: 'sqlite://localhost/flickrapp-test',
    storage: rootPath + '/data/flickrapp-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'flickrapp'
    },
    port: 3000,
    db: 'sqlite://localhost/flickrapp-production',
    storage: rootPath + 'data/flickrapp-production'
  }
};

module.exports = config[env];
