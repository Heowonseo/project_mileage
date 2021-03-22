<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8">
    <title> project_1-1</title>
    <style>
      *{
  font-size : 15px;
  text-align : center;
  background-color : black;
  color : white;
  }
h1{
  font-size : 250%;
  
}
ul{
  border : 1px solid black;
  width: 100%;
}
ul, li{
  list-style : none;
  display : inline-block;
  padding : 5px 250px 5px 90px;
  margin : 10px 0px 10px 0px;
  }
a{ 
  text-decoration-line: none;
}
section{
  border : 1px solid black;
  border-radius : 25px;
  padding : 10px 10px 50px 10px; 
  margin : 50px 100px 80px 100px;
  background-color : white;
  }
h3{
  background-color : white;
  color : black;
  font-size : 150%;
 }
form,lable,input,select,option{
  background-color : white;
  color : black;
  padding : 3px 0px 3px 30px;
}
button{
  margin : 0px 0px 0px 20px
}
input{
  text-align : left;  
}
    </style>
  </head>
  <body>    
    <header>
    <h1>마일리지 입력</h1>
    </header>
    <nav>
      <ul>
        <li><a href="
https://codepen.io/pen/?template=gOLdKBZ"
>입력하기</a></li>
        <li><a href="
https://codepen.io/pen/?template=PobryJV
">회원가입</a></li>
        <li><a href="#">관리자 전용</a></li>
      </ul>
    </nav>
    <main>
      <section>
        <form id = "admile">
        <h3>입력</h3>
      <lable for = "userId">이름</lable>
            <input type = "text" id= "userId" autofocus required>
      <lable for = "point">상점유형</lable>
        <select id = "point">                
          <option name = "weekend" >주말콜(0.5점)</option>
          <option name = "gtw" selected>출근(0.5점)</option>
          <option name = "got">퇴근(0.5점)</option>
          <option name = "night">야간콜(0.25점)</option>
        </select>
      <button type = "submit" onclick="add()">입력</button>
      </form>
        </section>
      <section>
      <h3>확인 및 수정</h3>
      <form>
        <lable for = "userId">이름</lable>
            <input type = "text" id = "userId"  autofocus required>
        <lable for = "userPwd1">비밀번호</lable>
        <input type = "password" size = "20" id="userPwd1" required>
        <button type = "submit"><a href="#">입력</a></button>
      </form>
      </section>
    </main>
  </body>
