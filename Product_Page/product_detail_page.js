let curr = JSON.parse(localStorage.getItem('Current_Product'))
console.log(curr)
let banner = document.getElementById('banner')
banner.src = curr.img
let productName = document.getElementById('product_name')
productName.innerText=curr.name
document.getElementById('heading_Price').style.width=`${curr.name.length * 17}px`
let productPrice = document.getElementById('product_price')
productPrice.innerText= '₹' + curr.price