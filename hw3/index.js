//localStorage.removeItem('reviews')

let reviewsData = JSON.parse(localStorage.getItem('reviews')) || []

let productNameInput = document.querySelector('#product')
let reviewTexarea = document.querySelector('#review')
let reviewForm = document.querySelector('#reviewForm')

reviewForm.addEventListener('submit', function (e) {
  const foundProduct = reviewsData.find(
    element => element.productName == productNameInput.value
  )

  if (foundProduct) {
    //Если нашли продукт, добавляем новый отзыв
    foundProduct.reviews.push(reviewTexarea.value)
  } else {
    //Если не нашли продукт, cоздаем новый объект,
    let newdata = {}
    newdata['productName'] = productNameInput.value
    newdata['reviews'] = [reviewTexarea.value]
    reviewsData.push(newdata)
  }

  localStorage.setItem('reviews', JSON.stringify(reviewsData))
})

console.log(
  "localStorage.getItem('reviews')\n",
  localStorage.getItem('reviews')
)
console.log('reviewsData\n', reviewsData)
