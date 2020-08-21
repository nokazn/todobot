import fs from 'fs';

const FILE_NAME = './tasks.json';

let tasks: Map<string, boolean> = new Map();
try {
  const data = fs.readFileSync(FILE_NAME, 'utf8');
  tasks = new Map(JSON.parse(data));
} catch (err) {
  console.error(`${FILE_NAME}から復元できませんでした。`);
}

/**
 * タスクをファイルに保存
 */
const saveTasks = () => {
  fs.writeFileSync(FILE_NAME, JSON.stringify(Array.from(tasks)), 'utf8');
};

/**
 * TODO を追加する
 */
const todo = (task: string): void => {
  tasks.set(task, false);
  saveTasks();
};

/**
 * タスクト完了したかどうかのタプルを受け取り、完了したかを返す
 */
const isDone = (taskAndIsDonePair: [string, boolean]): boolean => taskAndIsDonePair[1];

/**
 * タスクト完了したかどうかのタプルを受け取り、完了していないかを返す
 */
const isNotDone = (taskAndIsDonePair: [string, boolean]): boolean => !isDone(taskAndIsDonePair);

/**
 * TODO の一覧の配列を取得
 */
const list = (): string[] => {
  return Array.from(tasks)
    .filter(isNotDone)
    .map((t) => t[0]);
};

/**
 * TODO を完了状態にする
 */
const done = (task: string): void => {
  if (tasks.has(task)) {
    tasks.set(task, true);
    saveTasks();
  }
};

/**
 * 完了済みのタスクの一覧の配列を取得する
 */
const doneList = (): string[] => {
  return Array.from(tasks)
    .filter(isDone)
    .map((t) => t[0]);
};

const del = (task: string): void => {
  if (tasks.has(task)) {
    tasks.delete(task);
    saveTasks();
  }
};

export default { todo, list, done, doneList, del };
