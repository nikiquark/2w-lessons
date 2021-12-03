 
let items = [
    {
        id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        name: "Диван",
        description: "Самый удобный диван в мире",
        img: "https://www.ikea.com/global/assets/navigation/images/three-seat-sofas-10670.jpeg?imwidth=500"
    },
    {
        id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        name: "Стол",
        description: "Минималистичный стол для обеда",
        img: "https://www.ikea.com/global/assets/navigation/images/dining-tables-21825.jpeg?imwidth=500"
    },
    {
        id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        name: "Шкаф",
        description: "Очень большой и вместительный шкаф",
        img: "https://www.ikea.com/global/assets/navigation/images/solitaire-wardrobes-43631.jpeg?imwidth=500"
    }
]
function item_id_to_id(item_id){
    return items.findIndex((element, index, array) => {
        return (element.id == item_id);
    })
}


class ItemService {
    async get_items(){
        return items;
    }

    async get_item(item_id){
        const id = item_id_to_id(item_id);
        console.log(id)
        if (id == -1)
            return {result: "Нет предмета с таким id"}
        return items[id];
    }
 
    async add_item(item){
        const id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        items.push({"id": id, ...item});
        return {result: "Success"};
    }

    async delete_item(item_id){
        const id = item_id_to_id(item_id);
        if (id == -1)
            return {result: "Нет предмета с таким id"}
        items.splice(id, 1);
        return {result: "Success"};
    }

    async patch_item(item_id, item){
        const id = item_id_to_id(item_id);
        if (id == -1)
            return {result: "Нет предмета с таким id"}
        items[id].name = item.name;
        items[id].description = item.description;
        items[id].img = item.img;
        return {result: "Success"};
    }
}

module.exports =  new ItemService;