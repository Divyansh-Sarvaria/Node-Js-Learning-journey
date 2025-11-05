const fs = require("fs");
const { resolve } = require("path");
const superagent = require("superagent");
const { reject } = require("superagent/lib/request-base");

const readfilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("i can't find the file");
      resolve(data);
    });
  });
};

const writefilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("Not Found");
      resolve("success");
    });
  });
};

const getdogpic = async () => {
  try {
    const data = await readfilePro(`${__dirname}/dog.txt`);
    console.log(`breed:${data}`);
    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);
    await writefilePro("dog-img.txt", res.body.message);
    console.log("saved");
  } catch (err) {
    console.log(err);
    throw err;
  }
  return "2: ready";
};
console.log("1:getdogpic");
getdogpic()
  .then((x) => {
    console.log(x);
    console.log("3:done");
  })
  .catch((err) => {
    console.log(err);
  });

// readfilePro(`${__dirname}/dog.txt`)
//   .then((data) => {
//     console.log(`breed:${data}`);
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then((res) => {
//     console.log(res.body.message);

//     return writefilePro("dog-img.txt", res.body.message);

//     // fs.writeFile("dog-img.txt", res.body.message, (err) => {
//     //   console.log("img save to file");
//     // });
//   })
//   .then(() => {
//     console.log(err.message);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
