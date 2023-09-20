const router = require("express").Router();
const { items } = require("./mock");

const { reply, getById, findItemById, flattenItems } = require("./utils");

router.get('/items', (req, res, next) => {
  const { cat, sub, subsub } = req.query;
  
  let result;

  if(cat && !sub && !subsub){
    result = flattenItems(items[cat]);
  }

  else if(cat && sub && !subsub){
    result = flattenItems(items[cat][sub]);
  }

  else if(cat && sub && subsub){
    result = items[cat][sub][subsub];
  }

  else if(!cat && !sub && !subsub){
    result = flattenItems(items);
  }

  reply(res, result, 0, 200);
})

router.get("/item", (req, res, next) => {
  const {itemId} = req.query;

  let result = items;

  if(itemId){
    result = findItemById(itemId,items)
  }

  reply(res, result);
})

module.exports = router;
