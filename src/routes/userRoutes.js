import express from 'express';
import{ getUsers, createUser, updateUser, deleteUser} from '../controllers/userControllers.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/', deleteUser);


export default router;