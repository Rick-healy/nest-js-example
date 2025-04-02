import { Injectable } from '@nestjs/common';

// Define our own LogLevel type
type LogLevel = 'error' | 'warn' | 'log' | 'debug' | 'verbose';

@Injectable()
export class LoggerService {
  private readonly logLevels: LogLevel[] = ['error', 'warn', 'log', 'debug', 'verbose'];

  constructor() {}

  log(message: string, context?: string): void {
    this.printMessage(message, 'log', context);
  }

  error(message: string, trace?: string, context?: string): void {
    this.printMessage(message, 'error', context);
    if (trace) {
      console.error(trace);
    }
  }

  warn(message: string, context?: string): void {
    this.printMessage(message, 'warn', context);
  }

  debug(message: string, context?: string): void {
    this.printMessage(message, 'debug', context);
  }

  verbose(message: string, context?: string): void {
    this.printMessage(message, 'verbose', context);
  }

  private printMessage(message: string, level: LogLevel, context?: string): void {
    const timestamp = new Date().toISOString();
    const contextMessage = context ? `[${context}]` : '';
    
    switch (level) {
      case 'error':
        console.error(`${timestamp} ${contextMessage} [ERROR] ${message}`);
        break;
      case 'warn':
        console.warn(`${timestamp} ${contextMessage} [WARN] ${message}`);
        break;
      case 'log':
        console.log(`${timestamp} ${contextMessage} [INFO] ${message}`);
        break;
      case 'debug':
        console.debug(`${timestamp} ${contextMessage} [DEBUG] ${message}`);
        break;
      case 'verbose':
        console.log(`${timestamp} ${contextMessage} [VERBOSE] ${message}`);
        break;
      default:
        // Using string concatenation instead of template literals with toUpperCase
        console.log(`${timestamp} ${contextMessage} [UNKNOWN] ${message}`);
    }
  }
}