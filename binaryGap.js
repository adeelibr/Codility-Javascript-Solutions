function solution(N) {
   let maxGap = 0;
   let currentMaxGap = 0;
   let binaryStr = N.toString(2); // convert to binary

   let startIndexFromEnd = binaryStr.length;

   for (let i = startIndexFromEnd; i >= 0; i--) {
        if (binaryStr.charAt(i) == '0') {
            currentMaxGap = currentMaxGap + 1;
        } else {
            if (currentMaxGap > maxGap) {
                maxGap = currentMaxGap;
            }
            currentMaxGap = 0;
        }
   }
   return maxGap;
}
