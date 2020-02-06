// Use this presets array inside your presetHandler
const presets = require('./presets');

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
  if(requestType === 'GET'){
    let preset = getPreset(index);
    if(preset){
      return [200, preset];
    } else {
      return [404];
    }
  } else if(requestType === 'PUT'){
    const newPreset = createOrUpdatePreset(index, newPresetArray);
    if (newPreset) {
      return [200, newPreset];
    } else {
      return [404];
    }
  } else {
    return [400];
  }
};

module.exports = presetHandler;
