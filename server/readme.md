Project Setup: 
make floder:  server
              npx express-generator myapp --no-view

cd .\server\
npm i bcrypt cookie-parser cors express jsonwebtoken mongoose multer path uuid
npm i concurrently

 "scripts": {
    "start": "node index.js",
    "server": "nodemon index.js",
    "client": "npm start --prefix ../client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
 }


Run Both Frontend and Backend Concurrently :   npm run dev

