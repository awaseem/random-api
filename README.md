# random-api

A simple RESTful API created for front end projects or for learning purposes.

## API End Points

Return all items in the database
```
GET api.aliwaseeem.com/api
```

Adds a new item to the database based on the parameters
```
POST api.aliwaseem.com/api/item

parameters: {
  name: required 
  description: required
  price: required
}
```

Updates an item based on the parameters
```
PUT api.aliwaseem.com/api/item/{item_id}

parameters: {
  name: optional 
  description: optional
  price: optional
}
```

Removes an item from the database
```
DELETE api.aliwaseem.com/api/item/{item_id}
```

#TODO

Remove /api from the URL

add filter endpoints
