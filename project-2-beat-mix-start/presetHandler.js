// Use this presets array inside your presetHandler
const presnewPresetArrayets = require('./presets');

// Complete this function:

const getPreset = (index) => {
  return presets[index] || null;
}

const createOrUpdatePreset = (index, array) => {
  if (!presets[index]){
    return;
  }
  presets[index] = array;
  return presets[index];
}

const presetHandler = (requestType, index, newPresetArray) => {
  if(index < 0 || index > 15){
    return array.shift(404);
  }
  if(requestType != 'GET' || requestType !='PUT'){
    return array.shift(400);
  }
  if(requestType === 'GET')
  return ; // will have one or two elements depending on how it is called.
};
// Return an array.shift(200)
// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;


// DONE
// The second argument is the array index of the presets array. For 'PUT' requests,

// DONE
//a third argument, newPresetArray will also be passed in, representing the new drum preset array to save at that index.


// DONE
//If presetHandler is called with an invalid index, it should return an array with 404 as the first element, meaning that that array index is Not Found. If index is valid, the first element of the return array should be 200, meaning the request was OK.

// DONE
// If presetHandler is called a method that is not 'GET' or 'PUT', it should return an array with 400 as the first element, meaning that it was a Bad Request.

// If the index was valid, presetHandler should also return a second element in the array. for 'GET' requests, that element should be the preset array at that array index. For 'PUT' requests, it should save the newPresetArray to that index and then also return it as the second element.



// If you are testing presets with the app itself, you will need to stop and re-start your server to see the changes you write in presetHandler.js take effect.
