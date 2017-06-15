import { MongoClient, Db } from 'mongodb';
import debug from 'debug';

const error = debug('mongo-use-collection:error');
const info = debug('mongo-use-collection:info');
export const useCollection = async (
  urlOrDb,
  collectionName,
  success,
  fail = () => {}
) => {
  let result = null;
  try {
    let db;
    let needCloseDb = false;
    if (urlOrDb instanceof Db) {
      db = urlOrDb;
    } else {
      db = await MongoClient.connect(urlOrDb);
      needCloseDb = true;
      info('connected to ', urlOrDb);
    }
    db.on('error', e => {
      error(e.message);
    });
    const col = db.collection(collectionName);
    result = await success(col, db);
    if (needCloseDb) db.close();
  } catch (e) {
    error(e.message);
    error(e.stack);
    fail(e);
  } finally {
    info('result:', result);
    return result;
  }
};
