const divide = (arr)=>{
    let left = arr,right;
    const mid = Math.floor(arr.length/2);
    if(mid === 0){
        return [false,false];
    }
    right = left.splice(mid);
    return [left,right];
}
const compare = (left,right) =>{
    if(right === undefined){
        return true;
    }
    else if(left < right){
        return true;
    };
    return false;
}

const merge = (left,right)=>{
    let arr =[]
    let item = null;
    while(left[0] !== undefined || right[0] !== undefined){
        if(compare(left[0],right[0])){
            item = left[0];
            left.splice(0,1)
        }else{
            item = right[0];
            right.splice(0,1)
        }
        arr.push(item);
    }
    return arr;
}

const sort = (arr)=>{
    let [left,right] = divide(arr);
    if(left === false){
        return arr;
    }
    left = sort(left);
    right = sort(right);
    arr = merge(left,right);
    return arr;
}

export default sort;