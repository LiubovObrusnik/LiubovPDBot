import { mainMenu, writeCoach } from './keyboard.js';
import { Telegraf } from 'telegraf';
import { Token } from './api.js'

console.log("Start")

const bot = new Telegraf(Token)

let studio = '[Euphoria Exotic PD Studio](https://www.instagram.com/euphoria_exoticpd/)';

bot.start(ctx => {
    ctx.replyWithMarkdown(
        'Привіт, мене звуть *Любов*, я викладаю Exotic pole dance. \n' +
        `В ${studio} \n` +
        'Що тебе цікавить?', mainMenu())
})
bot.action(['description', 'booking'], ctx => {
    if (ctx.callbackQuery.data === 'description') {
        ctx.replyWithVideo(
            {
                source: './assets/video.mp4'
            }, {
            caption: 'Танцювальний напрям, що поєднує трюки на пілоні та стрип-хореографію.\n' +
                'Вище, ти можеш побачити приклад танцю, який я викладаю своїм учням.'
        }
        )
    }
    else {
        ctx.reply('Є вільний час на группові заняття:' +
            '\n * Вівторок, Четвер о 10:00' +
            '\n * Понеділок, Середа о 18,19:00 ' +
            '\n * Пятниця 20:00' +
            '\n Також, можна записатися на індивідуальні заняття', writeCoach())
        bot.hears('Написати тренеру', ctx => {
            ctx.reply('Чекаю на твоє повідомлення! \n @liubovobrusnik')
        })
    }

})
bot.launch()