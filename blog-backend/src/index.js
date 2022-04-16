require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

//비구조화 할당을 통해 proxess.env 내부 값에 대한 레퍼런스 만들기
const { PORT } = process.env;

const api = require('./api');

const app = new Koa();
const router = new Router();

//라우터 설정
router.use('/api', api.routes());   // api라우트 적용

//라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('듣고 있어~ 포트 4000');
});