function getBusinessAddress(business) {
    return `${business.address.street}, number ${business.address.number}, ${business.address.zipCode}`;
}

console.log(getBusinessAddress({address: { number: 3, street: "Avenuepark", zipCode: 123500 }}));