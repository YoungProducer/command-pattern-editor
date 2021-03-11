import { Command } from "./Command";

export class CommandsHistory {
  protected commands: Command[] = [];

  push(command: Command): void {
    this.commands.push(command);
  }

  pop(): Command | undefined {
    return this.commands.pop();
  }
}
