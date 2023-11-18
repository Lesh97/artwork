import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("build"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, () => {
  console.log("server is running !");
});

//클라이언트 폴더 만들기 -> npm ci -> npm run build

//클라이언트 빌드 후 -> 서버로 빌드폴더 옮기기 -> 서버폴더에서 npm ci

//tsc 트랜스파일링 -> node app.js

// 위 과정을 스크립트로 만들어서 자동 실행하게끔
