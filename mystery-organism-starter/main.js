// Returns a random DNA base
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

const randomMutate = (currentRandBase) => { // index: 0-4, curr: A/T/C/G
  let newRandBase = returnRandBase();
  while (newRandBase === currentRandBase) {
    newRandBase = returnRandBase();
  }
  return newRandBase;
}

const testStrand = [ 'A', 'C', 'G', 'C', 'T', 'G', 'G', 'G', 'A', 'G', 'T', 'T', 'C', 'T', 'G' ];

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
            beforeMutation.forEach((base) => {
              if (base[i] === otherMutation[i]) {
                similarities += 1;
              }
            });
            let diff = similarities / 15 * 100;

            console.log(`The DNA samples are ${diff.toFixed(2)}% similar`);
            console.log(`pAequor${this.specimenNum} is ${this.dna}`);
            console.log(`pAequor${otherMutation.specimenNum} is ${otherMutation.dna}`);
          },
          willLikelySurvive() {
            const filtered = this.dna.filter(x => x === 'C' || x === 'G');
            if(filtered.length >= 9) {
              console.log(true);
              return true;
            } else {
              console.log(false);
              return false;
            }
          }
  }
}

pAequorFactory(1, mockUpStrand()).willLikelySurvive();

