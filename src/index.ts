import prettyLog, { PrettyLogConfig } from './prettyLog';

type PrettyLogger = ReturnType<typeof prettyLog>;

const createPrettyLog = (config: PrettyLogConfig): PrettyLogger => {
  return prettyLog(config);
};

export default createPrettyLog;
