"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a PrettyLog instance with the given configuration.
 * @param {PrettyLogConfig} config - The configuration for the PrettyLog instance.
 * @returns {PrettyLogMethods} An object with methods for pretty logging.
 */
function prettyLog(config) {
    var currentConfig = __assign({}, config);
    /**
     * Checks if logging is currently enabled.
     * @returns {boolean} True if logging is enabled, false otherwise.
     */
    function isEnabled() {
        return currentConfig.enabled;
    }
    /**
     * Checks if a value is empty (null, undefined, or empty string).
     * @param {any} value - The value to check.
     * @returns {boolean} True if the value is empty, false otherwise.
     */
    function isEmpty(value) {
        return value == null || value === undefined || value === '';
    }
    /**
     * Prints a formatted message to the console.
     * @param {string} title - The title of the message.
     * @param {string} text - The main content of the message.
     * @param {string} color - The color to use for formatting.
     */
    function prettyPrint(title, text, color) {
        if (!isEnabled())
            return;
        console.log("%c ".concat(title, " %c ").concat(text, " %c"), "background:".concat(color, ";border:1px solid ").concat(color, "; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;"), "border:1px solid ".concat(color, "; padding: 1px; border-radius: 0 2px 2px 0; color: ").concat(color, ";"), 'background:transparent');
    }
    /**
     * Logs an info message.
     * @param {string} textOrTitle - The message or title to log.
     * @param {string} [content=''] - Optional content if textOrTitle is used as a title.
     */
    function info(textOrTitle, content) {
        if (content === void 0) { content = ''; }
        var title = isEmpty(content) ? 'Info' : textOrTitle;
        var text = isEmpty(content) ? textOrTitle : content;
        prettyPrint(title, text, '#909399');
    }
    /**
     * Logs an error message.
     * @param {string} textOrTitle - The error message or title to log.
     * @param {string} [content=''] - Optional content if textOrTitle is used as a title.
     */
    function error(textOrTitle, content) {
        if (content === void 0) { content = ''; }
        var title = isEmpty(content) ? 'Error' : textOrTitle;
        var text = isEmpty(content) ? textOrTitle : content;
        prettyPrint(title, text, '#F56C6C');
    }
    /**
     * Logs a warning message.
     * @param {string} textOrTitle - The warning message or title to log.
     * @param {string} [content=''] - Optional content if textOrTitle is used as a title.
     */
    function warn(textOrTitle, content) {
        if (content === void 0) { content = ''; }
        var title = isEmpty(content) ? 'Warn' : textOrTitle;
        var text = isEmpty(content) ? textOrTitle : content;
        prettyPrint(title, text, '#E6A23C');
    }
    /**
     * Logs a success message.
     * @param {string} textOrTitle - The success message or title to log.
     * @param {string} [content=''] - Optional content if textOrTitle is used as a title.
     */
    function success(textOrTitle, content) {
        if (content === void 0) { content = ''; }
        var title = isEmpty(content) ? 'Success' : textOrTitle;
        var text = isEmpty(content) ? textOrTitle : content;
        prettyPrint(title, text, '#67C23A');
    }
    /**
     * Enables or disables logging.
     * @param {boolean} enabled - Whether to enable or disable logging.
     */
    function setEnabled(enabled) {
        currentConfig.enabled = enabled;
    }
    return {
        info: info,
        error: error,
        warn: warn,
        warning: warn,
        success: success,
        log: info,
        setEnabled: setEnabled
    };
}
exports.default = prettyLog;
