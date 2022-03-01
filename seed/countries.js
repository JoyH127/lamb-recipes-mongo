const db = require("../db");
const Country = require("../models/country");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const countries = [
    {
      name: "Yemen",
    },
    {
      name: "Turkey",
    },
    {
      name: "Saudi Arabia",
    },
    {
      name: "China",
    },
  ];

  await Country.insertMany(countries);
  console.log("Created countries!");
};

//excute it everything
const run = async () => {
  await main();
  db.close();
};

run();
