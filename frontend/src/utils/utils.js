// Функция для проверки ответа от сервера
export const checkResponse = (res) => {
  // Если ответ успешный, возвращаем полученные данные
  if (res.ok) {
    return res.json()
  }
  // Иначе возвращаем ошибку reject
  return Promise.reject(`Error: ${res.status}`)
}