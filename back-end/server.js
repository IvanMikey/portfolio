const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');

const app = express();

// Подключение к базе данных MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// Middleware для обработки JSON-данных
app.use(bodyParser.json());

// Эндпоинт для регистрации нового пользователя
app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Проверяем, существует ли пользователь с таким email
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'Пользователь с таким email уже существует' });
        }

        // Создаем нового пользователя
        user = new User({
            username,
            email,
            password,
        });

        // Сохраняем пользователя в базу данных
        await user.save();

        res.json({ msg: 'Пользователь успешно зарегистрирован' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));