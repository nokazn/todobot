const tasks = new Map();

/**
 * TODO を追加する
 */
const todo = (task: string): void => {
  tasks.set(task, false);
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
  }
};

export default { todo, list, done, doneList, del };
