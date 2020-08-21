"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const FILE_NAME = './tasks.json';
let tasks = new Map();
try {
    const data = fs_1.default.readFileSync(FILE_NAME, 'utf8');
    tasks = new Map(JSON.parse(data));
}
catch (err) {
    console.error(`${FILE_NAME}から復元できませんでした。`);
}
/**
 * タスクをファイルに保存
 */
const saveTasks = () => {
    fs_1.default.writeFileSync(FILE_NAME, JSON.stringify(Array.from(tasks)), 'utf8');
};
/**
 * TODO を追加する
 */
const todo = (task) => {
    tasks.set(task, false);
    saveTasks();
};
/**
 * タスクト完了したかどうかのタプルを受け取り、完了したかを返す
 */
const isDone = (taskAndIsDonePair) => taskAndIsDonePair[1];
/**
 * タスクト完了したかどうかのタプルを受け取り、完了していないかを返す
 */
const isNotDone = (taskAndIsDonePair) => !isDone(taskAndIsDonePair);
/**
 * TODO の一覧の配列を取得
 */
const list = () => {
    return Array.from(tasks)
        .filter(isNotDone)
        .map((t) => t[0]);
};
/**
 * TODO を完了状態にする
 */
const done = (task) => {
    if (tasks.has(task)) {
        tasks.set(task, true);
        saveTasks();
    }
};
/**
 * 完了済みのタスクの一覧の配列を取得する
 */
const doneList = () => {
    return Array.from(tasks)
        .filter(isDone)
        .map((t) => t[0]);
};
const del = (task) => {
    if (tasks.has(task)) {
        tasks.delete(task);
        saveTasks();
    }
};
exports.default = { todo, list, done, doneList, del };
