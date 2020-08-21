"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = __importDefault(require("./todo"));
const assert_1 = __importDefault(require("assert"));
const fs_1 = __importDefault(require("fs"));
fs_1.default.unlink('./tasks.json', () => {
    // todo と list のテスト
    todo_1.default.todo('ノートを買う');
    todo_1.default.todo('鉛筆を買う');
    assert_1.default.deepEqual(todo_1.default.list(), ['ノートを買う', '鉛筆を買う']);
    // done と donelist のテスト
    todo_1.default.done('鉛筆を買う');
    assert_1.default.deepEqual(todo_1.default.list(), ['ノートを買う']);
    assert_1.default.deepEqual(todo_1.default.doneList(), ['鉛筆を買う']);
    // del のテスト
    todo_1.default.del('ノートを買う');
    todo_1.default.del('鉛筆を買う');
    assert_1.default.deepEqual(todo_1.default.list(), []);
    assert_1.default.deepEqual(todo_1.default.doneList(), []);
    console.log('Test is done.');
});
