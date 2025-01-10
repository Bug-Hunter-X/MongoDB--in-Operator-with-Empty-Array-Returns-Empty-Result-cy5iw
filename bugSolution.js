```javascript
//Correct usage of $in operator when empty array possible
db.collection.find({$or: [{field: {$in: someArray}}, {field: {$exists: false}}]});
```