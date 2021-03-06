'use strict';
module.exports = (sequelize, DataTypes) => {
  var Invoice = sequelize.define('Invoice', {
    reference: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: DataTypes.FLOAT,
    status: DataTypes.STRING,
    dueAt: DataTypes.DATE,
    customer: DataTypes.STRING
  });

  Invoice.associate = function(models) {
    Invoice.hasOne(models.Payment, {
      foreignKey: 'invoiceId',
      as: 'payment',
    });
  }

  return Invoice;
};
