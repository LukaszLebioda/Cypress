// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// for exceptions.js file
import "./exceptions";

// for XPath
require('@cypress/xpath');

// for cypress-real-events plugin
import "cypress-real-events";

// for cypress-failed-log
// require('cypress-failed-log');

// for cy-verify-downloads
require('cy-verify-downloads').addCustomCommand();



