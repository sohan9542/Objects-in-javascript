const person = {
    firsName: 'Abuilla',
    lastName: 'sins',
    selery: 15000,
    chargeBill: function (amount) {
        this.selery = this.selery - amount;
        return this.selery;
    }
}

person.chargeBill(200);
console.log(person.selery);