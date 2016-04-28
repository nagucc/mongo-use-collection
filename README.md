# mongo-use-collection
一个简单的函数，用户连接mongodb服务器，并使用指定的集合。
当我们需要使用一个集合时，不再需要连接数据库、获取集合、操作、关闭连接这样的一堆操作。

## Example

```
import {useCollection} from 'mongo-use-collection';

const useCol = cb => useCollection(mongoUrl, collectionName, cb);
const getStatResultByYear = async () => {
  return useCol(async col => {
    return col.find().toArray()
  });
}

try {
  const result = await getStatResultByYear();
  console.log(result);
} catch(e){
  console.log('Error:', e);
}

```

## Build

代码使用ES6语法，如果你fork了代码，当你需要重新发布时，务必运行`npm run build`重新编译脚本。
