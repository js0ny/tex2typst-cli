#!/usr/bin/env node

import { tex2typst, typst2tex } from 'tex2typst';
import { program } from 'commander';
import fs from 'fs';

// Define the program
program
  .name('tex2typst-cli')
  .description('Convert between TeX and Typst notation')
  .version('1.0.0')
  .option('-i, --input <type>', 'input type (tex|typst)', 'tex')
  .option('-o, --output <file>', 'output to file instead of stdout')
  .argument('<string>', 'string to convert or path to file with @ prefix')
  .action((str, options) => {
    let input = str;
    
    // Check if input is a file path (starting with @)
    if (str.startsWith('@')) {
      const filepath = str.substring(1);
      try {
        input = fs.readFileSync(filepath, 'utf8');
      } catch (error: unknown) {
        console.error(`Error reading file: ${error instanceof Error ? error.message : String(error)}`);
        process.exit(1);
      }
    }
    
    let result: string;
    
    // Convert based on input type
    if (options.input === 'tex') {
      result = tex2typst(input);
    } else if (options.input === 'typst') {
      result = typst2tex(input);
    } else {
      console.error(`Invalid input type: ${options.input}. Use 'tex' or 'typst'.`);
      process.exit(1);
    }
    
    // Output result
    if (options.output) {
      try {
        fs.writeFileSync(options.output, result);
        console.log(`Output written to ${options.output}`);
      } catch (error: unknown) {
        console.error(`Error writing to file: ${error instanceof Error ? error.message : String(error)}`);
        process.exit(1);
      }
    } else {
      console.log(result);
    }
  });

program.parse();
