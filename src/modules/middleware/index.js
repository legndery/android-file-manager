const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

/**
 * @param {express} app
 */
function middleWare(app) {
  const sess = {
    secret: 'l3gnd3ry',
    cookie: {},
  };

  if (app.get('env') === 'production') {
    app.set('trust proxy', 1); // trust first proxy
    sess.cookie.secure = true; // serve secure cookies
  }
  app.use(session(sess));

  app.use(cors());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
}

module.exports = middleWare;
