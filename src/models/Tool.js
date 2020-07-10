const { Model, DataTypes } = require('sequelize');

class Tool extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.TEXT,
            link: DataTypes.TEXT,
            description: DataTypes.TEXT,
            tags: DataTypes.ARRAY(DataTypes.TEXT),
        }, {
                sequelize
            }
        )
    }
}

module.exports = Tool;