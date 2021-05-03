const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const passport = require('passport');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true});
const cookieParser = require('cookie-parser');
const User = require('../models/user');
const router = express.Router();


router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

router.get('/join', isNotLoggedIn, csrfProtection, (req, res) => {
  res.render('join', { title: '회원가입 - mileage' });
});
router.get('/manageInfo', csrfProtection, (req, res, next) => {
  User.findAll().then( result => {
    res.render('manageInfo', {
      users: result
    });
  });
});
router.get('/logout', csrfProtection, (req, res) => {
  res.render('logout', { title: '로그아웃 - mileage' });
});
router.get('/manage', csrfProtection, (req, res) => {
    res.render('manage', { title: '관리자 - mileage' });
  });
router.get('/check', csrfProtection, (req, res) => {
    res.render('check', { title: '확인 및 수정-mileage' });
  });
router.get('/success', csrfProtection, (req, res) => {
    res.render('success', { title: '성공-mileage' });
  });
router.get('/getInform', csrfProtection, (req, res) => {
    res.render('getInform', { title: '확인-mileage'})
  });
router.get('/', csrfProtection, (req, res, next) => {
  res.render('main', { title: 'mileage' });
});

module.exports = router;