"use strict";

const { promises: fs } = require("fs");
const paths = require("../utils/paths");

/**
 * Re-create the .tmp directories before each test
 */
beforeEach("clean the .tmp directory", async () => {
  // Delete the .tmp directory, if it exists
  try {
    await fs.rm(paths.tmp, { recursive: true });
  }
  catch (error) {
    console.log(error);
  }


  // Create the home and workspace directories
  await fs.mkdir(paths.home, { recursive: true });
  await fs.mkdir(paths.workspace, { recursive: true });
});
