[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=15262450)
# 14-node-user-auth

14주차 Node 실습 - Unit 5 lessons 22, 23, 24, 25

# 사용자 계정 인증

이번 과제에서는 사용자 계정 인증" 배웁니다.

이 과제는 4 부분으로 나뉩니다.

1. '세션과 플래시 메시지의 추가' (22장)
2. '사용자 로그인 폼 생성과 패스워드 해시' (23장)
3. '사용자 인증 추가' (24장)
4. '캡스톤 5: 사용자 인증 추가' (25장) - 추가한 코드가 없습니다.

---

## 1. 세션과 플래시 메시지의 추가

1. 세션과 쿠키 설정<br>
    Session and cookie settings
2. 컨트롤러 액션에서 플래시 메시지 생성<br>
    Create flash messages in controller actions
3. 유입 데이터상에서 유효성 체크 미들웨어 설정<br>
    Set up validation check middleware in incoming data

---

## 2. 사용자 로그인 폼 생성과 패스워드 해시

1. 사용자로그인폼생성<br>
    Create a user login form
2. bcrypt를 통한 데이터베이스 내 데이터 해싱<br>
    Hashing data in the database using bcrypt

---

## 3. 사용자 인증 추가

1. 모델 생성 폼의 구축<br>
    Build a model creation form
2. 브라우저에서 데이터베이스로 사용자 저장<br>
    Save users from the browser to the database
3. 뷰에서 연관 모델 출력<br>
    Output associated models from the view

---

## 4. 사용자 인증 추가

추가한 코드가 없습니다.

---

## 과제 파일

These files will need to be updated to complete the assignment. / 이 파일들을 업데이트하여 과제를 완료해야 합니다.

- **14-node-user-auth `(18/18)`** _(6월 24일까지)_
  - [lesson-22](./lesson-22) (Flash Msgs)
    - /controllers/usersController.js `(2/2)`
    - /views/layout.ejs + /views/_partials/_flashMsg.ejs `(2/2)`
    - /app.js `(2/2)`
  - [lesson-23](./lesson-23) (Password hashing)
    - /controllers/usersController.js `(2/2)`
    - /models/User.js `(2/2)`
    - /app.js `(2/2)`
  - [lesson-24](./lesson-24) (Passport authentication)
    - /controllers/usersController.js `(2/2)`
    - /models/User.js `(2/2)`
    - /app.js + /views/_partials/_header.ejs `(2/2)`
  - [lesson-25](./lesson-25) (추가한 코드 없음)
