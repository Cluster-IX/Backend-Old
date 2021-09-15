const { PrismaClient } = require("@prisma/client");
const { readFile, writeFile, appendFile } = require("fs/promises");

const prisma = new PrismaClient();

(async () => {

  //   console.timeEnd("halo");

  // await prisma.test.deleteMany()

  // console.log(allSoal)
  //   let FILESTRING = "";

  const maxSiswa = 500 * 1000;
  const maxSoal = 40;
  const maxMapel = 7;
  const optionEach = 4;
  const maxJawaban = maxSoal * maxMapel * optionEach;
  const options = ["a", "b", "c", "d"];

  for(let siswa = 1; siswa <= maxSiswa; siswa++ ){
  // for (let siswa = 1; siswa <= 10; siswa++) {
    let currentJwbId = 1;
    for (let ngerjain = 1; ngerjain <= maxSoal * maxMapel; ngerjain++) {
      const jwbId = currentJwbId + random(0, 4);

      console.log(siswa,ngerjain,currentJwbId)

      await prisma.test.create({
        data: {
          id_siswa: siswa,
          id_jawaban: jwbId,
        },
      });
      currentJwbId += 4;
    }
  }
})();

function random(mn, mx) {
  return Math.floor(Math.random() * (mx - mn) + mn);
}
