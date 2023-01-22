const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll(
    {
      include: [
        {
          model: Product
        }
      ]
    }
  ).then(results => res.send(results));
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, 
    {
      include: [
        {
          model: Product
        }
      ]
    }
  ).then(results => res.send(results));
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body);
  res.send("Created new tag");
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  res.send("Updated tag");
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  });
  res.send("Deleted tag");
});

module.exports = router;
