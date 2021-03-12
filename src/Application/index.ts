import { Editor } from "../Editor";
import { Command } from "../layers/ComandsLayer/Command";
import { CommandsHistory } from "../layers/ComandsLayer/CommandsHistory";

export class Application {
  protected editor: Editor;
  protected history: CommandsHistory;
  protected clipboard: string = "";

  constructor(editor: Editor, history: CommandsHistory) {
    this.editor = editor;
    this.history = history;

    this.editor.setApp(this);
  }

  executeCommand(command: Command) {
    if (command.execute()) {
      this.history.push(command);
    }
  }

  undo() {
    const command: Command | undefined = this.history.pop();
    if (command) {
      command.undo();
    }
  }

  getEditor(): Editor {
    return this.editor;
  }

  getClipboard(): string {
    return this.clipboard;
  }

  setClipboard(clipboard: string): void {
    this.clipboard = clipboard;
  }
}
