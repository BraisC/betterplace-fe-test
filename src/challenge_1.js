// Challenge 1 solution

export default function tobiesFriends(n, scores) {
  //it doesnt say that i can't sort the array of scores so...
  const scoresInOrder = [...scores].sort((a, b) => b - a);
  let numberOfCalls = 0;
  for(let i=0; i<= n ; i++) {
    console.log(`Called ${scoresInOrder[i]}`)
    scoresInOrder[i] = Math.min(...scoresInOrder)
    for(let j=i+1; j <= n; j++) {
      scoresInOrder[j]++;
    }
    numberOfCalls++;
  }

  return numberOfCalls; //this is the same as n as you only have to iterate over the sorted array to call of his friends, you could just return "n" if you only need this and don't actually need to modify the scores
}

//What are the function's time & space complexities?
//The complexity in O notation is O(n^2)
