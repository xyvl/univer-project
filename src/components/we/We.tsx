import styles from "./we.module.scss";
import { Card } from "../../UX/card/Card";

export const We = () => {
  const props = [
    {
      photo: "vlad.jpg",
      name: "Владислав",
      surname: "Подшивалов",
      job: "Разработал продукт и сайт",
    },
    {
      photo: "nekit.jpg",
      name: "Никита",
      surname: "Сергиенко",
      job: "Сделал дизайн сайта",
    },
    {
      photo: "aydar.jpg",
      name: "Айдар",
      surname: "Давлетбаков",
      job: "Сделал презентацию",
    },
  ];
  return (
    <div className="wrapper">
      <h1 className={styles.title}>БПО09-24-21</h1>
      <div className={styles.container}>
        {props.map((item, index) => {
          return <Card key={index} props={item} />;
        })}
      </div>
    </div>
  );
};
