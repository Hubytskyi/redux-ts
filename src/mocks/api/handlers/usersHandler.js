import { rest } from 'msw';

export const userHandler = [
  rest.get('http://localhost:5000/users', (req, res, ctx) => {
    // successful response
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
        },
      ]),
      ctx.delay(30)
    );
  }),
];
