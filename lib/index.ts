#!/usr/bin/env node
"use strict";
import { Command } from "@commander-js/extra-typings";
import { ListCommand } from "./listCommand";

let listCommand = new ListCommand('list').alias('l').description('list all streams and exit');
const program = new Command()
  .addCommand(listCommand)
  .parse(process.argv);

const options = program.opts(); // smart type

