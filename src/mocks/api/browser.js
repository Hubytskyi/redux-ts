/*
Config for mocking API requests in development mode (https://mswjs.io/docs/getting-started/integrate/browser)
Need to manually pass in setupWorker() only necessary handlers for current local development
*/

import { setupWorker } from 'msw';

export const worker = setupWorker();
