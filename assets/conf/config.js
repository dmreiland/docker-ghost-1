// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
config;

config = {

  // ### Production
  // When running Ghost in the wild, use the production environment
  // Configure your URL and mail settings here
  production: {
    url: "http://my-ghost-blog.com",
    mail: {},
    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(__dirname, '/content/data/ghost.db')
      },
      debug: false
    },
    server: {
      host: '127.0.0.1',
      port: '2368'
    }
  }

};

// Export config
module.exports = config;
