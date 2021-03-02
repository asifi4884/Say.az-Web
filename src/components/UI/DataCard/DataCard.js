import React from "react";
import {
  DataCard,
  DataCardBody,
  DataCardImage,
  DataContent,
  DataContentTitle,
  DataContentAbout,
  DataContentWord,
  DataCardTools,
  DataCardToolsAmount,
  DataToolsButtons,
} from "./DataCardStyles";

import { GainsDown, Checked, Delete } from "../../../icons";

function DataCardComponent({
  name,
  img,
  service,
  voen,
  price,
  date,
  approved,
  type,
  taxePrice,
  periodPrice,
  totalDate,
  costs,
  action,
  totalPrice,
}) {
  return (
    <DataCard>
      <DataCardBody>
        {img && (
          <DataCardImage>
            <img src={img} alt={name} />
          </DataCardImage>
        )}

        <DataContent>
          <DataContentTitle>
            <span>{name}</span>
          </DataContentTitle>
          <DataContentAbout>
            {date && <DataContentWord>{date}</DataContentWord>}
            {voen ? (
              <DataContentWord>VÖEN: 278624872462897</DataContentWord>
            ) : voen === "" ? (
              <DataContentWord>VÖEN-siz</DataContentWord>
            ) : (
              ""
            )}
            {service && <DataContentWord>{service}</DataContentWord>}
            {type === "receiptCome" && price && (
              <DataContentWord>{price}$</DataContentWord>
            )}

            {periodPrice && (
              <DataContentWord>
                Dövr ərzində gəlir: {periodPrice}
              </DataContentWord>
            )}

            {totalPrice && (
              <DataContentWord>
                Ümumi gəlir məbləği: {totalPrice}
              </DataContentWord>
            )}

            {costs && <DataContentWord>Xərclər: {costs}</DataContentWord>}

            {taxePrice && (
              <DataContentWord>Vegi məbləği: {taxePrice}</DataContentWord>
            )}

            {action ? (
              <DataContentWord>Fəaliyyət ayları: {action}</DataContentWord>
            ) : action === "" ? (
              <DataContentWord>Fəaliyyət olmayıb</DataContentWord>
            ) : (
              ""
            )}
          </DataContentAbout>
        </DataContent>
        <DataCardTools>
          {type === "home" && (
            <DataCardToolsAmount>
              {price} AZN <GainsDown />
            </DataCardToolsAmount>
          )}

          {totalDate && <DataContentWord>{totalDate}</DataContentWord>}

          {type === "receipt" && (
            <DataCardToolsAmount>{price} AZN</DataCardToolsAmount>
          )}

          {type === "receipt" && approved ? (
            <DataContentWord>Təsdiqlənib</DataContentWord>
          ) : (
            type === "receipt" &&
            !approved && <DataContentWord>Təsdiqlənməyib</DataContentWord>
          )}
          {type === "receiptCome" && (
            <DataToolsButtons>
              <button className="cancel">
                <Checked />
              </button>
              <button className="delete">
                <Delete />
              </button>
            </DataToolsButtons>
          )}
        </DataCardTools>
      </DataCardBody>
    </DataCard>
  );
}

export default DataCardComponent;
