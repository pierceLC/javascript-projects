// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  return Math.round(2 * Math.PI * radius);
}


// Code your missionDuration function here:

function missionDuration(numOrbits, radius = 2000, speed = 28000) {
  const circumference = orbitCircumference(radius);
  const distance = numOrbits * circumference;
  const time = distance / speed;
  return parseFloat(time.toFixed(2));
}


// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, numOrbits, radius = 2000, speed = 28000) {
  const spacewalkTime = missionDuration(numOrbits, radius, speed);
  const o2Used = candidate.o2Used(spacewalkTime * 3); // Spacewalk lasts for 3 orbits
  return `${candidate.name} will perform the spacewalk, which will last ${spacewalkTime} hours and require ${o2Used.toFixed(3)} kg of oxygen.`;
}


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];
 const selectedCandidate = selectRandomEntry(crew);
const spacewalkResult = oxygenExpended(selectedCandidate, 3); 
console.log(spacewalkResult);