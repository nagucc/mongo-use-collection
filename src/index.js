import { MongoClient } from 'mongodb';

export const useCollection = async (url, collectionName, success,
  fail = () => console.log('userCollection: FAILED')) => { // eslint-disable-line no-console
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
