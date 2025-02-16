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

        // Функция для генерации звёзд на основе рейтинга
        function generateStars(rating) {
            let stars = "";
            let roundedRating = Math.round(rating); // Округляем рейтинг
            for (let i = 1; i <= 5; i++) {
                stars += i <= roundedRating ? "⭐" : "☆";
            }
            return stars;
        }

        card.innerHTML = `
         <center>
           <img class="img" src="${value.image}" alt="Product Image">
           <p class="text">${value.title}</p>
           <p class="stars">${generateStars(value.rating.rate)}</p> <!-- Звёзды -->
           <p class="rating-text">(${value.rating.rate} / 5, ${value.rating.count} отзывов)</p> <!-- Числовой рейтинг -->
           <div class="ggi">
             <p class="text2">${value.price} $</p>
             <button class="btn">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 <path d="M5.874 7L7.409 14.246C7.62 15.244 8.549 15.923 9.565 15.822L16.381 15.14C17.221 15.056 17.917 14.454 18.122 13.635L19.47 8.243C19.628 7.611 19.151 7 18.5 7H10.187" stroke="#6B59CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
             </button>
           </div>
         </center>
        `;
        cards.appendChild(card);
    });
}

