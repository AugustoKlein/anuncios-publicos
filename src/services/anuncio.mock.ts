import { Anuncio,User } from "../models/anuncio.model";


export const ANUNCIOS: Anuncio[] =
  [
    {
      id: 1,
      title: "Festa de Sao Joao",
      article: "Olá estou divulgando uma festa de são joão que estará acontencendo no condominio São Miguel na data 24/04/2021, parte das vendas será doada para a caridade, espero que venham, Obrigado",
      autor:"Joao"
    },
    {
      id: 2,
      title: "Venda de FORD ka 2020",
      article: "Estou vendendo um FORD KA 2020 pelo valor de R$ 20.000(vinte mil reais), por favor contatar pelo telefone: (55) 51 9999-9999",
      autor:"Maria"
    }
  ];

export const USERS: User[] = 
  [
    {
      user: "Joao",
      senha:"123"
    },
    {
      user: "Maria",
      senha:"123"
    }
  ];

