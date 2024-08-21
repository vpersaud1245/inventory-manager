const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    description VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS products (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    qty INT NOT NULL,
    img_url VARCHAR(255) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO categories (name, description)
VALUES 
('Dog Toys', 'Toys for dogs'),
('Dog Treats','Treats for dogs'),
('Wet Dog Food', 'Food that is wet'),
('Dry Dog Food', 'Food that is dry');

INSERT INTO products (name, description, price, qty, category_id, img_url)
VALUES
('Benebone Bacon Flavor Wishbone Tough Dog Chew Toy', 
'Benebone''s Wishbone Chew isn''t your dog''s average chew toy. Made in the USA from durable nylon and real USA-sourced bacon throughout, the ergonomic wishbone will keep your dog chewing with delight!', 10.17,10,1,'https://image.chewy.com/is/image/catalog/71968_MAIN._AC_SL1200_V1612404735_.jpg'),
('KONG Classic Dog Toy', 'Give your furry friend a reliable and fun plaything with the KONG Classic Dog Toy.', 9.09, 5, 1, 'https://image.chewy.com/is/image/catalog/53352_MAIN._AC_SL1200_V1534449202_.jpg'),
('Cadet Gourmet Sweet Potato & Duck Wrapped Dog Treat Wraps', 'Cadet Premium Gourmet Sweet Potato & Duck Wrapped Dog Treats let you reward your pup with a wholesome snack that’s bursting with vitamins.', 35.46, 7, 2, 'https://image.chewy.com/is/image/catalog/1194078_MAIN._AC_SL1200_V1716467627_.jpg'),
('SmartBones Mini Peanut Butter Dog Treats', 'Sometimes rawhide is messy and risky, so eliminate that factor by giving your pup yummy Smartbones Mini Peanut Butter Dog Treats instead!', 22.65, 9, 2, 'https://image.chewy.com/is/image/catalog/1194238_MAIN._AC_SL1200_V1716466070_.jpg'),
('Cesar Poultry Lovers Turkey & Chicken Filets in Gravy Variety Pack Small Breed Adult Wet Dog Food Trays', 'Real poultry is the first ingredient in the Cesar Filets in Gravy Poultry Lovers Adult Wet Dog Food for paw-some flavor and nutrition.', 9.99, 3, 3, 'https://image.chewy.com/is/image/catalog/159235_MAIN._AC_SL1200_V1695650078_.jpg'),
('Purina Beneful Medleys Mediterranean Style Canned Dog Food', 'Dazzle your dog at mealtime with Purina Beneful Wet Dog Food. Real lamb delivers meaty goodness in every bite, and the complete and balanced nutrition offered in each can helps support his overall health and well-being.', 1.81, 17, 3, 'https://image.chewy.com/is/image/catalog/100108_MAIN._AC_SL1200_V1718902940_.jpg'),
('Blue Buffalo Life Protection Formula Adult Chicken & Brown Rice Recipe Dry Dog Food', 'Blue Buffalo Life Protection Formula Adult Dry Dog Food is formulated to help your best friend thrive.', 44.98, 20, 4, 'https://image.chewy.com/is/image/catalog/46861_MAIN._AC_SL1200_V1721067574_.jpg'),
('Nutro Natural Choice Small Bites Adult Chicken & Brown Rice Recipe Dry Dog Food', 'Serve your best boy a quality dry dog food made with real, recognizable ingredients that support his vitality.', 54.99, 6, 4, 'https://image.chewy.com/is/image/catalog/109418_MAIN._AC_SL1200_V1713561138_.jpg');

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
