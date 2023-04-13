const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'Michelle',
        mongodb_password: 'wnJ9dpgEo6h6adv9',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-website-dev',
      },

      reactStrictMode: true,
    };
  }

  return {
    env: {
      mongodb_username: 'Michelle',
      mongodb_password: 'wnJ9dpgEo6h6adv9',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-website',
    },

    reactStrictMode: true,
  };
};
