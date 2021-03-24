const {User,Order,Cadeteria} = require ("../models/index");

// const userArr = require('./user')
// const cadeteriaArr = require('./cadeteria')
// const orderArr = require('./order')

//// ORDERS
const order1={
    buyer_name: 'Lionel',
    delivery_adress:'Messi',
    notes:'Llamarme',
    buyer_phone_num:2983745678,
}
const order2={
    buyer_name: 'Luis',
    delivery_adress:'Suarez',
    notes:'Tocarme timbre',
    buyer_phone_num:2983745678,
}
const order3={
    buyer_name: 'Carlos',
    delivery_adress:'Tevez',
    notes:'Dejarlo en la puerta',
    buyer_phone_num:2983745678,
}
////CADETERIAS

const cadeteria1={
    name_company: 'Deliveroo',
    CUIT:'23324902349',
    email:'deliveroo@gmail.com',
    password:12345678,
    phone_num:2983745678,
    address:'Mitre 123'
}
const cadeteria2={
    name_company: 'Uber',
    CUIT:'23377902349',
    email:'uber@gmail.com',
    password:12345678,
    phone_num:2983745678,
    address:'Tucuman 123'
}
const cadeteria3={
    name_company: 'JustEat',
    CUIT:'25524902349',
    email:'justEat@gmail.com',
    password:12345678,
    phone_num:2983745678,
    address:'San Juan 123'
}
//////USER
const user1={
    first_name: 'Laura',
    last_name:'Gonzalez',
    email:'laura@gmail.com',
    password:12345678,
    phone_num:2983745678,
}
const user2={
    first_name: 'Roberto',
    last_name:'Giovanni',
    email:'roberto@gmail.com',
    password:12345678,
    phone_num:2983745678,
}
const user3={
    first_name: 'Jose',
    last_name:'Lopez',
    email:'jose@gmail.com',
    password:12345678,
    phone_num:2983745678,
}
//////

const userArr =[user1,user2,user3]
const cadeteriaArr =[cadeteria1,cadeteria2,cadeteria3]
const orderArr = [order1,order2,order3]

let OrderPromise = () => Order.bulkCreate(orderArr)
  .then(res => {
    console.log(`-->productos creados`);
    return res;
  });
  
let cadeteriaPromise = () => Cadeteria.bulkCreate(cadeteriaArr)
  .then(res => {
    console.log(`-->productos creados`);
    return res;
  });
let userPromise = () => User.bulkCreate(userArr)
  .then(res => {
    console.log(`-->productos creados`);
    return res;
  });


  OrderPromise()
  .then(()=>cadeteriaPromise()) 
  .then(()=>userPromise()) 
  .then(() => console.log(`----Seed terminado----`));