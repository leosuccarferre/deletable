
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['37zbAvRKqyLcEcYUN78m4w'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  