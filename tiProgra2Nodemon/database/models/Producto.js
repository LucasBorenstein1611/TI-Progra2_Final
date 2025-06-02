module.exports = function (sequelize, dataTypes) {
    let alias = "Producto";
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
        imagen: {
            type: dataTypes.STRING(100)
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING(200)
        }
    };
    let config = {
        tableName: "products",
        timestamps: true,
        paranoid: true
    };
    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
        Producto.belongsTo(models.Usuario, { as: 'usuario' , foreignKey: 'user_id' });
        Producto.hasMany(models.Comentarios, { as: 'comentarios', foreignKey: 'product_id' });
    };

    return Producto;
}
