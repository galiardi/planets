const fs = require("fs");
const { parse } = require("csv-parse");

const results = [];

fs.createReadStream("./kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    results.push(data);
  })
  .on("error", (error) => console.log(error))
  .on("end", () => {
    console.log("end of stream");
  });

console.log("end reading the code.");
