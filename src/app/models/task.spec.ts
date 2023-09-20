import { Task } from './task';

describe('Task', () => {
  it('should create an instance', () => {
    // 必要な引数を指定してTaskのインスタンスを作成
    expect(new Task(1, 'Test Task', 'Test Task Description')).toBeTruthy();
  });
});
