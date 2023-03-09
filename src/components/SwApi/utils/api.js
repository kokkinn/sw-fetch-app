import uuid from "react-uuid";
const getData = async (showType, errorCallback) => {
  let resp = null;
  let dlist = [];
  for (let i = 4; i < 14; i++) {
    resp = await fetch(`https://swapi.dev/api/${showType}/${i}/`);
    if (resp.ok) {
      let data = await resp.json();
      data.uuid = uuid();
      dlist.push(data);
    } else {
      errorCallback();
    }
  }
  return dlist;
};

export { getData };
