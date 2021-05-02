const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();


router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

router.get('/join', isNotLoggedIn, (req, res) => {
  res.render('join', { title: '회원가입 - mileage' });
});
router.get('/manageInfo', (req, res, next) => {
  User.findAll().then( result => {
    res.render('manageInfo', {
      users: result
    });
  });
});
router.get('/logout', (req, res) => {
  res.render('logout', { title: '로그아웃 - mileage' });
});
router.get('/manage',(req, res) => {
    res.render('manage', { title: '관리자 - mileage' });
  });
router.get('/check', (req, res) => {
    res.render('check', { title: '확인 및 수정-mileage' });
  });
router.get('/success', (req, res) => {
    res.render('success', { title: '성공-mileage' });
  });
router.get('/getInform', (req, res) => {
    res.render('getInform', { title: '확인-mileage'})
  });
router.get('/', (req, res, next) => {
  res.render('main', { title: 'mileage' });
});

module.exports = router;