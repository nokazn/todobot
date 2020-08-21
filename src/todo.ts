import hubot, { Robot } from 'hubot';
import todo from './modules/todo';

// Description:
//  TODO を管理するぼっとです。
// Commands:
//  ボット名 todo - TODO を作成
//  ボット名 done - TODO を完了にする
//  ボット名 del - TODO を消す
//  ボット名 list - TODO の一覧表示
//  ボット名 donelist - 完了した TODO の一覧表示
module.exports = (robot: hubot.Robot) => {
  console.log(robot);

  robot.respond(/todo (.+)$/i, (msg) => {
    const task = msg.match[1].trim();
    todo.todo(task);
    msg.send(`"${task}" を追加しました。`);
  });

  robot.respond(/done (.+)$/i, (msg) => {
    const task = msg.match[1].trim();
    todo.done(task);
    msg.send(`${task} を完了にしました。`);
  });

  robot.respond(/del (.+)$/i, (msg) => {
    const task = msg.match[1].trim();
    todo.del(task);
    msg.send(`${task} を削除しました。`);
  });

  robot.respond(/list/i, (msg) => {
    msg.send(
      todo
        .list()
        .map((task) => `・${task}`)
        .join('\n'),
    );
  });

  robot.respond(/donelist/i, (msg) => {
    msg.send(
      todo
        .doneList()
        .map((task) => `・${task}`)
        .join('\n'),
    );
  });
};
