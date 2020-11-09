

const matriceutil = require ('./utils.js')
let mat = [[1,2,3],
          [4,5,6],
          [7,8,9]]
let mat1 = [[1,2],
            [3,4]]

let mat2 = [[5,6],
            [7,8]]
            
       
console.log(matriceutil.multiplyMats(mat1,mat2))            
console.log(matriceutil.sumOfMatrices(mat1,mat2)); 
console.log(matriceutil.sumOfEachRow(mat));

