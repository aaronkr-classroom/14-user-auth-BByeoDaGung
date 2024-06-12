"use strict";

/**
 * =====================================================================
 * Define Express app and set it up
 * =====================================================================
 */

// modules
const express = require("express"), // express를 요청
  layouts = require("express-ejs-layouts"), // express-ejs-layout의 요청
  passport = require("passport"),
  session = require("express-session"),
  methodOverride = require("method-override"),
  cookieParser = require("cookie-parser"),
  connectFlash = require("connect-flash"),
  expressValidator = require("express-validator"),
  app = express(); // express 애플리케이션의 인스턴스화

// controllers 폴더의 파일을 요청
const pagesController = require("./controllers/pagesController"),
  subscribersController = require("./controllers/subscribersController"),
  usersController = require("./controllers/usersController"),
  coursesController = require("./controllers/coursesController"),
  talksController = require("./controllers/talksController"),
  trainsController = require("./controllers/trainsController"),
  errorController = require("./controllers/errorController");

// Mongoose 설정
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://choys:JapurFJhWUDgdWXZ@bbyeodagung.erqm11u.mongodb.net/?retryWrites=true&w=majority&appName=BByeoDaGung"
);
const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MONGODB!!!");
});

// 세션 및 플래시 메시지 설정
app.use(cookieParser("secret_passcode")); // cookie-parser 미들웨어를 사용하고 비밀 키를 전달
app.use(
  session({
    secret: "secret_passcode", // 비밀 키를 전달
    cookie: {
      maxAge: 4000000, // 쿠키의 유효 기간을 설정
    },
    resave: false, // 세션을 매번 재저장하지 않도록 설정
    saveUninitialized: false, // 초기화되지 않은 세션을 저장하지 않도록 설정
  })
);
app.use(connectFlash()); // connect-flash 미들웨어를 사용

// Passport 초기화
app.use(passport.initialize());
app.use(passport.session());

// Flash 메시지를 로컬 변수로 설정
app.use((req, res, next) => {
  res.locals.flashMessages = req.flash(); // flash 메시지를 뷰에서 사용할 수 있도록 설정
  next();
});

// Method Override 설정
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

// Express Validator 설정
app.use(expressValidator());

// Express 설정
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(layouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 라우터 설정
const router = express.Router();
app.use("/", router);

/**
 * Routes 설정
 */

// Pages
router.get("/", pagesController.showHome);
router.get("/about", pagesController.showAbout);
router.get("/transportation", pagesController.showTransportation);

// Users
router.get("/users/login", usersController.login);
router.post("/users/login", usersController.authenticate, usersController.redirectView);
router.get("/users", usersController.index, usersController.indexView);
router.get("/users/new", usersController.new);
router.post("/users/create", usersController.validate, usersController.create, usersController.redirectView);
router.get("/users/:id", usersController.show, usersController.showView);
router.get("/users/:id/edit", usersController.edit);
router.put("/users/:id/update", usersController.update, usersController.redirectView);
router.delete("/users/:id/delete", usersController.delete, usersController.redirectView);

// Subscribers
router.get("/subscribers", subscribersController.index, subscribersController.indexView);
router.get("/subscribers/new", subscribersController.new);
router.post("/subscribers/create", subscribersController.create, subscribersController.redirectView);
router.get("/subscribers/:id", subscribersController.show, subscribersController.showView);
router.get("/subscribers/:id/edit", subscribersController.edit);
router.put("/subscribers/:id/update", subscribersController.update, subscribersController.redirectView);
router.delete("/subscribers/:id/delete", subscribersController.delete, subscribersController.redirectView);

// Courses
router.get("/courses", coursesController.index, coursesController.indexView);
router.get("/courses/new", coursesController.new);
router.post("/courses/create", coursesController.create, coursesController.redirectView);
router.get("/courses/:id", coursesController.show, coursesController.showView);
router.get("/courses/:id/edit", coursesController.edit);
router.put("/courses/:id/update", coursesController.update, coursesController.redirectView);
router.delete("/courses/:id/delete", coursesController.delete, coursesController.redirectView);

// Talks
router.get("/talks", talksController.index, talksController.indexView);
router.get("/talks/new", talksController.new);
router.post("/talks/create", talksController.create, talksController.redirectView);
router.get("/talks/:id", talksController.show, talksController.showView);
router.get("/talks/:id/edit", talksController.edit);
router.put("/talks/:id/update", talksController.update, talksController.redirectView);
router.delete("/talks/:id/delete", talksController.delete, talksController.redirectView);

// Trains
router.get("/trains", trainsController.index, trainsController.indexView);
router.get("/trains/new", trainsController.new);
router.post("/trains/create", trainsController.create, trainsController.redirectView);
router.get("/trains/:id", trainsController.show, trainsController.showView);
router.get("/trains/:id/edit", trainsController.edit);
router.put("/trains/:id/update", trainsController.update, trainsController.redirectView);
router.delete("/trains/:id/delete", trainsController.delete, trainsController.redirectView);

/**
 * Errors Handling & App Startup
 */
app.use(errorController.resNotFound); // 미들웨어 함수로 에러 처리 추가
app.use(errorController.resInternalError);

app.listen(app.get("port"), () => {
  // 3000번 포트로 리스닝 설정
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
