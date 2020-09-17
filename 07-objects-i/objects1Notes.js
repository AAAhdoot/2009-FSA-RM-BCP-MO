//objects example e-commerce site
const shoesList = [
  {
    name: 'nike air max', 
    price: 300, 
    color: 'black', 
    id: 1
  }, 
  {
    name: 'nike air max', 
    price: 300, 
    color: 'gray', 
    id: 2
  }, 
  {
    name: 'nike air max', 
    price: 300, 
    color: 'white', 
    id: 3
  }
]

//accessing a value via square bracket -- allows for use of variables to access keys (can still pass in hardcoded string)
const keyToAccess = 'price'
const blackNikeAirMaxPrice = shoesList[0][keyToAccess]; //300
const blackNikeAirMaxPrice2 = shoesList[0]['price']; //300

//access via dot notation - no variables allowed -- key must be provided verbatim

const blackNikeAirMaxPrice3 = shoesList[0].price; //300


//adding a key/value pair via both dot and square bracket

shoesList[0]['category'] = 'casual';
shoesList[0].onSale = false;

//mutating value
shoesList[0]['color'] = 'charcoal black'
shoesList[0].color = 'jet black'

//delete key-value value
delete shoesList[0]['category'];
delete shoesList[0].onSale;

//get all keys of object and log the values

for (key in shoesList[0]) { 
  console.log('shoe property: ', key)
  console.log('shoe value: ', shoes[0][key])
}

//get all keys of an object in an array

Object.keys(shoesList[0]) //['color', 'price', 'name', 'id']

//access nested object

const rareShoe = { 
  name: 'rareShoe', 
  brand: 'nike',
  owner: { 
    name: 'MrRareShoeMan', 
    isVipMember: true, 
    memberDate: '1/1/1985'
  }
}

rareShoe.owner.name //MrRareShoeMan;
