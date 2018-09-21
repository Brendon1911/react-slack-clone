const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Chatkit = require('pusher-chatkit-server');

const app = express();

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:fbbd66fa-a219-441e-99ea-b173bc7e653a',
  key: '9ce2ff48-436b-4965-a55c-e40410ac7364:BV8SBZ7VA7U4rszBNjhofaaO4DuOS3M6BR/cxIU+bzY='
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/users', (req, res) => {
  const { username } = req.body;
  
  chatkit.creatUser({
    name: username,
    id: username
  })
  .then(() =>
    res.sendStatus(201))
    .catch(error => {
      if (error.error_type === 'services/chatkit/user_already_exists') {
        res.sendStatus(200);
      } else {
        res.status(error.statusCode).json(error);
      }
    });
});

app.post('/authenticate', (req, res) => {
  const { grant_type } = req.body;
  res.json(chatkit.authenticate({ grant_type }, req.query.userId));
});

const PORT = 8081;
app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Running on port ${PORT}`);
  }
});
