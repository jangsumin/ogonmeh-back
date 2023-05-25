// 활용할 더미 데이터
SAMPLE_DATA = {
  20230517: {
    hot_menu: ['beef', 'pork'],
    salad_menu: ['salad', 'banana'],
    korean_menu: ['rice'],
  },
  20230518: {
    hot_menu: ['kebab', 'lamb'],
    salad_menu: ['tomato', 'apple'],
    korean_menu: ['kimchi'],
  },
};

const express = require('express');

const PORT = 4000;

const app = express();

// main 페이지 접속 시 즉각적으로 오늘의 메뉴를 응답하는 api
app.get('/users', (req, res) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const date =
    String(year) +
    String(month).padStart(2, '0') +
    String(day).padStart(2, '0');
  res.status(200);
  res.send(SAMPLE_DATA[date]);
});

// main 페이지 내 화살표 버튼으로 다른 날짜로 이동할 때, 다른 날짜의 메뉴를 응답하는 api
app.get('/users/:date', (req, res) => {
  const reqDate = req.params.date;
  if (reqDate in SAMPLE_DATA) {
    res.status(200);
    res.send(SAMPLE_DATA[reqDate]);
  } else {
    res.status(400);
    res.send('Not found.');
  }
});

app.listen(PORT, () => {
  console.log(`The server is listening at ${PORT}`);
});

// register 앱에 연결
const register = require('./routes/register');
app.use('/register', register);

const bodyParser = require('body-parser');
// JSON 데이터 파싱을 위한 미들웨어 등록
app.use(bodyParser.json());
// URL 인코딩된 데이터 파싱을 위한 미들웨어 등록
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());

app.post('/submit', (req, res) => {
  const date = req.body.date;
  const koreanFoodCorner = req.body.koreanFoodCorner;
  const hotCorner = req.body.hotCorner;
  const saladCorner = req.body.saladCorner;
  console.log(date);
  console.log(koreanFoodCorner);
  console.log(hotCorner);
  console.log(saladCorner);
  res.send('POST 요청이 성공적으로 처리되었습니다.');
});
