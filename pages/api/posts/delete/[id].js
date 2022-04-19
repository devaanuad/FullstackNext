import db from '../../../../libs/db';

export default async function handler(req, res) {
	if (req.method !== 'DELETE') return req.status(405).end();

	const { id } = req.query ;

	const deleteRow = await db('posts')
	.where({ id })
	.del();

	res.status(200);
	res.json({
		message : 'sucesss Delete',
		
	})	;

}