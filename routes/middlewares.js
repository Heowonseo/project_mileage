exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.status(403).send('<script type="text/javascript">alert("로그인해주십시오");document.location.href="/";</script>');
    }
  };
  
  exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
      next();
    } else {
      res.send('<script type="text/javascript">alert("로그아웃해주십시오");document.location.href="/logout";</script>');
    }
    };
  //로그인 유무를 검사하는 미들웨어(접근 권한을 제어)