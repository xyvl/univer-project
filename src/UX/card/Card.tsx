import styles from "./card.module.scss";

interface IProps {
  props: {
    photo: string;
    name: string;
    surname: string;
    job: string;
  };
}

export const Card = ({ props }: IProps) => {
  return <div className={styles.card}>
		<img src={props.photo} className={styles.photo} alt="" />
		<p className={styles.text}>{props.surname} {props.name}</p>
		<p className={styles.text}>{props.job}</p>
	</div>;
};
