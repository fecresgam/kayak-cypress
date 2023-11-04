const {defineConfig} = require('cypress');

module.exports = defineConfig({
  projectId: 'qpa3cb',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
