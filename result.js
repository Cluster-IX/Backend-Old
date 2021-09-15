const { PrismaClient } = require("@prisma/client");
const { readFile, writeFile, appendFile } = require("fs/promises");

const prisma = new PrismaClient();

(async (arg) => {
  // const start = arg[2]
  // console.timeEnd("halo");

  // await prisma.test.deleteMany()

  // console.log(allSoal)
  // let FILESTRING = "";

  const maxSiswa = 500 * 1000;
  const maxSoal = 40;
  const maxMapel = 7;
  const optionEach = 4;
  const maxJawaban = maxSoal * maxMapel * optionEach;
  const options = ["a", "b", "c", "d"];

  for (let siswa = 1; siswa <= maxSiswa; siswa++) {
  // for (let siswa = start + 1; siswa <= start * 10; siswa++) {
    let currentJwbId = 1;
    const data = [];
    for (let ngerjain = 1; ngerjain <= maxSoal * maxMapel; ngerjain++) {
      const jwbId = currentJwbId + random(0, 4);

      const record = {
        id_siswa: siswa,
        id_jawaban: jwbId,
      };

      data.push(record);
      currentJwbId += 4;
    }

    // console.log(data[0], data.length);
    await prisma.result.createMany({ data });
  }
})(process.argv);

function random(mn, mx) {
  return Math.floor(Math.random() * (mx - mn) + mn);
}
