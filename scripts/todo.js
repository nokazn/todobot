"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = __importDefault(require("./modules/todo"));
// Description:
//  TODO を管理するぼっとです。
// Commands:
//  ボット名 todo - TODO を作成
//  ボット名 done - TODO を完了にする
//  ボット名 del - TODO を消す
//  ボット名 list - TODO の一覧表示
//  ボット名 donelist - 完了した TODO の一覧表示
module.exports = (robot) => {
    robot.respond(/todo (.+)$/i, (msg) => {
        const task = msg.match[1].trim();
        todo_1.default.todo(task);
        msg.send(`"${task}" を追加しました。`);
    });
    robot.respond(/done (.+)$/i, (msg) => {
        const task = msg.match[1].trim();
        todo_1.default.done(task);
        msg.send(`${task} を完了にしました。`);
    });
    robot.respond(/del (.+)$/i, (msg) => {
        const task = msg.match[1].trim();
        todo_1.default.del(task);
        msg.send(`${task} を削除しました。`);
    });
    robot.respond(/list/i, (msg) => {
        const todoList = todo_1.default.list();
        if (todoList.length === 0) {
            msg.send('TODOはありません。');
            return;
        }
        msg.send(todoList.map((task) => `・${task}`).join('\n'));
    });
    robot.respond(/donelist/i, (msg) => {
        const doneTodoList = todo_1.default.doneList();
        if (doneTodoList.length === 0) {
            msg.send('完了したTODOはありません。');
            return;
        }
        msg.send(doneTodoList.map((task) => `・${task}`).join('\n'));
    });
};
