import { Command } from "../Command";

export class EditCommand extends Command {
  execute(...args: any[]) {
    this.saveBackup();
    this.editor.setText(args[0]);
    return true;
  }
}
