import express from 'express';

import {
	getPosts,
	createPost,
	updatePost,
	deletePost,
	likePost,
} from '../controllers/posts.js';

const router = express.Router();

// localhost:4000/posts
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
