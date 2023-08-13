const { Joi, celebrate } = require('celebrate');
// Подключение модуля celebrate из пакета celebrate,
// который предоставляет удобные средства для валидации запросов

const loginValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email({ tlds: { allow: false } }),
    password: Joi.string().required(),
  }),
});
// Валидатор для проверки данных при входе пользователя в систему.
// Проверяет, что поле email является обязательным и содержит правильный
// формат электронной почты, а также что поле password является обязательным.

const createUserValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email({ tlds: { allow: false } }),
    password: Joi.string().required(),
  }),
});

const getCurrentUserValidator = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24),
  }),
});
// Валидатор для проверки данных при получении информации о текущем пользователе.
// Проверяет, что поле userId является обязательным
// и содержит шестнадцатеричное значение длиной 24 символа.

const updateUserValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email({ tlds: { allow: false } }),
  }),
});
// Валидатор для проверки данных при обновлении информации о пользователе.
// Проверяет, что поле name является обязательным и содержит строку длиной
// от 2 до 30 символов, а также что поле email является обязательным
// и содержит правильный формат электронной почты.

module.exports = {
  loginValidator,
  createUserValidator,
  getCurrentUserValidator,
  updateUserValidator,
};
// Экспорт объекта, содержащего все валидаторы,
// чтобы они могли быть использованы в других модулях.
