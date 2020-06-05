const router = require('express').Router();
let Goal = require('../models/goal.model');

router.route('/').get((req, res) => {
    Goal.find()
    .then(goals => res.json(goals))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const achieveBy = req.body.achieveBy;
    const date = Date.parse(req.body.date);

    const newGoal = new Goal({
        username,
        description,
        achieveBy,
        date
    });
    newGoal.save()
    .then(() => res.json('Goal added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Goal.findById(req.params.id)
    .then(goal => res.json(goal))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').delete((req, res) => {
Goal.findByIdAndDelete(req.params.id)
.then(() => res.json('Exercise deleted.'))
.catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').put((req, res) => {
    Goal.findById(req.params.id)
    .then(goal => {
        goal.username = req.body.username;
        goal.description = req.body.username;
        goal.achieveBy = req.body.achieveBy;
        goal.date = Date.parse(req.body.date);

        goal.save()
        .then(() => res.json('Goal updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;