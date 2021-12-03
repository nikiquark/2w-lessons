

async function get_items(){
    // Отправляем GET /api/items
    let response = await fetch('/api/items');
    const items = await response.json();

    // Для каждого предмета создаём копию шаблона и заполняем его
    let cards_home = document.querySelector(".cards-home");
    const template = cards_home.querySelector("template");
    for(let item of items){
        let new_card = template.content.firstElementChild.cloneNode(true);
        new_card.querySelector(".card-title").innerText = item.name;
        new_card.querySelector(".card-text").innerText = item.description;
        new_card.querySelector(".card-img-top").src = item.img;
        new_card.querySelector(".id").innerText = item.id;
        cards_home.appendChild(new_card);
    }
}

async function delete_item(){
    const id = document.querySelector("#item_id").value;
    const pass = document.querySelector("#password").value;

    // Отправляем DELETE /api/items/:id
    const response = await fetch('/api/items/' + id + '?key=' + pass, {method: 'DELETE'});
    const result = await response.json();

    alert(result.result);
}