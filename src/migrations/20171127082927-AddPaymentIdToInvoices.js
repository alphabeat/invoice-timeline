'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Invoices', 'paymentId', {type: Sequelize.STRING});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Invoices', 'paymentId');
  }
};
