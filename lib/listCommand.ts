import { Command } from "@commander-js/extra-typings";

export class ListCommand extends Command {

  constructor(name: string) {
    super(name);
    this.action(async () => {
      await this.execute();
    });

  }

  private async execute() {
    console.log("list program");
  }
}