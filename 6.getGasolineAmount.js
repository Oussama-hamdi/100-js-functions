function getGasolineAmount(distance, consumptionPer100Km) {
    return (distance * 2) / 100 * consumptionPer100Km;
}

console.log(getGasolineAmount(128, 6.4)); // 16.384