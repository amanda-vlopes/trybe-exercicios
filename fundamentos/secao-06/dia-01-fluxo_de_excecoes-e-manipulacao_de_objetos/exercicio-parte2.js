const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
 const personDelivery = order.order.delivery.deliveryPerson;
 const rua = order.address.street;
 const numero = order.address.number;
 const apt = order.address.apartment;

 console.log(`Olá ${personDelivery}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${rua}, Nº: ${numero}, AP:${apt}`);

};

customerInfo(order);

const orderModifier = (order) => {
  const newPerson = order.name = 'Luiz Silva';
  const newTotal = order.payment.total = 50;
  const pizza1 = Object.keys(order.order.pizza)[0];
  const pizza2 = Object.keys(order.order.pizza)[1];
  const bebiba = order.order.drinks.coke.type;

  console.log(`Olá ${newPerson}, o total do seu pedido de ${pizza1}, ${pizza2} e ${bebiba} é R$ ${newTotal},00.`)

};

orderModifier(order);