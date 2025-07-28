import { IUser } from "../interfaces/user/user.interface";

export const UsersListData: IUser[] = [
    {
        nome: "João Silva",
        email: "joao.silva@example.com",
        senha: "senha-segura-123",
        idade: 30,
        endereco: {
            rua: "Rua das Flores",
            numero: 42,
            cidade: "São Paulo",
            estado: "SP",
            pais: "Brasil"
        },
        telefone: "11912345678",
        ativo: true,
        funcao: "Desenvolvedor",
        dataCadastro: "2023-08-01T09:00:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-08-02T09:00:00.000Z"
        }
    },
    {
        nome: "Maria Fernandes",
        email: "maria.fernandes@example.com",
        senha: "Maria123",
        idade: 25,
        endereco: {
            rua: "Avenida do Sol",
            numero: 100,
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        telefone: "21956789101",
        ativo: false,
        funcao: "Designer",
        dataCadastro: "2023-08-05T09:00:00.000Z",
        status: {
            online: false,
            verificado: false,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-08-06T09:00:00.000Z"
        }
    },
    {
        nome: "Carlos Pereira",
        email: "carlos.pereira@example.com",
        senha: "Carlos456",
        idade: 40,
        endereco: {
            rua: "Praça da Liberdade",
            numero: 5,
            cidade: "Belo Horizonte",
            estado: "MG",
            pais: "Brasil"
        },
        telefone: "31911121314",
        ativo: true,
        funcao: "Gerente",
        dataCadastro: "2023-08-10T09:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-08-12T09:00:00.000Z"
        }
    },
    {
        nome: "Ana Sousa",
        email: "ana.sousa@example.com",
        senha: "Ana789",
        idade: 22,
        endereco: {
            rua: "Rua das Pedras",
            numero: 80,
            cidade: "Porto Alegre",
            estado: "RS",
            pais: "Brasil"
        },
        telefone: "51915161718",
        ativo: false,
        funcao: "Analista",
        dataCadastro: "2023-08-15T09:00:00.000Z",
        status: {
            online: true,
            verificado: false,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-08-18T09:00:00.000Z"
        }
    },
    {
        nome: "Pedro Mendes",
        email: "pedro.mendes@example.com",
        senha: "Pedro012",
        idade: 35,
        endereco: {
            rua: "Boulevard Central",
            numero: 60,
            cidade: "Recife",
            estado: "PE",
            pais: "Brasil"
        },
        telefone: "81919202122",
        ativo: true,
        funcao: "Diretor",
        dataCadastro: "2023-08-20T09:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-08-25T09:00:00.000Z"
        }
    },
    {
        nome: "Goku Son",
        email: "goku@dragonball.com",
        senha: "Kamehameha123",
        idade: 42,
        endereco: {
            rua: "Rua Kame House",
            numero: 1,
            cidade: "Ilha do Mestre Kame",
            estado: "SP",
            pais: "Brasil"
        },
        telefone: "11900000001",
        ativo: true,
        funcao: "Lutador Z",
        dataCadastro: "2023-01-01T09:00:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-08-25T08:00:00.000Z"
        }
    },
    {
        nome: "Vegeta",
        email: "vegeta@dragonball.com",
        senha: "OrgulhoSayajin!",
        idade: 44,
        endereco: {
            rua: "Av. Planeta Vegeta",
            numero: 9000,
            cidade: "Capsule City",
            estado: "RJ",
            pais: "Brasil"
        },
        telefone: "21900000002",
        ativo: true,
        funcao: "Príncipe Sayajin",
        dataCadastro: "2023-02-15T09:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-08-24T18:00:00.000Z"
        }
    },
    {
        nome: "Denji",
        email: "denji@chainsawman.com",
        senha: "Pochita4Ever",
        idade: 17,
        endereco: {
            rua: "Rua dos Demônios",
            numero: 666,
            cidade: "Tóquio",
            estado: "SP",
            pais: "Brasil"
        },
        telefone: "11911112222",
        ativo: true,
        funcao: "Caçador de Demônios",
        dataCadastro: "2023-03-10T09:00:00.000Z",
        status: {
            online: true,
            verificado: false,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-08-22T11:30:00.000Z"
        }
    },
    {
        nome: "Power",
        email: "power@chainsawman.com",
        senha: "Sangue123",
        idade: 16,
        endereco: {
            rua: "Av. Makima",
            numero: 999,
            cidade: "Osaka",
            estado: "RJ",
            pais: "Brasil"
        },
        telefone: "21933334444",
        ativo: true,
        funcao: "Demônio do Sangue",
        dataCadastro: "2023-03-11T09:00:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-08-20T10:00:00.000Z"
        }
    },
    {
        nome: "Makima",
        email: "makima@chainsawman.com",
        senha: "ControleTotal",
        idade: 28,
        endereco: {
            rua: "Rua da Dominação",
            numero: 1,
            cidade: "Shibuya",
            estado: "SP",
            pais: "Brasil"
        },
        telefone: "11955556666",
        ativo: false,
        funcao: "Demônio do Controle",
        dataCadastro: "2023-04-01T09:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-07-01T09:00:00.000Z"
        }
    },
    {
        nome: "Aki Hayakawa",
        email: "aki@chainsawman.com",
        senha: "Katana123",
        idade: 22,
        endereco: {
            rua: "Rua da Espada",
            numero: 14,
            cidade: "Kyoto",
            estado: "MG",
            pais: "Brasil"
        },
        telefone: "31977778888",
        ativo: true,
        funcao: "Caçador de Demônios",
        dataCadastro: "2023-04-12T09:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-08-23T09:00:00.000Z"
        }
    },
    {
    nome: "Satoru Gojo",
    email: "gojo.satoru@example.com",
    senha: "infinityEyes",
    idade: 28,
    endereco: {
      rua: "Rua Jujutsu",
      numero: 1,
      cidade: "Tóquio",
      estado: "TK",
      pais: "Japão"
    },
    telefone: "1100001111",
    ativo: true,
    funcao: "Professor",
    dataCadastro: "2023-09-01T10:00:00.000Z",
    status: {
      online: true,
      verificado: true,
      assinaturaAtiva: true,
      ultimoAcesso: "2023-09-03T11:00:00.000Z"
    }
    },
    {
        nome: "Yuji Itadori",
        email: "itadori.yuji@example.com",
        senha: "sukunaFinger",
        idade: 16,
        endereco: {
        rua: "Av. Maldição",
        numero: 2,
        cidade: "Sendai",
        estado: "SD",
        pais: "Japão"
        },
        telefone: "11987654321",
        ativo: true,
        funcao: "Estudante",
        dataCadastro: "2023-09-01T10:30:00.000Z",
        status: {
        online: false,
        verificado: true,
        assinaturaAtiva: false,
        ultimoAcesso: "2023-09-04T12:00:00.000Z"
        }
    },
    {
        nome: "Megumi Fushiguro",
        email: "fushiguro.megumi@example.com",
        senha: "shikigami123",
        idade: 17,
        endereco: {
        rua: "Rua das Sombras",
        numero: 3,
        cidade: "Tóquio",
        estado: "TK",
        pais: "Japão"
        },
        telefone: "11912349876",
        ativo: true,
        funcao: "Feiticeiro Jujutsu",
        dataCadastro: "2023-09-02T09:00:00.000Z",
        status: {
        online: true,
        verificado: false,
        assinaturaAtiva: true,
        ultimoAcesso: "2023-09-05T08:30:00.000Z"
        }
    },
    {
        nome: "Nobara Kugisaki",
        email: "kugisaki.nobara@example.com",
        senha: "marteloEPrego",
        idade: 17,
        endereco: {
        rua: "Rua das Bonecas",
        numero: 4,
        cidade: "Quioto",
        estado: "KT",
        pais: "Japão"
        },
        telefone: "11955558888",
        ativo: false,
        funcao: "Feiticeira",
        dataCadastro: "2023-09-03T13:00:00.000Z",
        status: {
        online: false,
        verificado: true,
        assinaturaAtiva: false,
        ultimoAcesso: "2023-09-06T15:00:00.000Z"
        }
    },
    {
        nome: "Sukuna Ryomen",
        email: "sukuna.king@example.com",
        senha: "dominioMalevolo",
        idade: 1000,
        endereco: {
        rua: "Palácio do Reino",
        numero: 666,
        cidade: "Dimensão Maldita",
        estado: "IN",
        pais: "Japão"
        },
        telefone: "666666666",
        ativo: false,
        funcao: "Rei das Maldições",
        dataCadastro: "2023-09-04T13:00:00.000Z",
        status: {
        online: true,
        verificado: false,
        assinaturaAtiva: true,
        ultimoAcesso: "2023-09-07T16:00:00.000Z"
        }
    },
    {
        nome: "Jotaro Kujo",
        email: "kujo.jotaro@example.com",
        senha: "starPlatinum",
        idade: 28,
        endereco: {
        rua: "Rua Egípcia",
        numero: 5,
        cidade: "Cairo",
        estado: "EG",
        pais: "Egito"
        },
        telefone: "11900000000",
        ativo: true,
        funcao: "Stand User",
        dataCadastro: "2023-09-05T09:30:00.000Z",
        status: {
        online: true,
        verificado: true,
        assinaturaAtiva: true,
        ultimoAcesso: "2023-09-08T10:00:00.000Z"
        }
    },
    {
        nome: "Joseph Joestar",
        email: "joseph.joestar@example.com",
        senha: "hamonPower",
        idade: 68,
        endereco: {
        rua: "Rua dos Joestars",
        numero: 6,
        cidade: "Nova York",
        estado: "NY",
        pais: "EUA"
        },
        telefone: "1133333333",
        ativo: true,
        funcao: "Veterano",
        dataCadastro: "2023-09-06T11:00:00.000Z",
        status: {
        online: false,
        verificado: true,
        assinaturaAtiva: true,
        ultimoAcesso: "2023-09-08T11:30:00.000Z"
        }
    },
    {
        nome: "Dio Brando",
        email: "dio.brando@example.com",
        senha: "zaWarudo",
        idade: 150,
        endereco: {
        rua: "Rua das Sombras",
        numero: 7,
        cidade: "Londres",
        estado: "LN",
        pais: "Reino Unido"
        },
        telefone: "1100011000",
        ativo: false,
        funcao: "Vampiro",
        dataCadastro: "2023-09-06T12:00:00.000Z",
        status: {
        online: true,
        verificado: false,
        assinaturaAtiva: false,
        ultimoAcesso: "2023-09-09T13:00:00.000Z"
        }
    },
    {
        nome: "Giorno Giovanna",
        email: "giorno.giovanna@example.com",
        senha: "goldExperience",
        idade: 17,
        endereco: {
        rua: "Rua da Máfia",
        numero: 8,
        cidade: "Nápoles",
        estado: "NA",
        pais: "Itália"
        },
        telefone: "1100022000",
        ativo: true,
        funcao: "Chefe da Passione",
        dataCadastro: "2023-09-07T14:00:00.000Z",
        status: {
        online: true,
        verificado: true,
        assinaturaAtiva: true,
        ultimoAcesso: "2023-09-10T15:00:00.000Z"
        }
    },
    {
        nome: "Josuke Higashikata",
        email: "josuke.h@example.com",
        senha: "crazyDiamond",
        idade: 16,
        endereco: {
        rua: "Rua Morioh",
        numero: 9,
        cidade: "Morioh",
        estado: "SH",
        pais: "Japão"
        },
        telefone: "11900112233",
        ativo: true,
        funcao: "Estudante",
        dataCadastro: "2023-09-08T10:00:00.000Z",
        status: {
        online: false,
        verificado: true,
        assinaturaAtiva: false,
        ultimoAcesso: "2023-09-11T10:30:00.000Z"
        }
    },
    {
        nome: "Saitama",
        email: "saitama.onepunch@example.com",
        senha: "socaoUnico",
        idade: 25,
        endereco: {
        rua: "Apartamento 402",
        numero: 10,
        cidade: "Cidade Z",
        estado: "Z",
        pais: "Japão"
        },
        telefone: "1100099999",
        ativo: true,
        funcao: "Herói Classe S",
        dataCadastro: "2023-09-09T08:00:00.000Z",
        status: {
        online: true,
        verificado: true,
        assinaturaAtiva: false,
        ultimoAcesso: "2023-09-12T09:00:00.000Z"
        }
    },
    {
        nome: "Genos",
        email: "genos.cyber@example.com",
        senha: "cyborgVingador",
        idade: 19,
        endereco: {
        rua: "Distrito 3",
        numero: 11,
        cidade: "Cidade A",
        estado: "A",
        pais: "Japão"
        },
        telefone: "11998877665",
        ativo: true,
        funcao: "Ciborgue",
        dataCadastro: "2023-09-09T08:30:00.000Z",
        status: {
        online: true,
        verificado: true,
        assinaturaAtiva: true,
        ultimoAcesso: "2023-09-12T10:30:00.000Z"
        }
    },
    {
        nome: "King",
        email: "king.heroi@example.com",
        senha: "oMaisForte?",
        idade: 30,
        endereco: {
        rua: "Avenida dos Heróis",
        numero: 12,
        cidade: "Cidade B",
        estado: "B",
        pais: "Japão"
        },
        telefone: "11911223344",
        ativo: false,
        funcao: "Herói Classe S",
        dataCadastro: "2023-09-10T07:00:00.000Z",
        status: {
        online: false,
        verificado: true,
        assinaturaAtiva: false,
        ultimoAcesso: "2023-09-13T08:00:00.000Z"
        }
    },
    {
        nome: "Tornado do Terror",
        email: "tornado.tsukiko@example.com",
        senha: "psiquica99",
        idade: 28,
        endereco: {
        rua: "Vila Psíquica",
        numero: 13,
        cidade: "Cidade F",
        estado: "F",
        pais: "Japão"
        },
        telefone: "11944332211",
        ativo: true,
        funcao: "Heroína",
        dataCadastro: "2023-09-11T09:00:00.000Z",
        status: {
        online: true,
        verificado: true,
        assinaturaAtiva: true,
        ultimoAcesso: "2023-09-14T09:30:00.000Z"
        }
    },
    {
        nome: "Mumen Rider",
        email: "mumen.rider@example.com",
        senha: "justicaSempre",
        idade: 27,
        endereco: {
        rua: "Rua da Bicicleta",
        numero: 14,
        cidade: "Cidade M",
        estado: "M",
        pais: "Japão"
        },
        telefone: "11922334455",
        ativo: true,
        funcao: "Herói Classe C",
        dataCadastro: "2023-09-12T07:30:00.000Z",
        status: {
        online: false,
        verificado: true,
        assinaturaAtiva: false,
        ultimoAcesso: "2023-09-15T08:45:00.000Z"
        }
    }
];