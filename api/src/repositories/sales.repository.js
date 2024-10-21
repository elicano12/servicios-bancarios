const { Sales } = require("../models");

const getSales = () => {
    return Sales.findAll(); 
};

const createSales = (sales) => {
    return Sales.create(sales);
};

const updateSales = (sales, id) => {
    return Sales.update(sales, { where: { id }, returning: true });
};

const deleteSales = (id) => {
    return Sales.destroy({ where: { id } });
};

module.exports = {
    getSales,
    createSales,
    updateSales,
    deleteSales,
  };