const {User,Order,Cadeteria} = require ("../models/index");

// const userArr = require('./user')
// const cadeteriaArr = require('./cadeteria')
// const orderArr = require('./order')

//// ORDERS
const order1={
  buyerName: 'Lionel',
  deliveryAdress:'Messi',
    notes:'Llamarme',
    buyerPhoneNum:2983745678,
}
const order2={
  buyerName: 'Luis',
  deliveryAdress:'Suarez',
    notes:'Tocarme timbre',
    buyerPhoneNum:2983745678,
}
const order3={
  buyerName: 'Carlos',
  deliveryAdress:'Tevez',
    notes:'Dejarlo en la puerta',
    buyerPhoneNum:2983745678,
}
////CADETERIAS

const cadeteria1={
  nameCompany: 'Deliveroo',
    CUIT:'23324902349',
    email:'deliveroo@gmail.com',
    password:12345678,
    phoneNum:2983745678,
    address:'Mitre 123'
}
const cadeteria2={
  nameCompany: 'Uber',
    CUIT:'23377902349',
    email:'uber@gmail.com',
    password:12345678,
    phoneNum:2983745678,
    address:'Tucuman 123'
}
const cadeteria3={
  nameCompany: 'JustEat',
    CUIT:'25524902349',
    email:'justEat@gmail.com',
    password:12345678,
    phoneNum:2983745678,
    address:'San Juan 123'
}
//////USER
const user1={
  firstName: 'Laura',
  lastName:'Gonzalez',
    email:'laura@gmail.com',
    password:12345678,
    phoneNum:2983745678,
}
const user2={
  firstName: 'Roberto',
  lastName:'Giovanni',
    email:'roberto@gmail.com',
    password:12345678,
    phoneNum:2983745678,
}
const user3={
  firstName: 'Jose',
    lastName:'Lopez',
    email:'jose@gmail.com',
    password:12345678,
    phoneNum:2983745678,
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