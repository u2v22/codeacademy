// Drum Arrays
let kicks = Array(16).fill(false);
let snares = Array(16).fill(false);
let hiHats = Array(16).fill(false);
let rideCymbals = Array(16).fill(false);

const clear = (soundName) => {
  switch(soundName){
    case 'kicks':
      return kicks.fill(false);
    case 'snares':
      return snares.fill(false);
    case 'hiHats':
      return hiHats.fill(false);
    case 'rideCymbals':
      return rideCymbals.fill(false);
  }
}

function toggleDrum(soundType, index){ // ('string' ex: kicks, index )
// check indexes
  if(index < 0 || index > 15){
    return;
  }
  if (soundType == null){
    return;
  }
  switch(soundType){
    case 'kicks':
      return kicks[index] = !kicks[index];
    case 'snares':
      return snares[index] = !snares[index];
    case 'hiHats':
      return hiHats[index] = !hiHats[index];
    case 'rideCymbals':
      return rideCymbals[index] = !rideCymbals[index];
    default:
      return;
  }
}

const invert = (soundType) => {
  if (soundType == null){
    return;
  }
  switch(soundType){
    case 'kicks':
      console.log('got here');
      return kicks = kicks.map(value => !value);
    case 'snares':
      return snares = snares.map(value => !value);
    case 'hiHats':
      return hiHats = hiHats.map(value => !value);
    case 'rideCymbals':
      return rideCymbals = rideCymbals.map(value => !value);
    default:
      return;
  }
}
