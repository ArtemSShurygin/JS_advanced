console.log('\nTask 2.')

let data = [
  {
    product: 'Apple iPhone 13',
    reviews: [
      {
        id: '1',
        text: 'Отличный телефон! Батарея держится долго.'
      },
      {
        id: '2',
        text: 'Камера супер, фото выглядят просто потрясающе.'
      }
    ]
  },
  {
    product: 'Samsung Galaxy Z Fold 3',
    reviews: [
      {
        id: '3',
        text: 'Интересный дизайн, но дорогой.'
      }
    ]
  },
  {
    product: 'Sony PlayStation 5',
    reviews: [
      {
        id: '4',
        text: 'Люблю играть на PS5, графика на высоте.'
      }
    ]
  }
]

const addReviewToProduct = (product, reviewText, newData = data) => {
  let id = product.replace(/ /g, '_')
  let productReviewsElement = comments.querySelector(`#${id}-reviews`)
  productReviewsElement.insertAdjacentHTML('beforeEnd', `<p>${reviewText}</p>`)

  const foundProduct = newData.find(el => el.product === product)
  foundProduct.reviews.push(reviewText)
  //Добавить сохранение данных в объекте
  return newData
}

data.forEach(product => {
  let id = product.product.replace(/ /g, '_')

  comments.insertAdjacentHTML(
    'beforeEnd',
    `
    <div id = ${id}>
      <h2>${product.product}</h2>
      <div id ="${id}-reviews"></div>
      <details class="details">
        <summary>Оставить отзыв</summary>
        <textarea id="${id}-textarea"></textarea>
        <button type="submit">Отправить</button>
        <p class="error"></p>
      </details>
    </div>
    `
  )
  // onClick = "(addReviewToProduct('${product.product}', 'text'))"

  let productReviewsElement = comments.querySelector(`#${id}-reviews`)

  product.reviews.forEach(review => {
    productReviewsElement.insertAdjacentHTML(
      'afterBegin',
      `
        <p>${review.text}</p>
      `
    )
  })

  let productButton = comments.querySelector(`#${id}`).querySelector('button')
  let productTextarea = comments.querySelector(`#${id}-textarea`)
  let errorElement = comments.querySelector(`#${id}`).querySelector('.error')

  productButton.addEventListener('click', function (e) {
    try {
      reviewLength = productTextarea.value.length
      if (reviewLength < 50) {
        throw new Error('Длина отзыва должна быть больше 50-ти символов.')
      }
      if (reviewLength > 500) {
        throw new Error('Длина отзыва должна быть меньше 500 символов.')
      }
      addReviewToProduct(product.product, productTextarea.value)
      productTextarea.value = ''
      errorElement.textContent = ''
    } catch (error) {
      errorElement.textContent = error.message
      console.log(error)
    }
  })
})
