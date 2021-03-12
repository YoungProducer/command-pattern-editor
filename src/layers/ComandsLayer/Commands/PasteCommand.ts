import { Command } from "../Command";

export class PasteCommand extends Command {
  execute() {
    this.saveBackup();
    this.app.getEditor().pasteSelection();
    return true;
  }
}
