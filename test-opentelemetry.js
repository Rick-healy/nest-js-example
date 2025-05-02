console.log('Starting OpenTelemetry test...');
console.log('Make sure your APPLICATIONINSIGHTS_CONNECTION_STRING environment variable is set');

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Prompt for connection string if not provided
let connectionString = process.env.APPLICATIONINSIGHTS_CONNECTION_STRING;

if (!connectionString) {
  console.warn('Warning: APPLICATIONINSIGHTS_CONNECTION_STRING environment variable is not set.');
  console.warn('The application will run without telemetry. Set a valid connection string to enable telemetry.');
  connectionString = ''; // Don't use a placeholder as it will cause errors
} else {
  console.log('Using connection string starting with:', connectionString.substring(0, 15) + '...');
}

// Since npm is only installed in WSL, we'll use WSL to run the application
try {
  console.log('Launching NestJS application with WSL...');
  
  // Use wsl.exe to run the NestJS application in WSL
  const projectPath = '/mnt/c/Users/richardhealy/devcust/devpl/nest-js-example';
  
  // Command to run in WSL: cd to project directory, export connection string, then run npm
  const wslCommand = `cd ${projectPath} && export APPLICATIONINSIGHTS_CONNECTION_STRING="${connectionString}" && npm run start:dev`;
  
  console.log(`Running in WSL: cd ${projectPath} && export APPLICATIONINSIGHTS_CONNECTION_STRING="..." && npm run start:dev`);
  
  // Start the NestJS application in WSL
  const childProcess = spawn('wsl', [wslCommand], {
    stdio: 'inherit'
  });

  childProcess.on('error', (err) => {
    console.error('Failed to start application:', err);
    console.log('\nIf you\'re using WSL, please run the following commands in your WSL terminal:');
    console.log('cd /mnt/c/Users/richardhealy/devcust/devpl/nest-js-example');
    console.log('export APPLICATIONINSIGHTS_CONNECTION_STRING="your-connection-string"');
    console.log('npm run start:dev');
  });

  // Handle process exit
  childProcess.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
    if (code !== 0) {
      console.log('\nIf you\'re using WSL, please run the following commands in your WSL terminal:');
      console.log('cd /mnt/c/Users/richardhealy/devcust/devpl/nest-js-example');
      console.log('export APPLICATIONINSIGHTS_CONNECTION_STRING="your-connection-string"');
      console.log('npm run start:dev');
    }
  });
} catch (error) {
  console.error('Error running npm:', error);
  console.log('\nIf you\'re using WSL, please run the following commands in your WSL terminal:');
  console.log('cd /mnt/c/Users/richardhealy/devcust/devpl/nest-js-example');
  console.log('export APPLICATIONINSIGHTS_CONNECTION_STRING="your-connection-string"');
  console.log('npm run start:dev');
}
