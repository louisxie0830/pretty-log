/**
 * Configuration interface for PrettyLog.
 */
export interface PrettyLogConfig {
  /** Determines whether logging is enabled. */
  enabled: boolean;
}

/**
 * Interface defining the methods available in the PrettyLog object.
 */
export interface PrettyLogMethods {
  /**
   * Logs an info message.
   * @param {string} textOrTitle - The message or title to log.
   * @param {string} [content] - Optional content if textOrTitle is used as a title.
   */
  info(textOrTitle: string, content?: string): void;

  /**
   * Logs an error message.
   * @param {string} textOrTitle - The error message or title to log.
   * @param {string} [content] - Optional content if textOrTitle is used as a title.
   */
  error(textOrTitle: string, content?: string): void;

  /**
   * Logs a warning message.
   * @param {string} textOrTitle - The warning message or title to log.
   * @param {string} [content] - Optional content if textOrTitle is used as a title.
   */
  warn(textOrTitle: string, content?: string): void;

  /**
   * Alias for warn method.
   * @param {string} textOrTitle - The warning message or title to log.
   * @param {string} [content] - Optional content if textOrTitle is used as a title.
   */
  warning(textOrTitle: string, content?: string): void;

  /**
   * Logs a success message.
   * @param {string} textOrTitle - The success message or title to log.
   * @param {string} [content] - Optional content if textOrTitle is used as a title.
   */
  success(textOrTitle: string, content?: string): void;

  /**
   * Alias for info method.
   * @param {string} textOrTitle - The message or title to log.
   * @param {string} [content] - Optional content if textOrTitle is used as a title.
   */
  log(textOrTitle: string, content?: string): void;

  /**
   * Enables or disables logging.
   * @param {boolean} enabled - Whether to enable or disable logging.
   */
  setEnabled(enabled: boolean): void;
}

/**
 * Creates a PrettyLog instance with the given configuration.
 * @param {PrettyLogConfig} config - The configuration for the PrettyLog instance.
 * @returns {PrettyLogMethods} An object with methods for pretty logging.
 */
function prettyLog(config: PrettyLogConfig): PrettyLogMethods {
  const currentConfig = { ...config };

  /**
   * Checks if logging is currently enabled.
   * @returns {boolean} True if logging is enabled, false otherwise.
   */
  function isEnabled(): boolean {
    return currentConfig.enabled;
  }

  /**
   * Checks if a value is empty (null, undefined, or empty string).
   * @param {any} value - The value to check.
   * @returns {boolean} True if the value is empty, false otherwise.
   */
  function isEmpty(value: any): boolean {
    return value == null || value === undefined || value === '';
  }

  /**
   * Prints a formatted message to the console.
   * @param {string} title - The title of the message.
   * @param {string} text - The main content of the message.
   * @param {string} color - The color to use for formatting.
   */
  function prettyPrint(title: string, text: string, color: string): void {
    if (!isEnabled()) return;
    console.log(
      `%c ${title} %c ${text} %c`,
      `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,
      `border:1px solid ${color}; padding: 1px; border-radius: 0 2px 2px 0; color: ${color};`,
      'background:transparent'
    );
  }

  /**
   * Logs an info message.
   * @param {string} textOrTitle - The message or title to log.
   * @param {string} [content=''] - Optional content if textOrTitle is used as a title.
   */
  function info(textOrTitle: string, content = ''): void {
    const title = isEmpty(content) ? 'Info' : textOrTitle;
    const text = isEmpty(content) ? textOrTitle : content;
    prettyPrint(title, text, '#909399');
  }

  /**
   * Logs an error message.
   * @param {string} textOrTitle - The error message or title to log.
   * @param {string} [content=''] - Optional content if textOrTitle is used as a title.
   */
  function error(textOrTitle: string, content = ''): void {
    const title = isEmpty(content) ? 'Error' : textOrTitle;
    const text = isEmpty(content) ? textOrTitle : content;
    prettyPrint(title, text, '#F56C6C');
  }

  /**
   * Logs a warning message.
   * @param {string} textOrTitle - The warning message or title to log.
   * @param {string} [content=''] - Optional content if textOrTitle is used as a title.
   */
  function warn(textOrTitle: string, content = ''): void {
    const title = isEmpty(content) ? 'Warn' : textOrTitle;
    const text = isEmpty(content) ? textOrTitle : content;
    prettyPrint(title, text, '#E6A23C');
  }

  /**
   * Logs a success message.
   * @param {string} textOrTitle - The success message or title to log.
   * @param {string} [content=''] - Optional content if textOrTitle is used as a title.
   */
  function success(textOrTitle: string, content = ''): void {
    const title = isEmpty(content) ? 'Success' : textOrTitle;
    const text = isEmpty(content) ? textOrTitle : content;
    prettyPrint(title, text, '#67C23A');
  }

  /**
   * Enables or disables logging.
   * @param {boolean} enabled - Whether to enable or disable logging.
   */
  function setEnabled(enabled: boolean): void {
    currentConfig.enabled = enabled;
  }

  return {
    info,
    error,
    warn,
    warning: warn,
    success,
    log: info,
    setEnabled,
  };
}

export default prettyLog;
