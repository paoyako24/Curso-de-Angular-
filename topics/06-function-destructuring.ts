
 export interface Producto {
    description: string;
    price: number;
}

//const phone: Producto = {
    //description:'Nokia A1',
    //price: 150.0
//}

//const tablet: Producto = {
     //cription: 'iPad',
     //price: 250.0
//}



interface TaxCalculationOptions{
    tax:number;
    products: Producto[];
}

//function taxCalculation(options: TaxCalculationOptions): [number, number] {
//function taxCalculation({tax, products}: TaxCalculationOptions): [number, number] {
 export function taxCalculation(options: TaxCalculationOptions): [number, number] {
  
  const { tax, products } = options;
  
    let total = 0;

  options.products.forEach( ({price}) => {
    total += price;
  });

  return [total, total * options.tax ];
}



//const shoopingCart = [phone, tablet];
//const tax = 0.15


//const [ total, totaltax]= taxCalculation({
    //products: shoopingCart,
    //tax: tax,
//})

//onsole.log('Total', total );
//console.log('Tax', totaltax);


