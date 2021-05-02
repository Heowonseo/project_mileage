const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      userId: {
          type: Sequelize.STRING(40),
          allowNull: false,
          unique: true,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      pend: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
        defultValue:'0'
      },
      pgot: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
        defultValue:'0'
      },
      pgtw: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
        defultValue:'0'
      },
      pnight: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
        defultValue:'0'
      },
      result: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defultValue:'0'
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }};
