const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');

const router = express.Router();

router.post('/join', isNotLoggedIn, async (req, res, next) => {
  const { userId, password } = req.body;
  try {
    const exUser = await User.findOne({ where: { userId } });
    if (exUser) {
      return res.send('<script type="text/javascript">alert("이미 존재하는 회원입니다");document.location.href="/join";</script>');
    }
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      userId,
      password: hash,
    });
    return res.send('<script type="text/javascript">alert("회원가입이 완료되었습니다");document.location.href="/";</script>');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/add', async (req, res, next) => {
  const { userId, point} = req.body;
  console.log(point);
  try {
    const exUser = await User.findOne({ where: { userId } });
    console.log(exUser);
    if(exUser){
      switch(point){
        case 'pend' :
          exUser.pend = exUser.pend + 1;
          exUser.result = exUser.result + 0.5 ;
          await exUser.save();
          console.log(exUser.pend);
          break;
        case 'pgot' :
          exUser.pgot = exUser.pgot + 1;
          exUser.result = exUser.result + 0.5 ;
          await exUser.save();
          console.log(exUser.pgot);
          break;
        case 'pgtw' :
          exUser.pgtw = exUser.pgtw + 1;
          exUser.result = exUser.result + 0.5 ;
          await exUser.save();
          console.log(exUser.pgtw);
          break;
        case 'pnight' :
          exUser.pnight = exUser.pnight + 1;
          exUser.result = exUser.result + 0.25 ;
          await exUser.save();
          console.log(exUser.pnight);
          break;
       };
       return res.redirect('/success');
      }return res.send('<script type="text/javascript">alert("존재하지 않는 회원입니다");document.location.href="/";</script>');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/adds', async (req, res, next) => {
  const { userId, point, points} = req.body;
  console.log(point);
  try {
    const exUser = await User.findOne({ where: { userId } });
    console.log(exUser);
    if(exUser){
      switch(point){
        case 'pend' :
          exUser.pend = exUser.pend + points;
          exUser.result = exUser.result + 0.5 * points ;
          await exUser.save();
          console.log(exUser.pend);
          break;
        case 'pgot' :
          exUser.pgot = exUser.pgot + points;
          exUser.result = exUser.result + 0.5 * points ;
          await exUser.save();
          console.log(exUser.pgot);
          break;
        case 'pgtw' :
          exUser.pgtw = exUser.pgtw + points;
          exUser.result = exUser.result + 0.5 * points ;
          await exUser.save();
          console.log(exUser.pgtw);
          break;
        case 'pnight' :
          exUser.pnight = exUser.pnight + points;
          exUser.result = exUser.result + 0.25 * points ;
          await exUser.save();
          console.log(exUser.pnight);
          break;
       };
       return res.redirect('/success');
      }return res.send('<script type="text/javascript">alert("존재하지 않는 회원입니다");document.location.href="/manageInfo";</script>');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.send('<script type="text/javascript">alert("이름과 비밀번호를 확인하시오");document.location.href="/";</script>');
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect('/getInform')
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

router.post('/check', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.send('<script type="text/javascript">alert("이름과 비밀번호를 확인하시오");document.location.href="/";</script>');
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect('/manageInfo')
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});



router.get('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

router.get('/logout1', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/check');
});

module.exports = router;
