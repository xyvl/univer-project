import React, { useEffect } from "react";
import styles from "./product.module.scss";

export const Product = () => {
  const [str, setStr] = React.useState("");
  const [hash, setHash] = React.useState(0);
  useEffect(() => {
    const text = str;
    const unik: { symbol: string; index: number }[] = [];

    const unikeyCode = () => {
      let x = text.toLocaleLowerCase();

      while (true) {
        if (!x.length) {
          break;
        }
        unik.push({ symbol: x[0], index: unik.length + 1 });
        x = x.replaceAll(x[0], "");
      }
    };
    unikeyCode();

    const createObjectMatrixAndLastNumber = (
      text: string,
      key: { symbol: string; index: number }[]
    ): [number[][][], number[]] => {
      const stringToNumber: number[] = [];
      const matrixArray: number[][][] = [];

      for (let str of text) {
        for (let j of key) {
          if (str === j.symbol) {
            stringToNumber.push(j.index);
          }
        }
      }

      for (let i = 3; i < stringToNumber.length; i += 4) {
        matrixArray.push([]);

        matrixArray[Math.floor(i / 4)].push([]);
        matrixArray[Math.floor(i / 4)][0].push(
          stringToNumber[i - 3],
          stringToNumber[i - 2]
        );

        matrixArray[Math.floor(i / 4)].push([]);
        matrixArray[Math.floor(i / 4)][1].push(
          stringToNumber[i - 1],
          stringToNumber[i]
        );
      }

      return [
        matrixArray,
        stringToNumber.length % 4 === 0
          ? []
          : stringToNumber.slice(-stringToNumber.length % 4),
      ];
    };

    function opredelitel2(matrix: number[][]): number {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }

    const createHashFunction = (
      matrixArray: number[][][],
      lastNumber: number[]
    ) => {
      let hashNumber = 0;
      for (let i = 0; i < matrixArray.length; i++) {
        hashNumber += Math.abs(opredelitel2(matrixArray[i]));
      }
      for (const el of lastNumber) {
        hashNumber += el;
      }
      return hashNumber;
    };
    setHash(createHashFunction(...createObjectMatrixAndLastNumber(text, unik)));
  }, [str]);

  return (
    <div className="wrapper">
      <div className={styles.container}>
        <div className={styles.container_inner}>
          <h1 className={styles.title}>Строка ввода:</h1>
          <div className={styles.input_block}>
            <input
              value={str}
              onChange={(e) => setStr(e.target.value)}
              type="text"
              className={styles.input}
            />
            <button className={styles.button} onClick={() => setStr("")}>❌</button>
          </div>
        </div>
        <div className={styles.container_inner}>
          <h1>Результат:</h1>
          <h1 className={styles.hash} style={{ color: "deeppink" }}>{hash}</h1>
        </div>
      </div>
    </div>
  );
};
