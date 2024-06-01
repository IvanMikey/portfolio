import React, { useState } from 'react'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="p-1 flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-orange-400">
          {isLogin ? 'Вход в систему' : 'Регистрация'}
        </h2>
        {isLogin ? (
          <form className="space-y-6">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                className="px-4 py-2 border bg-gray-900 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Введите email"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-600">Пароль</label>
              <input
                type="password"
                className="px-4 py-2 border bg-gray-900 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Введите пароль"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700"
            >
              Войти
            </button>
          </form>
        ) : (
          <form className="space-y-6">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                className="px-4 py-2 border bg-gray-900 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Введите email"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-600">Пароль</label>
              <input
                type="password"
                className="px-4 py-2 border border-orange-40 bg-gray-900 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Введите пароль"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-600">Подтверждение пароля</label>
              <input
                type="password"
                className="px-4 py-2 border bg-gray-900 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Подтвердите пароль"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700"
            >
              Зарегистрироваться
            </button>
          </form>
        )}
        <p className="text-center text-gray-600">
          {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}{' '}
          <button
            onClick={toggleForm}
            className="text-blue-500 hover:underline"
          >
            {isLogin ? 'Регистрация' : 'Вход'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;