function groupArrayElemets(inputArray,n){
    const result = [];
    if(n<=0 || !Number.isInteger(n)){
        return result;
    }
    const len = Math.floor(inputArray.length()/n);
    let start =0;
    let end = len;

    for(let i=0; i<n;i++){
        if ( i== n-1){
            result.push(inputArray.slice(start));
        }else{
            result.push(inputArray.slice(start,end))
        }
        start=end;
        end += len;
    }
}

console.log(groupArrayElemets([1,2,3,4,5]),2)