<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8">
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
