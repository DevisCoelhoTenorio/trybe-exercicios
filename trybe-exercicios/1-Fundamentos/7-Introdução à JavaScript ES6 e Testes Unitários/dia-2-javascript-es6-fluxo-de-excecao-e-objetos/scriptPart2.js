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
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const nome = order.name;
    const phone = order.phoneNumber;
    const address = `${order.address.street}, Nº: ${order.address.number},AP: ${order.address.apartment}`;
    console.log(`Olá ${deliveryPerson}, entrega para: ${nome}, Telefone: ${phone}, ${address}`);
  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  const nome = order.name;
  const pizza = Object.keys(order.order.pizza);
  const drink = Object.keys(order.order.drinks);
  let valor = order.order.pizza.marguerita.price + order.order.pizza.pepperoni.price + order.order.drinks.coke.price;
  valor = 50;
  
  console.log(`Olá ${nome}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${drink} é R$ ${valor}`);
  }
  
  orderModifier(order);