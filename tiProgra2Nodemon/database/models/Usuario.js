module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        contrasena: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        fecha: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        dni: {
            type: dataTypes.INTEGER(10),
            allowNull: false,
            unique: true
        },
        foto: {
            type: dataTypes.STRING(200),
            allowNull: false
        }
    };
    let config = {
        tableName: "users",
        timestamps: true,
        paranoid: true
    };
    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {
        Usuario.hasMany(models.Producto, { as: 'productos' , foreignKey: 'user_id' });
        Usuario.hasMany(models.Comentarios, { as: 'comentarios' , foreignKey: 'user_id' });
    };

    return Usuario;
}
