/*
Config for mocking API requests in unit tests (https://mswjs.io/docs/getting-started/integrate/node)
Need to pass in setupServer() all handlers that will be used for mocking
*/

import { setupServer } from 'msw/node';
import { userHandler } from "./handlers/usersHandler";

const handlers = [
  ...userHandler,
];

export const server = setupServer(...handlers);