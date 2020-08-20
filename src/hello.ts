import hubot from 'hubot';

module.exports = (robot: hubot.Robot): void => {
  // i は大文字小文字を区別しないためのフラグ
  robot.hear(/hello>/i, (msg) => {
    const userId = msg.message.user.id;
    // <@userName> でメンションを送る
    msg.send(`Hello, <@${userId}>`);
  });
};
