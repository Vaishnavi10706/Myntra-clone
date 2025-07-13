let itemsContainerElement = document.querySelector('.items-container');

const items = [
  {
    id: '001',
    item_image: 'images/1.png',
    rating: {
      stars: 4.5,
      noOfReviews: 1400,
    },
    return_period: 14,
    delivery_date: '20 July 2025',
    company_name: 'Carlton London',
    item_name: 'Rhodium-Plated CZ Floral Studs',
    current_price: 606,
    original_price: 1045,
    discount_percentage: 42,
  },
  {
    id: '002',
    item_image: 'images/2.png',
    rating: {
      stars: 4.3,
      noOfReviews: 24,
    },
    return_period: 14,
    delivery_date: '20 July 2025',
    company_name: 'CUKOO',
    item_name: 'Women Padded Halter Neck Swimming Dress',
    current_price: 1507,
    original_price: 2599,
    discount_percentage: 42,
  },
  {
    id: '003',
    item_image: 'images/3.png',
    rating: {
      stars: 4.1,
      noOfReviews: 249,
    },
    return_period: 14,
    delivery_date: '22 July 2025',
    company_name: 'NUEVOSDAMAS',
    item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
    current_price: 495,
    original_price: 1599,
    discount_percentage: 69,
  },
  {
    id: '004',
    item_image: 'images/4.png',
    rating: {
      stars: 5.0,
      noOfReviews: 10,
    },
    return_period: 14,
    delivery_date: '21 July 2025',
    company_name: 'ADIDAS',
    item_name: 'Indian Cricket ODI Jersey',
    current_price: 999,
    original_price: 999,
    discount_percentage: 0,
  },
  {
    id: '005',
    item_image: 'images/5.png',
    rating: {
      stars: 4.2,
      noOfReviews: 3500,
    },
    return_period: 14,
    delivery_date: '21 July 2025',
    company_name: 'Roadster',
    item_name: 'Pure Cotton T-shirt',
    current_price: 489,
    original_price: 1399,
    discount_percentage: 65,
  },
  {
    id: '006',
    item_image: 'images/6.png',
    rating: {
      stars: 5.0,
      noOfReviews: 1200,
    },
    return_period: 14,
    delivery_date: '20 July 2025',
    company_name: 'Nike',
    item_name: 'Men ReactX Running Shoes',
    original_price: 14995,
    current_price: 14995,
    discount_percentage: 0,
  },
  {
    id: '007',
    item_image: 'images/7.png',
    rating: {
      stars: 4.2,
      noOfReviews: 380,
    },
    return_period: 14,
    delivery_date: '23 July 2025',
    company_name: 'The Indian Garage Co',
    item_name: 'Men Slim Fit Regular Shorts',
    original_price: 1599,
    current_price: 639,
    discount_percentage: 60,
  },
  {
    id: '008',
    item_image: 'images/8.png',
    rating: {
      stars: 4.8,
      noOfReviews: 1380,
    },
    return_period: 14,
    delivery_date: '21 July 2025',
    company_name: 'Nivea',
    item_name: 'Men Fresh Deodrant 150ml',
    original_price: 285,
    current_price: 142,
    discount_percentage: 50,
  },
]
itemsContainerElement.innerHTML = `
<div class="item-container">
  <img class="item-image" src="${items.item_image}" alt="item image">
  <div class="rating">
     ${items.rating.stars} ⭐ | ${items.rating.noOfReviews}
  </div>
  <div class="company-name">${items.company_name}</div>
  <div class="item-name">${items.item_name}</div>
  <div class="price">
    <span class="current-price">Rs ${items.current_price}</span>
    <span class="original-price">Rs ${items.original_price}</span>
    <span class="discount">(${items.discount_percentage}% OFF)</span>
  </div>
  <button class="btn-add-bag">Add To Bag</button>
</div>`;