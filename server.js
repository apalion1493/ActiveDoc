const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
const port = 3000;

// Настроим CORS, чтобы разрешить запросы с клиента
app.use(cors());

// Настраиваем Multer для обработки данных формы
const upload = multer();

// Обработчик POST-запроса
app.post("/send-form", upload.none(), (req, res) => {
  const { name, phone, email, subject, message } = req.body;

  console.log("Получены данные:", req.body);

  if (!name || !email) {
    return res.status(400).json({ success: false, message: "Name and Email are required!" });
  }

  // Здесь можно добавить логику сохранения данных (например, в базу данных)

  res.json({ success: true, message: "Form submitted successfully!" });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
