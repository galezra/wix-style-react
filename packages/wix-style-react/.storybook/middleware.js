const bodyParser = require('body-parser');
const mockAtlasRouter = require('./mocks/atlas');

const baseRoute = '/api';

const expressMiddleWare = function(router) {
  router.use(bodyParser.urlencoded({ extended: false }));
  router.use(bodyParser.json());
  mockAtlasRouter(router, `${baseRoute}/atlas`);
};

module.exports = expressMiddleWare;
