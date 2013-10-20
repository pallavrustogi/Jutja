'use strict';

exports.port = process.env.PORT || 3000;
exports.mongodb = {
  uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'localhost/jutja'
};
exports.companyName = 'Jutja.';
exports.projectName = 'Jutja';
exports.systemEmail = 'bhanu423@gmail.com';
exports.cryptoKey = 'k3yb0ardc4t';
exports.smtp = {
  from: {
    name: process.env.SMTP_FROM_NAME || exports.projectName +' PMS',
    address: process.env.SMTP_FROM_ADDRESS || 'bhanu423@gmail.com'
  },
  credentials: {
    user: process.env.SMTP_USERNAME || 'bhanu421@gmail.com',
    password: process.env.SMTP_PASSWORD || 'allhailkingbooker',
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    ssl: true
  }
};
exports.oauth = {
  twitter: {
    key: process.env.TWITTER_OAUTH_KEY || '',
    secret: process.env.TWITTER_OAUTH_SECRET || ''
  },
  facebook: {
    key: process.env.FACEBOOK_OAUTH_KEY || '',
    secret: process.env.FACEBOOK_OAUTH_SECRET || ''
  },
  github: {
    key: process.env.GITHUB_OAUTH_KEY || '',
    secret: process.env.GITHUB_OAUTH_SECRET || ''
  }
};

