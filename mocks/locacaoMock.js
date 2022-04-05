const locacaoMock = [
  {
    id: 1,
    nome: "Linha FCH",
    imagem:
      "https://res.cloudinary.com/aguadeira/image/upload/v1642440765/FTM/vendas/fch_pdkaxz.jpg",
    descricao: `Ferramenta utilizada quando se requer o torque controlado dos parafusos, muito utilizado para o aperto de flanges, trocadores de calor, gruas, montagem de máquinas industriais. 
    Chave de torque de alto desempenho oferece um design compacto, construído em liga de alumínio-titânio alta resistência para maior intensidade e durabilidade da ferramenta, minimizando o peso. 
    Swivel podendo ser ajustado em 360° e 180° grau facilitando a conexão da mangueira permitindo ajuste fácil em espaços confinados, eliminando as dobras.
    `,
    fichaTecnica: {
      pressao: "Design Compacto",
      saidas: "Melhor na indústria relação resistência-peso ",
      acionamento: "Pressão Máxima 700 bar",
      motor: "Faixa de torque 272 à 72.000 N.m ",
      tensao: " Certificado de calibração rastreado RBC ",
      peso: " Drive quadrado: de 1/2” à 2 ½” que abrange uma grande quantidade de soquetes.",
      dimensoes:
        "Swivel podendo ser ajustado em 360° e 180° grau facilitando a conexão da mangueira permitindo ajuste fácil em espaços confinados, eliminando as dobras. ",
      vazao: "1,02 l/min",
      capacidade:
        "Trava anti-reverso, projetada para impedir o retorno da catraca para manter o torque necessário.",
    },
    imagemTabela:
      "https://res.cloudinary.com/aguadeira/image/upload/v1642441202/FTM/vendas/fcharq_t4rm9y.png",
    imagemArq:
      "https://res.cloudinary.com/aguadeira/image/upload/v1642441075/FTM/vendas/fcharq_ylncw3.jpg",
  },
  {
    id: 2,
    nome: "Linha F",
    imagem:
      "https://res.cloudinary.com/aguadeira/image/upload/v1642427393/FTM/vendas/ftm-f_3_kuu0uu.jpg",

    descricao: `O Link é utilizado quando há necessidade de torque controlado em parafuso em áreas de difícil acesso e pouco espaço, esta ferramenta é muito utilizada em plataformas de petróleo, usina hidrelétrica e gasodutos 
    O link é versátil suporta uma vasta gama de sextavados com cassetes intercambiáveis . Eles entregam torque de precisão durante a montagem. 
    `,
    fichaTecnica: {
      pressao: "Design Compacto",
      saidas: "Melhor na indústria relação resistência-peso ",
      acionamento: "Pressão Máxima 700 bar",
      motor: "Faixa de torque 160 à 21.336 N.m ",
      tensao: "Certificado de calibração rastreado RBC ",
      peso: "Link propulsor Hidráulico de alto desempenho oferece um design compacto, construído em liga de alumínio-titânio alta resistência para maior intensidade e durabilidade da ferramenta, minimizando o peso.",
      dimensoes:
        "Swivel podendo ser ajustado em 360° e 180° grau facilitando a conexão da mangueira permitindo ajuste fácil em espaços confinados, eliminando as dobras. ",
      vazao: "1,02 l/min",
      capacidade:
        "Trava anti-reverso, projetada para impedir o retorno da catraca para manter o torque necessário. ",
    },
    imagemTabela: ` 
    https://res.cloudinary.com/aguadeira/image/upload/v1642437739/FTM/vendas/tabelafh_1_q7knuj.png`,
    imagemArq:
      "https://res.cloudinary.com/aguadeira/image/upload/v1642428148/FTM/vendas/ftm-f-arq_ft5t4d.jpg",
  },
  {
    id: 3,
    nome: "Linha FLCT",
    imagem:
      "https://res.cloudinary.com/aguadeira/image/upload/v1643132201/FTM/vendas/Sem_t%C3%ADtulo_elt6rg.png",

    descricao: `Assim como a linha F a linha FLCT também é uma chave de torque tipo LINK e que tem características bem parecidas nos tipos de serviços como áreas de difícil acesso e pouco espaço, também muito utilizada em plataformas de petróleo, usinas de cana de açúcar, hidrelétricas e gasodutos.
    O Link é versátil suporta uma vasta gama de sextavados com cassetes intercambiáveis.
    `,
    fichaTecnica: {
      pressao: "Design Compacto",
      saidas:
        "Cabeçote feito de liga Alumínio-Titânio melhorando no peso do equipamento e com alta resistência.",
      acionamento: "Pressão Máxima 700 bar",
      motor: "Faixa de torque 260 à 43.100 N.m",
      tensao: "Certificado de calibração rastreado RBC",
      peso: "Link propulsor Hidráulico de alto desempenho oferece um design compacto, com cabeçote construído em liga de alumínio-titânio alta resistência para maior intensidade e durabilidade da ferramenta, minimizando o peso.",
      dimensoes:
        "Swivel podendo ser ajustado em 360° e 180° grau facilitando a conexão da mangueira permitindo ajuste fácil em espaços confinados, eliminando as dobras.",
      vazao:
        "Swivel podendo ser ajustado em 360° e 180° grau facilitando a conexão da mangueira permitindo ajuste fácil em espaços confinados, eliminando as dobras.",
      capacidade: "",
    },
    imagemTabela:
      "https://res.cloudinary.com/aguadeira/image/upload/v1643132688/FTM/vendas/Sem_t%C3%ADtulo_2_b7zn0c.png",
    imagemArq:
      "https://res.cloudinary.com/aguadeira/image/upload/v1643132546/FTM/vendas/Sem_t%C3%ADtulo_1_jpdnuk.png",
  },
  {
    id: 4,
    nome: "Multiplicador de Torque",
    imagem:
      "https://res.cloudinary.com/aguadeira/image/upload/v1643071441/FTM/vendas/ftmumiljha_1_r9ftdo.png",
    descricao: `Equipamento utilizado nos serviços de aparafusamento com grande eficiência e design compacto, alcançando torque alto na saída a partir de torque baixo na entrada.
    Multiplicador estilo LINK com o melhor para a indústria em relação a característica Resistencia-Peso com trava anti-retorno para proteção do operador.
    Os Multiplicadores FTM tem a capacidade de multiplicar o torque de entrada em 4:1 para o torque de saída. `,
    fichaTecnica: {
      pressao: "Design Compacto",
      saidas: "Melhor na indústria relação resistência-peso ",
      acionamento: "Entrada Máxima de 340 N.m à Saída máxima de 1.360 N.m",
      motor: "Fator de Multiplicação 4:1 ",
      tensao: "Certificado de calibração rastreado RBC",
      peso: "Entrada (Quadrado) ½” / Saída (Sextavado) 46 mm",
      dimensoes:
        "Trava anti-reverso, projetada para impedir o retorno da catraca para manter o torque necessário",
      vazao: "",
      capacidade: "",
    },
    imagemTabela:
      "https://res.cloudinary.com/aguadeira/image/upload/v1643131392/FTM/vendas/ftm2lte22_pvd0lo.png",
    imagemArq:
      "https://res.cloudinary.com/aguadeira/image/upload/v1643125866/FTM/vendas/ftm2lalala_qtfwmz.png",
  },

  {
    id: 5,
    nome: "Tensionador",
    imagem:
      "https://res.cloudinary.com/aguadeira/image/upload/v1646222433/FTM/vendas/tensionadorwind_1_b2pnsr.png",

    descricao: `Os Tensionadores FTM da linha WIND foram projetados para atender a indústria de geração de energia eólica, vapor e gás, principalmente na indústria eólica.
    Os Tensionadores WIND tem alto desempenho, alta resistência, durabilidade e facilidade no uso do equipamento.
    Nossos Tensionadores são calibrados em laboratório com rastreabilidade RBC.
    `,
    fichaTecnica: {
      pressao: "Vedações com grande durabilidade e alta resistência.",
      saidas: "Pressão máxima de 1350 bar",
      acionamento: "Faixa de força de 134,4 à 2.213 k.N",
      motor: "Certificado de calibração com rastreabilidade RBC",
      tensao:
        "Indicador de fim de curso: Indica para que o curso máximo não seja ultrapassado",
      peso: "Conexão de engate rápido, mais segura e simples",
      dimensoes: "",
      vazao: "",
      capacidade: "",
    },
    imagemTabela:
      "https://res.cloudinary.com/aguadeira/image/upload/v1643214100/FTM/vendas/Sem_t%C3%ADtulo_4_pzncz8.png",
    imagemArq: "/",
  },
  {
    id: 6,
    nome: "Bomba Hidráulica para Torque",
    imagem:
      "https://res.cloudinary.com/aguadeira/image/upload/v1646250935/FTM/vendas/WhatsApp_Image_2022-03-02_at_16.51.07_1_fjv6vo.jpg",

    descricao: `Bomba Hidráulica com acionamento elétrico para uso em até quatro chaves de torque e Link Hidráulico simultâneos para serviço de torqueamento.
    Com manômetro calibrado rastreado RBC
    `,
    fichaTecnica: {
      pressao: "Pressão: 700 bar 10.000 PSI",
      saidas: "Saídas: 4",
      acionamento: "Acionamento: Elétrico",
      motor: "Motor Elétrico: 1 1/8 HP 12.000 RPM",
      tensao: "Tensão: 220V",
      peso: "Peso: 36 kg",
      dimensoes: "Dimensões: AxLxC = 460x353x333 mm",
      vazao: "Vazão: 1,02 l/min",
      capacidade: "Capacidade Reservatório: 9,46 litros",
    },
    imagemTabela: "/",
    imagemArq: "/",
  },

  {
    id: 7,
    nome: "Torquímetro Manual",
    imagem:
      "https://res.cloudinary.com/aguadeira/image/upload/v1646246131/FTM/vendas/torquimetro-manual_mglevd.jpg",

    descricao: `Usado para ajustar precisamente o torque de um parafuso em uma porca.
    Possui sistema de encaixe do quadrado que permite a utilização do torquímetro no sentido horário e anti-horário
    Sinal acústico indicando o final do torque.
    Possui sistema de segurança contra desregulagem acidental durante a operação de torque
    Acompanha estojo e manual de operação.
    Certificado de calibração rastreado RBC
    `,
    fichaTecnica: {
      pressao: "Acompanha estojo e manual de operação",
      saidas: "Certificado de calibração rastreado RBC",
      acionamento: "Dados técnicos",
      motor: "Capacidade de até 3000 Nm",
      tensao: "Quadrado: 1/4, 3/8 , 1/2 , 3/4 , 1 e 1.1/2",
      peso: "",
      dimensoes: "",
      vazao: "",
      capacidade: "",
    },
    imagemTabela: "/",
    imagemArq: "/",
  },

  {
    id: 8,
    nome: "Máquinas de Corte e Bisel",
    imagem:
      "https://res.cloudinary.com/aguadeira/image/upload/v1646246769/FTM/vendas/Maquinas-de-Corte-e-Bisel_zzyzsb.jpg",

    descricao: `Máquina realiza corte a frio para usinagem de tubos corte e bisel pode ser montada em tubulação com as seguintes vantagens:
    `,
    fichaTecnica: {
      pressao: "Modelo Bi-partida",
      saidas: "Acionamento Pneumático",
      acionamento: "Consumo de ar 7 bar",
      motor: "Espessura Máxima de tubo 3",
      tensao:
        "Máquinas para diferente diâmetro de tubo: 2 à 6 / 8 à 14 / 16 à 22 / 24 à 30",
      peso: "",
      dimensoes: "",
      vazao: "",
      capacidade: "",
    },
    imagemTabela: "/",
    imagemArq: "/",
  },

  {
    id: 9,
    nome: "Faceadora de Flanges",
    imagem:
      "https://res.cloudinary.com/aguadeira/image/upload/v1646247663/FTM/vendas/Faceadora-de-Flanges_vhzad0.jpg",

    descricao: `Esta máquina realiza chanfro em tubulação de diversos diâmetros, podendo facear o tubo internamente.
    A faceadora realiza bisel de diferentes tipos U, V, J de linha de solda inclinada. A faceadora pode ser utilizada em tubulações de diferentes composições, aço de carbono, aço
    inoxidável e tubos de aço-liga, mas também pode tratar a flange convexo soldado e flange simples. O ângulo de processamento é escolhido arbitrariamente, a faca pode ser ajustada
    automaticamente.
    Os serviços mais comuns para a faceadora são:
    `,
    fichaTecnica: {
      pressao: "Acionamento Pneumático",
      saidas: "Consumo de Ar 7 bar",
      acionamento:
        "Modelos e Capacidade: FF 12 Capacidade de 1 à 3 / FF 24 capacidade de 4 à 16; FF 40 capacidade de 18 à 60",
      motor:
        "Utilização: Ranhura Expiral - Concêntrico e liso - Casco - Boleado - Carretel Boca de Visita - Flanges - Espelho",
      tensao: "",
      peso: "",
      dimensoes: "",
      vazao: "",
      capacidade: "",
    },
    imagemTabela: "/",
    imagemArq: "/",
  },

  {
    id: 10,
    nome: "Torqueadeira Rotativa Elétrica",
    imagem:
      "https://res.cloudinary.com/aguadeira/image/upload/v1646663366/FTM/vendas/Torqueadeira-Rotativa-Eletrica_sjufmq.jpg",

    descricao: `A torqueadeira rotativa aplica o torque no parafuso de forma rotativa e contínua garantindo a maior rapidez na aplicação de torque controlado.
    Fácil operação, pois o torque é pré programado.  
    Máquina leve e compacta de fácil transporte.
    É um sistema eletrônico aferido que atua sobre um sistema elétrico que impulsiona o conjunto de redução mecânica planetária transmitindo o torque para o drive quadrado.
    `,
    fichaTecnica: {
      pressao: "Capacidade: 125 à 4500 Nm",
      saidas: "Peso: 12 kg",
      acionamento: "Drive quadrado: 1",
      motor: "Utilizados em:",
      tensao: "Petroquímicas (Refinária)",
      peso: "Mineração",
      dimensoes: "Ferrovias",
      vazao: "Indústria de Papel e Celulose",
      capacidade: "Indústria Automobilística",
    },
    imagemTabela: "/",
    imagemArq: "/",
  },

  {
    id: 11,
    nome: "Corta Porca Hidráulico",
    imagem:
      "https://res.cloudinary.com/aguadeira/image/upload/v1647085233/FTM/vendas/Corta-porca-hidraulico_i1vvkk.jpg",

    descricao: `Corta Porcas Hidráulico fácil manuseio compacto e leve altamente resistente
    Não deve ser utilizados em porca quadrado, a dureza máxima do material a ser cortado é HRc-44.
    `,
    fichaTecnica: {
      pressao: "Sextavado: 24 à 32 mm",
      saidas: "Capacidade: 15 toneladas",
      acionamento: "Peso: 3 kg",
      motor: "",
      tensao: "",
      peso: "",
      dimensoes: "",
      vazao: "",
      capacidade: "",
    },
    imagemTabela: "/",
    imagemArq: "/",
  },

  {
    id: 12,
    nome: "Chave de Impacto Pneumática",
    imagem:
      "https://res.cloudinary.com/aguadeira/image/upload/v1648562006/FTM/vendas/Chave-de-Impacto-Pneumatica_papsdt.jpg",
    descricao: `Ferramenta geralmente utilizada para apertar e soltar porcas de segurança. Este tipo de ferramenta é desenvolvida especialmente para proporcionar a máxima transmissão da energia
    de impacto para a porca sendo muito útil para a manipulação de parafusos oxidados, entre outras utilizações.
    `,

    fichaTecnica: {
      pressao: "Encaixe Quadrado: 1",
      saidas: "Consumo de Ar: 6 bar",
      acionamento: "Mangueira: 3/4",
      motor: "Peso: 16 kg",
      tensao: "Capacidade: 500 à 2500 Nm",
      peso: "",
      dimensoes: "",
      vazao: "",
      capacidade: "",
    },
    imagemTabela: "/",
    imagemArq: "/",
  },
];
export default locacaoMock;
