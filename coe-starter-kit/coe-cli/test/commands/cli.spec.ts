"use strict";
import { CLIArguments, CLICommand } from '../../src/commands/cli';
import * as fs from 'fs'
import { promisify } from 'util';
import winston from 'winston';
import { mock } from 'jest-mock-extended';
const readFile = promisify(fs.readFile);

jest.setTimeout(50000);
            
describe('Add', () => {
    test('Default', async () => {
        // Arrange
        let logger = mock<winston.Logger>()

        var command = new CLICommand(logger);
        let args = new CLIArguments();
        command.writeFile = async (name: string, content: string) : Promise<void> => { Promise.resolve() }

        args.name = "Sample"
    
        // Act
        
        await command.add(args)

        // Assert
    })
});
