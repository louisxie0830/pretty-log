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
declare function prettyLog(config: PrettyLogConfig): PrettyLogMethods;
export default prettyLog;
