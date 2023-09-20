# Simple server
Created alongside with my tea house website project

## Prerequisites 
- node
- npm

## Run locally

- clone the repository
- go to repository
```
cd /simple_server
```
- run server
```
node server.js
```

By default it runs on http://localhost:3001

## Endpoints

Get one item by id:

http://localhost:3001/api/item?itemId={item id}

Get all items:

http://localhost:3001/api/items

Get items in certain category/subcategory/subsubcategory:

http://localhost:3001/api/items?cat={main category}&sub={subcategory}&subsub={subsubcategory}
> http://localhost:3001/api/items?cat=chinese_tea&sub=puerh&subsub=black
> 
if any of the categories is omitted, you will get all the items in parent category

x
