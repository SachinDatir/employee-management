/* eslint-disable no-unused-vars */
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    specPattern:['src/__test__/e2e/**.js'],
    baseUrl:"http://localhost:5173/",
    defaultCommandTimeout:7000
  },
  viewportWidth: 1440,
  viewportHeight: 900,
});
