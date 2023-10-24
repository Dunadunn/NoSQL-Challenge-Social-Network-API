const router = require('express').Router();
const {
    addThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<thoughtId>/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/<thoughtId>/reactions/<reactionId>
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
