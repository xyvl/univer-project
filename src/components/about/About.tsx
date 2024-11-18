import styles from "./about.module.scss";

export const About = () => {
  return (
    <div className="wrapper">
      <h1 className={styles.title}>О проекте</h1>
      <p className={styles.text}>
        Наш продукт сделан для практике по математике. Данную работу разработал:
        Подшивалов Владислав, Сергиенко Никита, Давлетбаков Айдар. Продукт
        затрагивает как нашу специальность, а именно IT и математику. Мы
        использовали для создании hash-функции матрицы.
      </p>
			<p className={styles.drop}>БПО09-24-21</p>
    </div>
  );
};
