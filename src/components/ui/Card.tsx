import { CSSProperties } from "react";
import Title from "./Title";
import { Card } from "antd";

interface Props {
  title: string;
  desc: string;
  onClick: Function;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
}

const CardAction = (props: Props) => {
  const { title, desc, onClick, style, bodyStyle } = props;

  return (
    <Card
      style={{
        width: 300,
        ...style
      }}
      onClick={() => onClick()}
    >
      <div style={{ ...bodyStyle }}>
        <Title title={title} style={{ margin: 0 }} />
        <p>{desc}</p>
      </div>
    </Card>
  );
};

export default CardAction;
