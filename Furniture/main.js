const productmaindata = [
	{
		"img":"./img/bed.png",
		"title":"BEDS",
		"subtitle":"This all-white bedroom from Abby, of Style Me Pretty, is all about subtle design details.",
		"button":"Buy Now"
	},
	{
		"img":"./img/bed.png",
		"title":"BEDS",
		"subtitle":"This all-white bedroom from Abby, of Style Me Pretty, is all about subtle design details.",
		"button":"Buy Now"
	},
	{
		"img":"./img/bed.png",
		"title":"BEDS",
		"subtitle":"This all-white bedroom from Abby, of Style Me Pretty, is all about subtle design details.",
		"button":"Buy Now"
	}
]
	const gridContainer = document.getElementById("product-main-list");
   
        const gridItemsHTML = productmaindata.map(item => `
            <div class="col-md-12 col-lg-4 col-md-4 mt-5 mb-5">
            	<div class="product-main">
						
	                <img src="${item.img}" alt="${item.title}" class="mt-3">
	                <div>
		                <h3 class="mt-4">${item.title}</h3>
		                <p class="mt-3">${item.subtitle}</p>
	                	<button class="mb-3">${item.button}</button>
	                </div>
                </div>
            </div>
        `).join('');
        gridContainer.innerHTML = gridItemsHTML;
const productlist = [
	{
		"img":"./img/chair.svg",
		"title":"chair",
		"price":"$250",
		"button":"Buy Now"
	},
	{
		"img":"./img/chair.svg",
		"title":"chair",
		"price":"$250",
		"button":"Buy Now"
	},
	{
		"img":"./img/chair.svg",
		"title":"chair",
		"price":"$250",
		"button":"Buy Now"
	},
		{
		"img":"./img/chair.svg",
		"title":"chair",
		"price":"$250",
		"button":"Buy Now"
	},
	{
		"img":"./img/chair.svg",
		"title":"chair",
		"price":"$250",
		"button":"Buy Now"
	},
	{
		"img":"./img/chair.svg",
		"title":"chair",
		"price":"$250",
		"button":"Buy Now"
	},
		{
		"img":"./img/chair.svg",
		"title":"chair",
		"price":"$250",
		"button":"Buy Now"
	},
	{
		"img":"./img/chair.svg",
		"title":"chair",
		"price":"$250",
		"button":"Buy Now"
	}
]      

const gridlistContainer = document.getElementById("product-list");
const isTabletView = window.innerWidth <= 768; // Adjust the breakpoint as needed
   
        const gridlistItemsHTML = productlist.map((itemlist,index) => `
                <div class="product-list col-12 col-xs-6 col-sm-6 col-md-6 col-lg-3 ${isTabletView && index === 7 ? '' : (index % 4 === 3 ? 'custom-class' : '')}">
            	<div class="product-main-list">
	               	<img src="${itemlist.img}" alt="${itemlist.title}">
	               	<div>
		                <h4 class="mt-3">${itemlist.title}</h4>
		                <p class="mt-2">${itemlist.price}</p>
		                <button class="mb-2">${itemlist.button}</button>
		            </div>
                </div>
            </div>
        `).join('');
        gridlistContainer.innerHTML = gridlistItemsHTML; 