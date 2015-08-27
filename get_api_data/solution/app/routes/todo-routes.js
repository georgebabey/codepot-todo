var TodoCtrl = require('../controllers/todo-ctrl');

module.exports = function (router) {

  router.get('/', TodoCtrl.getAll);
  router.get('/:id', TodoCtrl.get);
  router.post('/', TodoCtrl.create);
  router.delete('/:id', TodoCtrl.del);
  router.put('/:id', TodoCtrl.update);

  return '/todos';
};