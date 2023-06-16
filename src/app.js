const express = require('express');

const PORT = 4000;

const app = express();

app.listen(PORT, () => {
  console.log(`The server is listening at ${PORT}`);
});

const cors = require('cors');
const bodyParser = require('body-parser');
const post = require('./routes/post');
const get = require('./routes/get');
const update = require('./routes/update');
const getCount = require('./routes/getCount');
const updateCount = require('./routes/updateCount');

// CORS 에러 방지를 위한 미들웨어 등록
app.use(cors());
// JSON 데이터 파싱을 위한 미들웨어 등록
app.use(bodyParser.json());
// URL 인코딩된 데이터 파싱을 위한 미들웨어 등록
app.use(bodyParser.urlencoded({ extended: true }));
// register 앱에 연결
app.use('/post', post);
// get 앱에 연결
app.use('/get', get);
// update 앱에 연결
app.use('/update', update);
// getCount 앱에 연결
app.use('/getCount', getCount);
// updateCount 앱에 연결
app.use('/updateCount', updateCount);
