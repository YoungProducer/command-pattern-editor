import { Application } from "../Application";
import { getSelection } from "../utils";

export class Editor {
  protected app!: Application;
  protected textarea!: HTMLTextAreaElement;
  protected text: string;
  protected selection: string = "";

  constructor(defaultText: string = "") {
    this.text = defaultText;
  }

  checkSelection(): void {
    if (!this.textarea) return;

    if (!getSelection(this.textarea)) {
      this.clearSelection();
    }
  }

  updateSelection(): void {
    if (!this.textarea) return;

    const selectedText = getSelection(this.textarea);

    if (!selectedText) return;

    this.selection = selectedText;
  }

  pasteSelection(): void {
    if (!this.textarea) return;

    const selectionStart = Math.min(
      this.textarea.selectionStart,
      this.textarea.selectionEnd
    );
    const selectionEnd = Math.max(
      this.textarea.selectionStart,
      this.textarea.selectionEnd
    );

    const left = this.text.slice(0, selectionStart);
    const right = this.text.slice(selectionEnd, this.text.length);

    const text = `${left}${this.app.getClipboard()}${right}`;

    this.text = text;

    this.textarea.value = text;
  }

  setTextArea(textarea: HTMLTextAreaElement): void {
    this.textarea = textarea;
  }

  getTextArea(): HTMLTextAreaElement {
    return this.textarea;
  }

  clearSelection(): void {
    this.selection = "";
    // navigator.clipboard.writeText("");
  }

  setSelection(selection: string): void {
    this.selection = selection;
    // navigator.clipboard.writeText(selection);
  }

  getSelection(): string {
    return this.selection;
  }

  setText(text: string): void {
    this.text = text;
  }

  getText(): string {
    return this.text;
  }

  setApp(app: Application): void {
    this.app = app;
  }

  getApp(): Application {
    return this.app;
  }
}
