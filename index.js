
// Question for Sachin- Given an array of non negative numbers and a variable K show total number 
// of subsets that can be formed whose sum is equal to K

// Input : 
// Let arr = [1,2,3,4,5,6,7,8,9,10]
// Let K = 5		
// Output:3

function subsetOfK(arr,k){
    let n = arr.length;

    // we need to use dynamic projgramming for this 
    // Defining the 2D array and initializing each element with zero
    const dp = new Array(n+1).fill().map(()=>{
        return new Array(k+1).fill(0);
    })

    // This repersents the case where we have no elements and a sum of 0
    dp[0][0] = 1;

    for(let i=1;i<=n;i++){
        for(let j=0;j<=k;j++){
            if(j>=arr[i-1]){
                dp[i][j]=dp[i-1][j]+dp[i-1][j-arr[i-1]];
            } else {
                dp[i][j] = dp[i-1][j];
            }
        }
    }

    return dp[n][k];
}

console.log(subsetOfK([1,2,3,4,5,6,7,8,9,10],5)); // It will print 3
