import { Editor } from "../Editor";
import { Command } from "../layers/ComandsLayer/Command";
import {
  CopyCommand,
  PasteCommand,
  UndoCommand
} from "../layers/ComandsLayer/Commands";
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

  protected onKeyDown(ev: KeyboardEvent): void {
    /** Ctrl + C */
    if (ev.ctrlKey && ev.code === "KeyC") {
      ev.preventDefault();
      const command = new CopyCommand(this, this.editor);
      this.executeCommand(command);
    }

    /** Ctrl + V */
    if (ev.ctrlKey && ev.code === "KeyV") {
      ev.preventDefault();
      const command = new PasteCommand(this, this.editor);
      this.executeCommand(command);
    }

    /** Ctrl + Z */
    if (ev.ctrlKey && ev.code === "KeyZ") {
      ev.preventDefault();
      const command = new UndoCommand(this, this.editor);
      this.executeCommand(command);
    }
  }

  listenKeyBoard(): void {
    document.addEventListener("keydown", this.onKeyDown.bind(this));
  }

  unsubcsribeFromKeyBoard(): void {
    document.removeEventListener("keydown", this.onKeyDown.bind(this));
  }

  executeCommand(command: Command, ...args: any[]) {
    if (command.execute(args)) {
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
