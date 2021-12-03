const ItemService = require("./service.js");

 
class ItemController {
    async get_items(req, res){
        const result = await ItemService.get_items();
        return res.json(result);
    }

    async get_item(req, res){
        const item_id = req.params.item_id;
        const result = await ItemService.get_item(item_id);
        return res.json(result);
    }
 
    async add_item(req, res){
        const item = req.body.item;
        const result = await ItemService.add_item(item);
        res.json(result);
    }

    async delete_item(req, res){
        const item_id = req.params.item_id;
        const result = await ItemService.delete_item(item_id);
        res.json(result);
    }

    async patch_item(req, res){
        const item_id = req.params.item_id;
        const item = req.body.item;
        const result = await ItemService.patch_item(item_id, item);
        res.json(result);
    }
}

module.exports = new ItemController;