const db = require("../db/queries");

module.exports = {
  getAllCategories: async function (req, res) {
    console.log("...Retreiving categories");
    const categories = await db.getAllCategories();
    res.send(categories);
    res.end;
  },
};
