module.exports = function (sequelize, dataTypes) {
    let alias = "Comment";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        texto: {
            type: dataTypes.STRING(200)
        }
    };
    let config = {
        tableName: "comments",
        timestamps: true,
        paranoid: true
    };
    let Comment = sequelize.define(alias, cols, config);

    Comment.associate = function(models) {
        Comment.belongsTo(models.User, { foreignKey: 'user_id' });
        Comment.belongsTo(models.Product, { foreignKey: 'product_id' });
    };

    return Comment;
}
