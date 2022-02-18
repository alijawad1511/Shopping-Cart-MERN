const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');


//@route    GET api/items/useritems
//@desc     Fetch User Notes
//@access   Public
router.get('/useritems', async (req, res) => {
	try {
		
		const items = await Item.find().sort({date: -1}); // Sort in Descending according to Date 
		res.status(200).json(items);

	} catch (error) {
		res.status(505).send('Internal Server Error');
		console.log(error.message);
	}
})




//@route    POST api/items/additem
//@desc     Add an Item in Cart
//@access   Public
router.post('/additem', async (req, res) => {
	try {

		const { name } = req.body;

		const item = new Item({
			name
		});

		const savedItem = await item.save();
		res.status(200).json(savedItem);

	} catch (error) {
		res.status(505).send('Internal Server Error');
		console.log(error.message);
	}
})



//@route    DELETE api/items/additem
//@desc     Add an Item in Cart
//@access   Public
router.delete('/deleteitem/:id', async (req, res) => {
	try {
		
		const item = await Item.findById(req.params.id);
		
		// If Item not found
		if (!item) { return res.status(404).json({ error: "Item note found in the Cart" }) }

		const result = await item.remove();
		res.status(200).json({ success: true});



	} catch (error) {
		res.status(505).send('Internal Server Error');
		console.log(error.message);
	}
})


module.exports = router;