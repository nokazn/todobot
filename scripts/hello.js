"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (robot) => {
    // i は大文字小文字を区別しないためのフラグ
    robot.hear(/hello>/i, (msg) => {
        const userId = msg.message.user.id;
        // <@userName> でメンションを送る
        msg.send(`Hello, <@${userId}>`);
    });
};
