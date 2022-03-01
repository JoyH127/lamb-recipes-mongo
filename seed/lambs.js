const db = require("../db");
const Lamb = require("../models/lamb");
const Country = require("../models/country");
//error handling purpose
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//cuz of connection , async

const main = async () => {
  //   const country1 = await new Country({
  //     name: "Yeman",
  //   });
  //   country1.save();

  //   const country2 = await new Country({
  //     name: "Turkey",
  //   });
  //   country2.save();
  //   const country3 = await new Country({
  //     name: "China",
  //   });
  //   country3.save();

  //   const country4 = await new Country({
  //     name: "Saudi Arabia",
  //   });
  //   country4.save();
  const yemen = await Country.find({ name: "Yemen" });
  const china = await Country.find({ name: "China" });
  const saudi = await Country.find({ name: "Saudi Arabia" });
  const turkey = await Country.find({ name: "Turkey" });
  const lambs = [
    {
      dish_title: "Lamb Haneeth",
      origin_country: yemen[0]._id,
      ingredients:
        "Lamb(1.5lbs),Green onions, chives, Olive oil,Butter,garlic clovesDried or preserved lemon(lumee)",
      img: "https://everylittlecrumb.com/wp-content/uploads/lambhaneeth-scaled.jpg",
    },
    {
      dish_title: "Lamb Kabsa",
      origin_country: saudi[0]._id,
      ingredients:
        "1 lb. Lamb Loins (or Lamb Shanks or Thighs) ,1.5 cups Basmati Rice ,1 cup Tomato Puree (or Crushed Tomatoes) ,1 lg. Onion ,2 Carrots (Shredded) , ½ cup Avocado Oil (or Ghee or Butter) ,3 tsp. Kabsa Spice , 3 tsp. Salt ,2 Bay Leaves ,1 Cinnamon Stick, 1 Dried Lemon , 4 Cardamom Pods , ½ tsp. Cloves , 2 tb. Pine Nuts ,¼ cup Cashews ,¼ cup Sliced Almonds",
      img: "https://www.simplyleb.com/wp-content/uploads/Lamb-Kabsa-17.jpg",
    },
    {
      dish_title: "Turkish Roasted Lamb",
      origin_country: turkey[0]._id,
      ingredients:
        " 1 leg of lamb (drumstick and thigh portions),1/4 cup olive oil,1 1/2 tablespoons freshly squeezed lemon juice, from 1/2 lemon,1 teaspoon salt,1/2 teaspoon freshly ground black pepper,4 to 5 bay leaves,2 to 3 sprigs fresh rosemary,1/2 cup hot water)",
      img: "https://www.thespruceeats.com/thmb/a17vsRYV8EqyHT_SybtnNBuc5Cs=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kuzu-tandir-1web-56a993383df78cf772a8771a.jpg",
    },
    {
      dish_title: "Mongolian lamb stir-fry",
      origin_country: china[0]._id,
      ingredients:
        "  1 tbsp cornflour,1/2 tsp Chinese five spice ,1 tbsp brown sugar,2 garlic cloves, crushed 1/4 cup soy sauce 600g lamb leg steaks, thinly sliced 1/4 cup peanut oil 2 brown onions, halved, cut into wedges 1 carrot, halved lengthways, sliced diagonally 1 bunch broccolini, trimmed, halved 2 tbsp black bean sauce 1 tbsp shao hsing (Chinese cooking wine) 2 green onions, thinly sliced Steamed white long-grain rice, to serve ",
      img: "https://www.thespruceeats.com/thmb/spTE2lxIa63iJ7wK5SGTZxKPqoo=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/spicy-lamb-144754424-5c93ae58c9e77c00018fb642.jpg",
    },
  ];
  await Lamb.insertMany(lambs);
  console.log("created lamb recipes!");
};

const run = async () => {
  await main();
  db.close();
};

run();
