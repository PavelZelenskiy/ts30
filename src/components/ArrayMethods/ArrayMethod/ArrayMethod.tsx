import React from "react";
import { TBand } from "../data/bandsInfo";
import { arrayMethodsInfo } from "../data/arrayMethodsInfo";
import "./arrayMethod.css";

type TProps = {
  array: TBand[];
  title: string;
};

export const ArrayMethod = ({ array, title }: TProps) => {
  const arrayMethodHandler = (array: TBand[], method: string) => {
    const mapppedArray = array.map((element) => {
      return {
        name: element.name,
        years: element.end
          ? Number(element.end) - Number(element.start)
          : new Date().getFullYear() - Number(element.start),
      };
    });

    if (method === "filter") {
      const filtredArray = array.filter((element) => {
        if (element.end) {
          return element;
        }
      });
      return filtredArray.map((element) => (
        <tr>
          <td key={element.start}>
            {`{name: "${element.name}", start: "${element.start}", end: "${
              element.end ? element.end : "по наши дни"
            }"},`}
          </td>
        </tr>
      ));
    }
    if (method === "map") {
      return mapppedArray.map((element) => (
        <tr>
          <td
            key={element.years}
          >{`{name: "${element.name}", years: "${element.years}"},`}</td>
        </tr>
      ));
    }
    if (method === "sort") {
      const sortedArray = [...mapppedArray].sort((a, b) => {
        return a.years > b.years ? 1 : -1;
      });
      return sortedArray.map((element) => (
        <tr>
          <td
            key={element.years}
          >{`{name: "${element.name}", years: "${element.years}"},`}</td>
        </tr>
      ));
    }
    if (method === "reduce") {
      const reducedArray = [...mapppedArray].reduce((total, element) => {
        return total + element.years;
      }, 0);
      return (
        <>
          {mapppedArray.map((element) => (
            <tr>
              <td
                key={element.years}
              >{`{name: "${element.name}", years: "${element.years}"},`}</td>
            </tr>
          ))}
          <tr> Всего лет: {reducedArray}</tr>
        </>
      );
    }
  };

  const arrayInfo = arrayMethodsInfo.find((element) =>
    element.name.includes(title)
  );

  return (
    <div className="array_method">
      <h4>{arrayInfo?.name}</h4>
      <div className="desc">{arrayInfo?.desc}</div>
      <table>[{arrayMethodHandler(array, title)}]</table>
    </div>
  );
};
