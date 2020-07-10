const Tool = require('../models/Tool');
const { Op } = require('sequelize');

module.exports = {
    async store(req, res) {
        const { title, link, description, tags } = req.body;

        const tool = await Tool.create({ title, link, description, tags });

        return res.status(201).json(tool);
    },

    async index(req, res) {
        const tools = await Tool.findAll();
        return res.json(tools);
    },

    async findByTag(req, res) {
        const { query } = req;
        const tagSearch = query.tag.split(',').map(m => "" + m);
        const tools = await Tool.findAll({ where: { tags: { [Op.contains]: [tagSearch] } } })
        return res.json(tools);
    },

    remove(req, res) {
        const { params } = req;
        Tool.destroy({ where: { id: params.id } })
        return res.status(204).send('No Content');
    }

}