import { create, defaults, router } from 'json-server';
import { addAuthenticationRoute } from './authenticationRoute';
var db = require('./db.json');

const jsonRouter = router(db);

const server = create();

server.use(defaults());
addAuthenticationRoute(server);
server.use(jsonRouter);

server.listen(5000, () => {
  console.log('JSON Server is running');
});
