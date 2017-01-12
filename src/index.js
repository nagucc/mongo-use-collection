import { MongoClient } from 'mongodb';

export const useCollection = async (url, collectionName, success,
  fail = e => {
     /* eslint-disable no-console */
    console.log('[useCollection: FAILED]');
    console.log(e.message);
    console.log(e.stack);
  }) => {
  let result = null;
  try {
    const db = await MongoClient.connect(url);
    const col = db.collection(collectionName);
    result = await success(col, db);
    db.close();
  } catch (e) {
    fail(e);
  } finally {
    return result;
  }
};
