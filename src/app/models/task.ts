export class Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;

  constructor(id: number, title: string, description: string, completed = false) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}
