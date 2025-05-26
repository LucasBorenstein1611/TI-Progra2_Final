module.exports = function (sequelize, dataTypes) {
    let alias = "Comentarios";
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
    let Comentarios = sequelize.define(alias, cols, config);

    Comentarios.associate = function(models) {
        Comentarios.belongsTo(models.Usuario, { foreignKey: 'user_id' });
        Comentarios.belongsTo(models.Producto, { foreignKey: 'product_id' });
    };

    return Comentarios;
}
