function objectToMap(object) {
    let myMap = new Map();
  
    for (let [key, value] of Object.entries(object)) {
      if (Object.prototype.toString.call(value) === '[object Object]') {
          value = objectToMap(value);
      } else if (Array.isArray(value)) {
        value = value.map(item => 
          Object.prototype.toString.call(item) === '[object Object]' 
            ? objectToMap(item) 
            : item               
        );
      }
      myMap.set(key, value);
    } 
  
    return myMap;
}