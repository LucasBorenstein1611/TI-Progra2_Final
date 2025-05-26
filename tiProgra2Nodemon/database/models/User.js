module.exports = function (sequelize, dataTypes) {
    let alias = "User";
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
    let User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.hasMany(models.Product, { foreignKey: 'user_id' });
        User.hasMany(models.Comment, { foreignKey: 'user_id' });
    };

    return User;
}
