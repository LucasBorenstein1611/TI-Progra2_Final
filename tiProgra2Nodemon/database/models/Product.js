module.exports = function (sequelize, dataTypes) {
    let alias = "Product";
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
    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.User, { foreignKey: 'user_id' });
        Product.hasMany(models.Comment, { foreignKey: 'product_id' });
    };

    return Product;
}
