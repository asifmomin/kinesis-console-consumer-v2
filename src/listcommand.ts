import { Command } from "@commander-js/extra-typings";
import { KinesisClient, ListStreamsCommand } from "@aws-sdk/client-kinesis";
import {Logger} from "./logger";

export class ListCommand extends Command {
  private logger: Logger;

  constructor(name: string,logger:Logger) {
    super(name);
    this.logger = logger;
    this.action(async () => {
      await this.execute();
    });

  }

   async execute() {
     const client = new KinesisClient({ });
     const listStreamsCommand = new ListStreamsCommand({});
     const response =  await client.send(listStreamsCommand)
     this.logger.log(response.StreamNames);
  }
}