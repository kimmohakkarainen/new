const Data = () => {
  return {
    nodes: [
      { name: "tase" },
      /* vastattavaa */
      { name: "Oma pääoma" },
      { name: "Osakepääoma" },
      { name: "Edellisten tilikausien voitto" },
      { name: "Tilikauden voitto" },

      { name: "Vieras pääoma" },

      { name: "Pitkäaikainen" },
      { name: "Lainat" },

      { name: "Lyhytaikainen" },
      { name: "Ostovelat" },
      { name: "Muut velat" },
      { name: "Siirtovelat" },

      /* vastaavaa */

      { name: "Pysyvät vastaavat" },
      { name: "Liikearvo" },

      { name: "Vaihtuvat vastaavat" },

      { name: "Saamiset" },
      { name: "Myyntisaamiset" },
      { name: "Muut saamiset" },
      { name: "Siirtosaamiset" },

      { name: "Rahat ja pankkisaamiset" }
    ],
    links: [
      { source: 1, target: 0, value: 214772 },

      { source: 2, target: 1, value: 5029 },
      { source: 3, target: 1, value: 80997 },
      { source: 4, target: 1, value: 128746 },

      { source: 5, target: 0, value: 607133 },

      { source: 6, target: 5, value: 326000 },
      { source: 7, target: 6, value: 326000 },

      { source: 8, target: 5, value: 281133 },
      { source: 9, target: 8, value: 109459 },
      { source: 10, target: 8, value: 84332 },
      { source: 11, target: 8, value: 87341 },

      { source: 0, target: 12, value: 6400 },
      { source: 0, target: 14, value: 815505 },

      { source: 12, target: 13, value: 6400 },

      { source: 14, target: 15, value: 471812 },

      { source: 15, target: 16, value: 466563 },
      { source: 15, target: 17, value: 4594 },
      { source: 15, target: 18, value: 655 },

      { source: 14, target: 19, value: 343693 }
    ]
  };
};

export default Data;
