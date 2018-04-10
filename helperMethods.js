const generateUniqueId = () => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const id = Array(16)
    .fill()
    .map(el => characters.charAt(Math.floor(Math.random() * 61)))
    .join('');

  return id;
}

module.exports = {
  generateUniqueId: generateUniqueId
}