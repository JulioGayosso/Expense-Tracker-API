CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "name" varchar(100),
  "email" varchar(100),
  "password" varchar(100)
);

CREATE TABLE "Expense" (
  "id" serial PRIMARY KEY,
  "description" varchar(150),
  "amount" integer,
  "date_amount" date,
 /*  "user_id" int */ // llave foranea
);

ALTER TABLE "Expense" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
