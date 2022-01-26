import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker';

export type UserProps = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<UserProps>>({}),
    },

    factories: {
      user: Factory.extend({
        name(index) {
          return `User ${index + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList('user', 20);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
