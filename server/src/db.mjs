import dotenv from "dotenv";
import pgp from "pg-promise";

import { DOTENV_FILE } from "./constants.mjs";

const db = initDb();

export const getTasks = (sub) =>
  db.any(
    "SELECT tasks.* FROM tasks LEFT JOIN users on user_id=users.id WHERE sub=$<sub>",
    { sub },
  );

export const getDestinations = () => db.any(`SELECT * FROM "donation_sites"`);
export const getDonations = () => db.any("SELECT * FROM donation_event");
export const getDonationData = () => db.any("SELECT SUM(lbs), product_type_id, EXTRACT(year FROM date) as year FROM donation_event GROUP by product_type_id, year");

export const addTask = (sub, name) =>
  db.one(
    `INSERT INTO tasks(user_id, name)
      VALUES((SELECT id FROM users WHERE sub=$<sub>), $<name>)
      RETURNING *`,
    { sub, name },
  );

export const addDonation = (donation) =>
  db.one(
    "INSERT INTO donation_event(carrier_name, donation_site_name, product_owner, product_type_id, lbs, date) VALUES(${carrier_name}, ${donation_site_name}, $<product_owner>, ${product_type_id}, ${lbs}, ${date}) RETURNING *",
    donation,
  );
// console.log("hello", donation)
export const addOrUpdateUser = (user) =>
  db.one(
    `INSERT INTO users(given_name, family_name, picture, email, sub)
      VALUES($<given_name>, $<family_name>, $<picture>, $<email>, $<sub>)
      ON CONFLICT (sub) DO
        UPDATE SET given_name = $<given_name>, family_name = $<family_name>,
          picture = $<picture>, email=$<email>
      RETURNING *`,
    user,
  );

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: DOTENV_FILE });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
