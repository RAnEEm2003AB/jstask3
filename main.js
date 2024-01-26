async function iphone(){
    const response= await axios.get (`https://dummyjson.com/products`);
    const product =response.data.products;
    console.log(product);
    const result = product.map(function(ele){
        return `
        <div class="product">
        <p>======================================================</p>
         <h2>${ele.title}</h2>
         <h4> Price : ${ele.price}</h4>
         <h5> Brand : ${ele.brand}</h6>
         <img  src="${ele.thumbnail}"/>
         <a href="detail.html?id=${ele.id}" > Details </a>
         </div>
    
          `;
    } ).join("");
    
    document.querySelector(".products").innerHTML=result;
}
   

    async function swipper(){
        const response= await axios.get (`https://dummyjson.com/products`);
        const product =response.data.products;
        const slides = product.map(function(e){
            return `
            <div class="swiper-slide">
            <img src="${e.thumbnail}"/>
             </div>
        
              `;
        } ).join("");
        
        document.querySelector(".swiper-wrapper").innerHTML=slides;


        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
         slidesPerView:4,
         spaceBetween:40 ,
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          });
    }
        swipper();
        iphone();