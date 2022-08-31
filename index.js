import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config';
import { exec } from 'child_process';
const TOKEN = process.env.TOKEN;
let opt = { polling: true };

const bot = new TelegramBot(TOKEN, opt);

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, ` ${msg.from.username} chmo`);
  console.log(msg);
});

bot.on('message', (msg) => {
  let bye = 'discord';
  if (msg.text.toString().toLowerCase().includes(bye)) {
    exec(
      'C:\\Users\\nabat\\AppData\\Local\\Discord\\Update.exe --processStart Discord.exe'
    );
    bot.sendMessage(msg.chat.id, ` open Discord for ${msg.from.username} `);
  }
});
bot.on('polling_error', console.log);
