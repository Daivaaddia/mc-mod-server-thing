export interface DbObjectType {
  logs: string[];
}

const db: DbObjectType = {
  logs: [],
};

export function dbReadLogs() {
    return db.logs;
}

export function dbUpdateLogs(newLogs: string[]) {
    db.logs = newLogs;
}