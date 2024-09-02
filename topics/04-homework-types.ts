/*
    ===== Código de TypeScript =====
*/
interface SuperHero{
    name: string;
    age: number;
    adress: Address;
     showAddress: () => string;
}

interface Address {
    streeth: string;
    country: string;
    cuidad: string;
}


const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
       streeth: 'Main St',
       country: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};