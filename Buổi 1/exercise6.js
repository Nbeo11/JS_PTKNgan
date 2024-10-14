let arr = [
    {
        brand: 'Huyndai',
        model: 'Santafe'
    }, {
        brand: 'Huyndai',
        model: 'Sonata'
    }, {
        brand: 'VinFast',
        model: 'Lux SA'
    }, {
        brand: 'Toyota',
        model: 'Camry'
    }, {
        brand: 'VinFast',
        model: 'Lux A'
    }, {
        brand: 'Toyota',
        model: 'Vios'
    }
];

let result = [];
let brandCar = {};
arr.forEach(item => {
    if (!brandCar[item.brand]) {
        brandCar[item.brand] = [];
    } 
    brandCar[item.brand].push(item);
});

for (let i in brandCar) {
    result.push(brandCar[i])
}

console.log(result)