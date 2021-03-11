import { Application } from "../../Application";
import { Editor } from "../../Editor";

export class Command {
  protected app: Application;
  protected editor: Editor;
  protected backup: string;

  constructor(app: Application, editor: Editor) {
    this.app = app;
    this.editor = editor;
  }

  saveBackup(): void {
    this.backup = this.editor.getText();
  }

  execute(): boolean {
    return true;
  }

  undo(): void {
    this.editor.setText(this.backup);
  }
}
