import knex from "../../clients/knex";

export default async (req, res) => {
  if (req.method === "GET") {
    const palettes = req.query.searchQuery
      ? await knex("palettes").whereRaw("name like '%??%'", [
          req.query.searchQuery,
        ])
      : await knex("palettes");

    res.status(200).json(palettes);
  } else if (req.method === "POST") {
    await knex("palettes")
      .returning("id")
      .insert({
        name: req.body.name,
        red1: req.body.red1,
        green1: req.body.green1,
        blue1: req.body.blue1,
        red2: req.body.red2,
        green2: req.body.green2,
        blue2: req.body.blue2,
        red3: req.body.red3,
        green3: req.body.green3,
        blue3: req.body.blue3,
        red4: req.body.red4,
        green4: req.body.green4,
        blue4: req.body.blue4,
        red5: req.body.red5,
        green5: req.body.green5,
        blue5: req.body.blue5,
      })
      .then(async (response) => {
        const [palette] = await knex("palettes")
          .where({ id: response[0].id })
          .limit(1);
        res.status(201).json(palette);
      });
  } else if (req.method === "PUT") {
    await knex("palettes")
      .where({ id: req.body.id })
      .update({
        name: req.body.name,
        red1: req.body.red1,
        green1: req.body.green1,
        blue1: req.body.blue1,
        red2: req.body.red2,
        green2: req.body.green2,
        blue2: req.body.blue2,
        red3: req.body.red3,
        green3: req.body.green3,
        blue3: req.body.blue3,
        red4: req.body.red4,
        green4: req.body.green4,
        blue4: req.body.blue4,
        red5: req.body.red5,
        green5: req.body.green5,
        blue5: req.body.blue5,
      })
      .then(async () => {
        const [palette] = await knex("palettes")
          .where({ id: req.body.id })
          .limit(1);
        res.status(200).json(palette);
      });
  } else if (req.method === "DELETE") {
    await knex("palettes")
      .where({ id: req.body.id })
      .del()
      .then(async (response) => {
        console.log(response);
        res.status(200).json("test");
      });
  } else {
    res.status(404).json({ error: `${req.method} endpoint does not exist` });
  }
};
