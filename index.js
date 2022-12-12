const app = require('./config/server');
const routes = require('./app/routes/routes');


routes.home(app);
routes.contato(app);
routes.sobre(app);
routes.login(app);
routes.cadastro(app);
routes.logarUsuario(app);
routes.cadastrarUsuario(app);

routes.auth(app);

routes.pontosTuristicos(app);
routes.listarPontos(app);
routes.savePonto(app);
routes.saveEditarPonto(app);
routes.saveContato(app);
routes.excluir(app);
routes.editar(app);


