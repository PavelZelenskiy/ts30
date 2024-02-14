import React from "react";
import "./arrayMethods.css";
import { bandsInfo } from "./data/bandsInfo";
import { ArrayMethod } from "./ArrayMethod/ArrayMethod";

export const ArrayMethods = () => {
  return (
    <>
      <div className="array_methods">
        <table>
          <th colSpan={3}>Массив объектов с информацияей о группах =</th>[
          {bandsInfo.map((band) => (
            <tr>
              <td key={band.start}>
                {`{name: "${band.name}", start: "${band.start}", end: "${
                  band.end ? band.end : "по наши дни"
                }"},`}
              </td>
            </tr>
          ))}
          ]
        </table>
      </div>
      <div className="array_methods">
        <ArrayMethod array={bandsInfo} title="filter" />
        <ArrayMethod array={bandsInfo} title="map" />
      </div>
      <div className="array_methods">
        <ArrayMethod array={bandsInfo} title="sort" />
        <ArrayMethod array={bandsInfo} title="reduce" />
      </div>
    </>
  );
};
