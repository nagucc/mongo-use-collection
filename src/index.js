import {MongoClient} from 'mongodb';

export const useCollection = async (url, collectionName, cb) => {
  let db = await MongoClient.connect(url);
  let col = db.collection(collectionName);
  let result = await cb(col, db);
  db.close();
  return result;
}
