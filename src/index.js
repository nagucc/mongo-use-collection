import { MongoClient } from 'mongodb';
import debug from 'debug';

const error = debug('mongo-use-collection:error');
export const useCollection = async (
  url,
  collectionName,
  success,
  fail = () => {}
) => {
  let result = null;
  try {
    const db = await MongoClient.connect(url);
    const col = db.collection(collectionName);
    result = await success(col, db);
    db.close();
  } catch (e) {
    error(e.message);
    error(e.stack);
    fail(e);
  } finally {
    return result;
  }
};
