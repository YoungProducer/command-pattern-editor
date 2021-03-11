import { Command } from "../Command";

export class CopyCommand extends Command {
  execute() {
    this.app.setClipboard(this.editor.getSelection());
    return true;
  }
}
