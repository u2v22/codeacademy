// Returns a random DNA base
const survivingpAequor = [];

const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const randomMutate = (currentRandBase) => {
  let newRandBase = returnRandBase();
  while (newRandBase === currentRandBase) {
    newRandBase = returnRandBase();
  }
  return newRandBase;
}

const testStrand = {
  dna: [ 'A', 'C', 'G', 'C', 'T', 'G', 'G', 'G', 'A', 'G', 'T', 'T', 'C', 'T', 'G' ],
  specimenNum: 99
}

const pAequorFactory = (specimenNum, dna) => {
  return {
          specimenNum,
          dna,
          mutate() {
            let i = Math.floor(Math.random() * 14);
            this.dna[i] = randomMutate(array[i]);
            return this.dna[i];
          },
          compareDNA(otherMutation) {
            let similarities = 0;
            const beforeMutation = this.dna;
            for(i = 0; i <= this.dna.length; i++){
              if (beforeMutation[i] === otherMutation[i]) {
                similarities += 1;
              }
            };
            let diff = similarities / this.dna.length * 100;

            console.log(`The DNA samples are ${diff.toFixed(2)}% similar`);
            console.log(`pAequor ${this.specimenNum} is ${this.dna}`);
            console.log(`pAequor ${otherMutation.specimenNum} is ${otherMutation.dna}`);
          },
          willLikelySurvive() {
            const filtered = this.dna.filter(x => x === 'C' || x === 'G');
            if(filtered.length >= 9) {
              return true;
            } else {
              return false;
            }
          }
  }
}

let id = 1;
let sample;

do {
  sample = pAequorFactory(id, mockUpStrand());
  if (pAequorFactory(id, mockUpStrand()).willLikelySurvive){
    survivingpAequor.push(sample);
  }
  id++;
}
while(survivingpAequor.length < 30);

console.log(survivingpAequor);

// pAequorFactory(1, mockUpStrand()).willLikelySurvive();
// pAequorFactory(1, mockUpStrand()).compareDNA(testStrand);

