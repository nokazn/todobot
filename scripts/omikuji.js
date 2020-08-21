"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (robot) => {
    // i は大文字小文字を区別しないためのフラグ
    robot.hear(/おみくじ/, (msg) => {
        const userName = msg.message.user.name;
        const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
        const index = Math.floor(Math.random() * lots.length);
        const lot = lots[index];
        // <@userName> でメンションを送る
        msg.send(`<@${userName}>のおみくじは${lot}です。`);
    });
};
