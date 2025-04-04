import express, { Request, Response } from 'express';

import userModel from '../src/models/user.model.js';
import { SayHello } from '../src/interfaces/customErrors/customErrors.js';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
	try {
		userModel.find({}).then((data) => {
			res.json({
				msg: '',
				payload: data,
			});
		});
	}catch(err){
		res.json({err});
	}
});
router.post('/add', (req: Request, res: Response) => {
	try {
		const user = new userModel({
			username: 'daviJ999',
			firstname: 'David',
			lastname: 'Johnson',
		});
		user.save().then(() => res.json({
				msg: 'data added successfully...!'
			})).catch((err: SayHello) => res.json({error: err}));
	}catch{
		res.json({error: 'Invalid Add Request!'});
	}
});
router.post('/add22', (req: Request, res: Response) => {
	try{
		res.json({msg: 'data added successfully from /add2...!'})
	}catch{
		res.json({error: 'Invalid Add Request!'});
	}
});

export default router;
