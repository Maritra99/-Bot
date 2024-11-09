const start = require("../Command/start");
const help = require("../Command/help");

module.exports = (chatId, msg) => {
  const text = msg.text.toLowerCase();

  if (text === "/start") {
    start(chatId);
  } else if (text === "/help") {
    help(chatId);
  }
};
