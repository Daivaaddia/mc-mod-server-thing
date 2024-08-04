import { dbReadLogs, dbUpdateLogs } from "./db";

function getLogs() {
    return {
        logs: dbReadLogs()
    }
}

function addLog(log: string) {
  const logs = dbReadLogs();
  logs.push(log);
  dbUpdateLogs(logs);

  return {};
}

export { addLog, getLogs};
