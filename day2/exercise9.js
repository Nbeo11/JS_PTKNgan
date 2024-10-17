const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 10, 11]
]
const newMatrix = [];
for (let i = 0; i <= 2; i++) {
    newMatrix[i] = []
    for (let j = 0; j <= 2; j++) {
        newMatrix[i][j] = matrix[2-j][i]
    }
}
console.log(matrix)
console.log(newMatrix)