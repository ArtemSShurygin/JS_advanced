console.log('\nTask 2.')

const chefsSpecializations = new Map()
chefsSpecializations
  .set('Виктор', 'Пицца')
  .set('Ольга', 'Суши')
  .set('Дмитрий', 'Десерты')

dishesOfChefs = new Map()
dishesOfChefs
  .set('Пицца "Маргарита"', 'Виктор')
  .set('Пицца "Пепперони"', 'Виктор')
  .set('Суши "Филадельфия"', 'Ольга')
  .set('Суши "Калифорния"', 'Ольга')
  .set('Тирамису', 'Дмитрий')
  .set('Чизкейк', 'Дмитрий')

allOrders = new Map()

//Формирует новый заказ или допполняет старый заказ
function newOrder (clientName, ...clientOrders) {
  if (allOrders.has(clientName)) {
    const oldOrders = allOrders.get(clientName)
    allOrders.set(clientName, [...oldOrders, ...clientOrders])
  } else {
    allOrders.set(clientName, [...clientOrders])
  }
}

//Возвращает блюда, которые заказал заданный клиент
function clientOrder (clientName) {
  return allOrders.get(clientName)
}

//Возвращает блюда, которые должен приготовить заданный повар из всего списка заказов
function chefsOrders (chef) {
  let orders = []
  for (const [key, value] of allOrders) {
    const order = value.filter(el => dishesOfChefs.get(el) === chef)
    if (order.length != 0) {
      orders.push(...order)
    }
  }
  return orders
}

newOrder('Алексей', 'Пицца "Пепперони"', 'Тирамису')
newOrder('Мария', 'Суши "Калифорния"', 'Пицца "Маргарита"')
newOrder('Ирина', 'Чизкейк')

console.log('Общий список заказов:\n', allOrders)

console.log('\nЗаказы клиентов:')
console.log('Алексей заказал:\n', clientOrder('Алексей'))
console.log('Мария заказала:\n', clientOrder('Мария'))
console.log('Ирина заказала:\n', clientOrder('Ирина'))

console.log('\nРаспределение блюд по поварам:')
console.log('Виктор готовит:\n', chefsOrders('Виктор'))
console.log('Ольга готовит:\n', chefsOrders('Ольга'))
console.log('Дмитрий готовит:\n', chefsOrders('Дмитрий'))

// newOrder('Алексей', 'new1', 'new2')
// newOrder('Алексей', 'new3', 'new4')
// console.log(allOrders)
