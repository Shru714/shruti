fetch('https://dummyjson.com/products')
.then((res)=>res.json())
.then((data)=>{
    console.log(data.products)
    let con=document.getElementById('con');
    data.products.forEach(element => {
        let productcard=document.createElement('div');
     productcard.innerHTML=`
        <div class="pcard">
        <img src="${productcard.images[0]}" alt="">
        <h2>${product.tittle}</h2>
        <h3>${product.price}</h3>
        <button>Buy Now</button>
        </div>
        `
        con.append(productcard);
    });
})
