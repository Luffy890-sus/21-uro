const response = new XMLHttpRequest();
const cards = document.querySelector(".cards");
response.open("GET", "./db.json");
response.send();

response.addEventListener("readystatechange", () => {
    if (response.readyState === 4 && response.status === 200) {
        getData(JSON.parse(response.responseText));
    } else if (response.readyState === 4) {
        console.log("Ошибка загрузки:", response.responseText);
    }
});

function getData(data) {
    data.forEach((value) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
         <center>
           <img class="img" src="${value.image}" alt="Product Image">
           <p class="text">${value.title}</p>
           <div class="ggi">
           <p class="text2">${value.price} $</p>
           <button class="btn">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M5.87402 7L7.40902 14.246C7.62002 15.244 8.54902 15.923 9.56502 15.822L16.381 15.14C17.221 15.056 17.917 14.454 18.122 13.635L19.47 8.243C19.628 7.611 19.151 7 18.5 7H10.187" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.87402 7L7.40902 14.246C7.62002 15.244 8.54902 15.923 9.56502 15.822L16.381 15.14C17.221 15.056 17.917 14.454 18.122 13.635L19.47 8.243C19.628 7.611 19.151 7 18.5 7H10.187" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.87402 7L7.40902 14.246C7.62002 15.244 8.54902 15.923 9.56502 15.822L16.381 15.14C17.221 15.056 17.917 14.454 18.122 13.635L19.47 8.243C19.628 7.611 19.151 7 18.5 7H10.187" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.87402 7L7.40902 14.246C7.62002 15.244 8.54902 15.923 9.56502 15.822L16.381 15.14C17.221 15.056 17.917 14.454 18.122 13.635L19.47 8.243C19.628 7.611 19.151 7 18.5 7H10.187" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.87402 7L7.40902 14.246C7.62002 15.244 8.54902 15.923 9.56502 15.822L16.381 15.14C17.221 15.056 17.917 14.454 18.122 13.635L19.47 8.243C19.628 7.611 19.151 7 18.5 7H10.187" stroke="#6B59CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.874 7L5.224 4H3.5" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.874 7L5.224 4H3.5" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.874 7L5.224 4H3.5" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.874 7L5.224 4H3.5" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.874 7L5.224 4H3.5" stroke="#6B59CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.1088 19.2671C16.9068 19.2671 16.7428 19.4311 16.7448 19.6331C16.7448 19.8351 16.9088 19.9991 17.1108 19.9991C17.3128 19.9991 17.4768 19.8351 17.4768 19.6331C17.4758 19.4311 17.3118 19.2671 17.1088 19.2671" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.1088 19.2671C16.9068 19.2671 16.7428 19.4311 16.7448 19.6331C16.7448 19.8351 16.9088 19.9991 17.1108 19.9991C17.3128 19.9991 17.4768 19.8351 17.4768 19.6331C17.4758 19.4311 17.3118 19.2671 17.1088 19.2671" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.1088 19.2671C16.9068 19.2671 16.7428 19.4311 16.7448 19.6331C16.7448 19.8351 16.9088 19.9991 17.1108 19.9991C17.3128 19.9991 17.4768 19.8351 17.4768 19.6331C17.4758 19.4311 17.3118 19.2671 17.1088 19.2671" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.1088 19.2671C16.9068 19.2671 16.7428 19.4311 16.7448 19.6331C16.7448 19.8351 16.9088 19.9991 17.1108 19.9991C17.3128 19.9991 17.4768 19.8351 17.4768 19.6331C17.4758 19.4311 17.3118 19.2671 17.1088 19.2671" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.1088 19.2671C16.9068 19.2671 16.7428 19.4311 16.7448 19.6331C16.7448 19.8351 16.9088 19.9991 17.1108 19.9991C17.3128 19.9991 17.4768 19.8351 17.4768 19.6331C17.4758 19.4311 17.3118 19.2671 17.1088 19.2671" stroke="#6B59CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.69724 19.267C8.49524 19.267 8.33124 19.431 8.33324 19.633C8.33124 19.836 8.49624 20 8.69824 20C8.90024 20 9.06424 19.836 9.06424 19.634C9.06424 19.431 8.90024 19.267 8.69724 19.267" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.69724 19.267C8.49524 19.267 8.33124 19.431 8.33324 19.633C8.33124 19.836 8.49624 20 8.69824 20C8.90024 20 9.06424 19.836 9.06424 19.634C9.06424 19.431 8.90024 19.267 8.69724 19.267" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.69724 19.267C8.49524 19.267 8.33124 19.431 8.33324 19.633C8.33124 19.836 8.49624 20 8.69824 20C8.90024 20 9.06424 19.836 9.06424 19.634C9.06424 19.431 8.90024 19.267 8.69724 19.267" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.69724 19.267C8.49524 19.267 8.33124 19.431 8.33324 19.633C8.33124 19.836 8.49624 20 8.69824 20C8.90024 20 9.06424 19.836 9.06424 19.634C9.06424 19.431 8.90024 19.267 8.69724 19.267" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.69724 19.267C8.49524 19.267 8.33124 19.431 8.33324 19.633C8.33124 19.836 8.49624 20 8.69824 20C8.90024 20 9.06424 19.836 9.06424 19.634C9.06424 19.431 8.90024 19.267 8.69724 19.267" stroke="#6B59CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
           </button>
           </div>
           </center>
                          `;
        cards.appendChild(card);
    });
}
