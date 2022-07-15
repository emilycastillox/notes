// source: https://dmitripavlutin.com/how-to-iterate-easily-over-object-properties-in-javascript/

// ********* Get Property Values using Object.values()
// ********* Get property key/value pairs using Object.entries()

// Object.keys() accesses only the objects own and enumerable properties

let simpleColors = {
    colorA: 'white',
    colorB: 'black'
};
let natureColors = {
    colorC: 'green',
    colorD: 'yellow'
};
Object.setPrototypeOf(natureColors, simpleColors);
Object.keys(natureColors); // => ['colorC', 'colorD']
natureColors['colorA']; // => 'white'
natureColors['colorB']; // => 'black'

// ...
Object.values(natureColors);
// => ['green', 'yellow']
Object.entries(natureColors); // returns key value pairs
// => [['colorC', 'green'], ['colorD', 'yellow']]

// ***** for ... in loop statement - loop iterates over enumerable, own and inherited properties like:

let enumerableKeys = [];
for (let key in natureColors){
    enumerableKeys.push(key);
}
enumerableKeys; // => ['colorC', 'colorD', 'colorA', 'colorB']
// enumerableKeys array contains natureColors own properties keys: 'colorC' and 'colorD', the for..in loop also iterated over the property keys inherited from simpleColors prototype object (colorA, colorB)

// get an object's property pre ES2017

let meals = {
    mealA: 'Breakfast',
    mealB: 'Lunch',
    mealC: 'Dinner'
};
for (let key of Object.keys(meals)){
    let mealName = meals[key]
    // ... do something with mealName
    console.log(mealName)
}
// 'Breakfast' 'Lunch' 'Dinner'

//meals is a regular plain JavaScript object. The object keys are taken using Object.keys(meals) and in a for..of loop enumerated.

// optimize by removing let mealName = meals[key].The optimization is possible by applying direct access to object property values using Object.values().

let meals = {
    mealA: 'Breakfast',
    mealB: 'Lunch',
    mealC: 'Dinner'
  };

for (let mealName of Object.values(meals)){
    console.log(mealName)
}
//// 'Breakfast' 'Lunch' 'Dinner'

// *** KEY POINT: Object.values(meals) returns the object property values in an array, the whole task reduces to a compact for..of loop. mealName is assigned directly in the loop


// *** Object.entries() returns key value pairs

let meals = {
    mealA: 'Breakfast',
    mealB: 'Lunch',
    mealC: 'Dinner'
  };

  for (let [key, value] of Object.entries(meals)){
    console.log(key + ':' + value);
  }

  // 'mealA:Breakfast' 'mealB:Lunch' 'mealC:Dinner'

  // Object.entries() is helpful when a plain object should be imported into a Map. returns a format exactly that Map constructor accepts: key and value pairs.

  let greetings = {
    morning: 'Good morning',
    midday: 'Good day',
    evening: 'Good evening'
  };


  let greetingsMap = new Map(Object.entries(greetings));
  greetingsMap.get('morning'); // => 'Good morning'
  greetingsMap.get('midday'); // => 'Good day'
  greetingsMap.get('evening'); // => 'Good evening'

  // As expected the map instance greetingsMap contains properties imported from greetings object. These can be accessed using .get(key) method.

  // Maps are an improved version of plain objects. You can get the size of a map (for a plain object you have to do it manually) and use as key any object type 

// ...
[...greetingsMap.values()];
// => ['Good morning', 'Good day', 'Good evening']
[...greetingsMap.entries()];
// => [ ['morning', 'Good morning'], ['midday', 'Good day'], 
//      ['evening', 'Good evening'] ]
