import {Markup} from 'telegraf';

export function mainMenu() {
    return Markup.inlineKeyboard([
        Markup.button.callback('Що таке взагалі Exotic Pole Dance?', 'description'),
        Markup.button.callback('Хочу записатись на тренування.', 'booking')
    ], {columns: 1})
    }

export function writeCoach() {
    return Markup.keyboard(['Написати тренеру']).resize()
    }    
