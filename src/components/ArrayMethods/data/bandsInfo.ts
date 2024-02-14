import React from "react";

export type TBand = {
  name: string;
  start: string;
  end: string | null;
};

export const bandsInfo: TBand[] = [
  { name: "Агата Кристи", start: "1985", end: "2010" },
  { name: "Аквариум", start: "1972", end: null },
  { name: "Ария", start: "1985", end: "2002" },
  { name: "Бахыт-Компот", start: "1989", end: null },
  { name: "Чёрный Обелиск", start: "1990", end: null },
  { name: "Три дня дождя", start: "2019", end: null },
  { name: "Сплин", start: "1997", end: null },
  { name: "Сектор газа", start: "1987", end: "2000" },
  { name: "Наутилус Помпилиус", start: "1982", end: "1997" },
  { name: "Калинов Мост", start: "1986", end: null },
];
