import React from "react";
import {
  BankCard,
  BankCardBody,
  BankCardImage,
  BankCardNumber,
  BankCardDelete,
} from "./BankStyles";

import { Delete } from "../../icons";

const bankCard = ({ img }) => (
  <BankCard>
    <BankCardBody>
      <BankCardImage>
        <img src={img} alt="Card" />
      </BankCardImage>
      <BankCardNumber>
        <span>**** **** ****</span>
        <span>9707</span>
      </BankCardNumber>
      <BankCardDelete>
        <button>
          <Delete />
        </button>
      </BankCardDelete>
    </BankCardBody>
  </BankCard>
);
export default bankCard;
