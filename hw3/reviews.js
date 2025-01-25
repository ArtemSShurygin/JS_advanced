let reviewsData = JSON.parse(localStorage.getItem('reviews')) || []

let reviewsElement = document.querySelector('#reviews')

reviewsData.forEach(product => {
  let detailElement = document.createElement('details')
  let summaryElement = document.createElement('summary')
  summaryElement.textContent = product.productName
  detailElement.appendChild(summaryElement)

  product.reviews.forEach(review => {
    let pElement = document.createElement('p')
    pElement.textContent = review
    detailElement.appendChild(pElement)

    let buttonElement = document.createElement('button')
    buttonElement.textContent = 'Удалить'
    detailElement.appendChild(buttonElement)

    buttonElement.onclick = (e) => {
      console.log(review);
      if(product.reviews.length === 1) {
        //Если продукт содержит 1 отзыв, при удалении отзыва удаляется весь продукт
        detailElement.remove()
        let productIndex = reviewsData.indexOf(product);
        reviewsData.splice(productIndex, 1)

      } else {
        //Если продукт содержит больше 1 отзыва, удаляется выбранный отзыв
        pElement.remove()
        buttonElement.remove()
        let reviewIndex = product.reviews.indexOf(review);
        product.reviews.splice(reviewIndex, 1)
      }
      localStorage.setItem('reviews', JSON.stringify(reviewsData))
      console.log(reviewsData);
    }
  })


  reviewsElement.appendChild(detailElement)
})

console.log(reviewsData);