'use strict';
module.exports = (sequelize, DataTypes) => {
  var Payment = sequelize.define('Payment', {
    invoiceId: DataTypes.INTEGER,
    reference: {
      type: DataTypes.STRING,
      allowNull: false
    },
    paidAt: DataTypes.DATE,
    method: DataTypes.STRING,
    walletName: DataTypes.STRING,
    walletId: DataTypes.STRING
  });
  Payment.associate = function(models) {
    Payment.belongsTo(models.Invoice, {
      foreignKey: 'invoiceId',
      onDelete: 'CASCADE',
    });
   }
  
  return Payment;
};
