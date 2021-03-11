export class Editor {
  protected text: string;
  protected selection: string = "";

  constructor(defaultText: string = "") {
    this.text = defaultText;
  }

  clearSelection(): void {
    this.selection = "";
    navigator.clipboard.writeText("");
  }

  setSelection(selection: string): void {
    this.selection = selection;
    navigator.clipboard.writeText(selection);
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
}
