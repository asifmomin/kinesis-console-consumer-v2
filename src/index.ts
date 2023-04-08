#!/usr/bin/env node
"use strict";
import { Command } from "@commander-js/extra-typings";
import { ListCommand } from "./listcommand";
import { Logger } from "./logger";

const listCommand = new ListCommand('list', new Logger()).alias('l').description('list all streams and exit');
export const program = new Command()
  .addCommand(listCommand)
  .parse(process.argv);

const options = program.opts(); // smart type

