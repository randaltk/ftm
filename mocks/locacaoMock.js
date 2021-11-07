const locacaoMock = [
  {
    id: 1,
    nome: "Bomba Hidráulica para torque",
    imagem:
      "https://res.cloudinary.com/aguadeira/image/upload/v1636239540/FTM/Bomba-Hidraulica-para-torque-PE-55_zi06g5.jpg",

    descricao: `Bomba Hidráulica com acionamento elétrico para uso em até quatro chaves de torque e Link Hidráulico simultâneos para serviço de torqueamento.
    Com manômetro calibrado rastreado RBC`,
    fichaTecnica: {
      pressao: "700 bar 10.000 PSI",
      saidas: "4",
      acionamento: "Elétrico",
      motor: "Elétrico: 1 1/8 HP 12.000 RPM",
      tensao: "220V",
      peso: "36 kg",
      dimensoes: "AxLxC = 460x353x333 mm",
      vazao: "1,02 l/min",
      capacidade: "Reservatório: 9,46 litros",
    },
    imagemTabela:
      "https://res.cloudinary.com/aguadeira/image/upload/v1636290344/FTM/tabela-ftm_tyo3jk.jpg",
  },
  {
    id: 2,
    nome: "Link Propulsor",
    imagem:
      "https://res.cloudinary.com/aguadeira/image/upload/v1636239540/FTM/Link-Propulsor_pixckc.jpg",
    descricao: `O Link é utilizado quando há necessidade de torque controlado em parafuso em áreas de difícil acesso e pouco espaço, esta ferramenta é muito utilizada em plataformas de petróleo, usina hidrelétrica e gasodutos

    O link é versátil suporta uma vasta gama de sextavados com cassetes intercambiáveis ​. Eles entregam torque de precisão durante a montagem.`,
    fichaTecnica: {
      pressao: "700 bar 10.000 PSI",
      saidas: "4",
      acionamento: "Elétrico",
      motor: "Elétrico: 1 1/8 HP 12.000 RPM",
      tensao: "220V",
      peso: "36 kg",
      dimensoes: "AxLxC = 460x353x333 mm",
      vazao: "1,02 l/min",
      capacidade: "Reservatório: 9,46 litros",
    },
    imagemTabela:
      "https://res.cloudinary.com/aguadeira/image/upload/v1636290344/FTM/tabela-ftm_tyo3jk.jpg",
  },
  {
    id: 3,
    nome: "Chave de torque",
    imagem:
      "https://res.cloudinary.com/aguadeira/image/upload/v1636239540/FTM/Chave-de-Torque_tfexzl.jpg",
    descricao: `Ferramenta utilizada quando se requer o torque controlado dos parafusos, muito utilizado para o aperto de flanges, trocadores de calor, gruas, montagem de máquinas industriais.

    Chave de torque de alto desempenho oferece um design compacto, construído em liga de alumínio-titânio alta resistência para maior intensidade e durabilidade da ferramenta, minimizando o peso.
    
    Swivel podendo ser ajustado em 360° e 180° grau facilitando a conexão da mangueira permitindo ajuste fácil em espaços confinados, eliminando as dobras.
    
    Drive quadrado: de 1/2" à 2 ½" que abrange uma grande quantidade de soquetes.
    
    Catraca anti-reverso, projetado para impedir o retorno da catraca para manter o torque necessário.
    
    Faixa de Torque 272 Nm à 35.200 Nm
    
    Certificado de calibração rastreado RBC
    
    Pressão Máxima 700 bar`,
    fichaTecnica: {
      pressao: "700 bar 10.000 PSI",
      saidas: "4",
      acionamento: "Elétrico",
      motor: "Elétrico: 1 1/8 HP 12.000 RPM",
      tensao: "220V",
      peso: "36 kg",
      dimensoes: "AxLxC = 460x353x333 mm",
      vazao: "1,02 l/min",
      capacidade: "Reservatório: 9,46 litros",
    },
    imagemTabela:
      "https://res.cloudinary.com/aguadeira/image/upload/v1636290344/FTM/tabela-ftm_tyo3jk.jpg",
  },
  {
    id: 1,
    nome: "Mangueiras Hidráulicas Duplas",
    imagem:
      "https://res.cloudinary.com/aguadeira/image/upload/v1636239540/FTM/Mangueiras-Hidraulica-Duplas1_el54b5.jpg",

    descricao: `Mangueira Hidáulica prensada para alta pressão para uso em ferramentas de torqueamento hidráulico, flexível e resistente.

    Capacidade: 960 bar 14.000 PSI`,
    fichaTecnica: {
      pressao: "700 bar 10.000 PSI",
      saidas: "4",
      acionamento: "Elétrico",
      motor: "Elétrico: 1 1/8 HP 12.000 RPM",
      tensao: "220V",
      peso: "36 kg",
      dimensoes: "AxLxC = 460x353x333 mm",
      vazao: "1,02 l/min",
      capacidade: "Reservatório: 9,46 litros",
    },
    imagemTabela:
      "https://res.cloudinary.com/aguadeira/image/upload/v1636290344/FTM/tabela-ftm_tyo3jk.jpg",
  },
  // {
  //   descricao: `Bomba Hidráulica com acionamento elétrico para uso em até quatro chaves de torque e Link Hidráulico simultâneos para serviço de torqueamento.
  //   Com manômetro calibrado rastreado RBC`,
  //   imagemTabela: "",
  //   nome: "Link Propulsor",
  //   image:
  //     "https://res.cloudinary.com/aguadeira/image/upload/v1636239540/FTM/Link-Propulsor_pixckc.jpg",
  //   id: 2,
  // },
  // {
  //   descricao: "",
  //   imagemTabela: "",
  //   nome: "Chave de torque",
  //   image:
  //     "https://res.cloudinary.com/aguadeira/image/upload/v1636239540/FTM/Chave-de-Torque_tfexzl.jpg",

  //   id: 3,
  //   descricao: "",
  //   imagemTabela: "",
  // },
  // {
  //   nome: "Mangueiras Hidráulicas Duplas",
  //   image:
  //     "https://res.cloudinary.com/aguadeira/image/upload/v1636239540/FTM/Mangueiras-Hidraulica-Duplas1_el54b5.jpg",

  //   id: 4,
  //   descricao: "",
  //   imagemTabela: "",
  // },
];
export default locacaoMock;
