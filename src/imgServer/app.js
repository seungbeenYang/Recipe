const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
require('dotenv').config();

// AWS S3 설정
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

// Express 앱 생성
//const app = express();
//const port = 3000;

// Multer S3 설정
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_S3_BUCKET_NAME,
        acl: 'public-read',   // 파일 접근 권한 설정 (공용 읽기 권한)
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            // 파일의 s3 내 경로 및 이름 설정
            cb(null, `images/${Date.now()}_${path.basename(file.originalname)}`);
        }
    })
});

// 파일 업로드를 처리할 라우트
app.post('/upload', upload.single('image'), (req, res) => {
    res.send(`File uploaded successfully: ${req.file.location}`);
});

// 서버 실행
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
