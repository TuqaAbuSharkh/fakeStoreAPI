const getData = async () =>{

    const params =new URLSearchParams(window.location.search);
    const id = params.get('id');
    const {data}= await axios.get(`https://dummyjson.com/products/${id}`)
    return data;
}

const displayProduct= async () =>{
    const data = await getData();
    
    const images = data.images.map( (img)=>{
        return `
        <img src="${img}" alt="${data.titel}">`;
    }).join(' ');

    const result =`
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    `;

    document.querySelector(".product-details").innerHTML = result;
    document.querySelector(".images").innerHTML = images;
}

displayProduct();