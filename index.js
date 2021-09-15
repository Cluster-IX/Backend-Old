const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // const getNilai = await prisma.result.findMany({
  //   where: {
  //     siswa: {
  //       id: 1,
  //     },
  //   },
  //   select: {
  //     jawaban: {
  //       select: {
  //         soal: {
  //           select:{
  //             content: true
  //           }
  //         }
  //       }
  //     },
  //     siswa: {
  //       select :{
  //         nama:true
  //       }
  //     },
  //   },
  // });
  const getNilai = await prisma.result.findMany({
    where: {
      siswa: {
        id: 1,
      },
      jawaban: {
        jawaban_benar: true
      }
    },
    select: {
      siswa: {
        select :{nama: true, nrp: true}
      },
      jawaban: {
        select: {
          soal: { select: { content: true } },
        },
      },
    },
  });

  // console.log(getNilai);
  // console.log(getNilai.length);
  // for(item of getNilai){
  //   console.log(item.jawaban.soal)
  // }
  return 0
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
