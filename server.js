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

const PORT = 8081;
app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Running on port ${PORT}`);
  }
});
