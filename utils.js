//first code
function multiplyMats(mat1, mat2) {
    let resultmatrice = "";

    for (let i = 0; i < mat1.length; i++) {
        
        for (let j = 0; j < mat2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < mat1[0].length; k++) {
                sum += mat1[i][k] * mat2[k][j];
            }
            resultmatrice+=sum + " "
        }
        resultmatrice += "\n"
    }
    return resultmatrice;
}


//second code 
function sumOfMatrices(mat1,mat2){
    let resultstring = "";
    let sum = 0;
    for(let i = 0; i < mat1.length; i++){
        for(let j = 0; j < mat1[0].length; j++){
          sum = mat1[i][j] + mat2[i][j];
          resultstring += sum+ " "
        }
        resultstring += "\n"
    }
    return resultstring;
}


// third code
function sumOfArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function sumOfEachRow(mat){
    let result = [];
    let value = 0;
    for(let row = 0; row < mat.length; row++){
        value = sumOfArray(mat[row]);
        result.push(value)
    }
    return result;
}


module.exports = {
    multiplyMats,
    sumOfMatrices,
    sumOfEachRow
}

