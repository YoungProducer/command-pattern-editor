import { Command } from "../Command";

export class UndoCommand extends Command {
  execute() {
    this.app.undo();
    return false;
  }
}
