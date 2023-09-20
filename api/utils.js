const reply = (res, body, timeout = 1000, status = 200) =>
  setTimeout(() => {
    res.status(status).json(body);
  }, timeout);

const getById = (entities) => (id) =>
  entities.find((entity) => entity.id === id);

function findItemById(id, data) {
    for (const key in data) {
      if (Array.isArray(data[key])) {
        for (const item of data[key]) {
          if (item.id === id) {
            return item;
          }
        }
      } else if (typeof data[key] === 'object') {
        const result = findItemById(id, data[key]);
        if (result) {
          return result;
        }
      }
    }
  
    return null;
}

function flattenItems(data) {


  const result = [];
  if (Array.isArray(data)){
    result.push(...data);
  }

  else{
    for (const key in data) {
      if (Array.isArray(data[key])) {
        result.push(...data[key]);
      } 
      else if (typeof data[key] === 'object') {
        const nestedItems = flattenItems(data[key]);
        result.push(...nestedItems);
      }
    }
  }


  return result;
}

  

module.exports = { reply, getById, findItemById, flattenItems };
