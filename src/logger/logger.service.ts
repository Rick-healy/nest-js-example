import { Injectable } from '@nestjs/common';

// Define our own LogLevel type
type LogLevel = 'error' | 'warn' | 'log' | 'debug' | 'verbose';

interface LogEntry {
  timestamp: string;
  level: string;
  message: string;
  context?: string;
  trace?: string;
}

@Injectable()
export class LoggerService {
  private readonly logLevels: LogLevel[] = ['error', 'warn', 'log', 'debug', 'verbose'];

  constructor() {}

  log(message: string, context?: string): void {
    this.printMessage(message, 'log', context);
  }

  error(message: string, trace?: string, context?: string): void {
    this.printMessage(message, 'error', context, trace);
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

  private printMessage(message: string, level: LogLevel, context?: string, trace?: string): void {
    const logEntry: LogEntry = {
      timestamp: new Date().toISOString(),
      level: this.mapLogLevel(level),
      message,
      context
    };
    
    if (trace) {
      logEntry.trace = trace;
    }
    
    const jsonLog = JSON.stringify(logEntry);
    
    switch (level) {
      case 'error':
        console.error(jsonLog);
        break;
      case 'warn':
        console.warn(jsonLog);
        break;
      case 'log':
        console.log(jsonLog);
        break;
      case 'debug':
        console.debug(jsonLog);
        break;
      case 'verbose':
        console.log(jsonLog);
        break;
      default:
        console.log(jsonLog);
    }
  }
  
  private mapLogLevel(level: LogLevel): string {
    switch (level) {
      case 'log':
        return 'INFO';
      case 'error':
        return 'ERROR';
      case 'warn':
        return 'WARN';
      case 'debug':
        return 'DEBUG';
      case 'verbose':
        return 'VERBOSE';
      default:
        return 'UNKNOWN';
    }
  }
}