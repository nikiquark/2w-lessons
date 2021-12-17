

async function get_items(){
    // Отправляем GET /api/items
    let response = await fetch('/api/twits');
    const tweets = await response.json();
    
    // Для каждого предмета создаём копию шаблона и заполняем его
    let cards_home = document.querySelector(".cards-home");
    const template = cards_home.querySelector("template");
    console.log(tweets);
    for(let tweet of tweets.reverse()){
        let response = await fetch('/api/authors/' + tweet.author_id);
        let author = await response.json();
        let new_card = template.content.firstElementChild.cloneNode(true);
        new_card.querySelector(".card-name").innerText = author.name;
        new_card.querySelector(".card-text").innerText = tweet.text;
        new_card.querySelector(".ava").src = author.author_img;
        new_card.querySelector(".id").innerText = tweet.id;
        cards_home.appendChild(new_card);
    }
}

async function send_twit(){
    const text = document.getElementById('twit_id').value;
    let response = await fetch('/api/twits', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({twit:{text:text, author_id:0}})
    });
    let a = await response.json();
    console.log(a);
    document.location.reload();
}

async function delete_twit(){
    const id = document.getElementById('item_id').value;
    let response = await fetch('/api/twits/' + id, {
        method: 'DELETE'});
    let a = await response.json();
    console.log(a);
    document.location.reload();
}




// async function delete_item(){
//     const id = document.querySelector("#item_id").value;
//     const pass = document.querySelector("#password").value;

//     // Отправляем DELETE /api/items/:id
//     const response = await fetch('/api/items/' + id + '?key=' + pass, {method: 'DELETE'});
//     const result = await response.json();

//     alert(result.result);
// }