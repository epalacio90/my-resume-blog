const Work = require('../models/Work_schema');

const createWork = async (req, res) => {
			try {
				const { title, content, color, image } = req.body;
				const work = await Work.create({
						title,
						content,
						color,
						image
				});
				return res.status(200).json({ success: true, data: work });
		} catch (e) {
				console.error(e);
				return res.status(500).json({ success: false, message: e.message });
		}
}

const getAllWorks = async (req, res) => {
		try {
				const works = await Work.find();
				return res.status(200).json({ success: true, data: works });
		} catch (e) {
				console.error('the error is:: ', e);
				return res.status(500).json({ success: false, message: e.message });
		}
}

exports.createWork = createWork;
exports.getAllWorks = getAllWorks;