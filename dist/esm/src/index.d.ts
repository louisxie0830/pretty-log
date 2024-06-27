import prettyLog, { PrettyLogConfig } from './prettyLog';
type PrettyLogger = ReturnType<typeof prettyLog>;
declare const createPrettyLog: (config: PrettyLogConfig) => PrettyLogger;
export default createPrettyLog;
