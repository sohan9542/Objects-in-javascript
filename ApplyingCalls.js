const person = {
    firsName: 'Abuilla',
    lastName: 'sins',
    selery: 15000,
    chargeBill: function (amount) {
        this.selery = this.selery - amount;
        return this.selery;
    }
}

// person.chargeBill(200);
// console.log(person.selery);

const SecondPerson = {
    firstName : 'Mr',
    lastName : "triplle R",
    selery : 30000
}

const secondPersonSelery = person.chargeBill.bind(SecondPerson);
// secondPersonSelery(3000);

person.chargeBill.call(SecondPerson, 2000);
person.chargeBill.apply(SecondPerson, [20000]);
console.log(SecondPerson.selery);