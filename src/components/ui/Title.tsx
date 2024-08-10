import { Typography } from "antd";
import { CSSProperties } from "react";

interface Props {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5 | undefined;
  style?: CSSProperties;
}

const { Title } = Typography;

const Label = (props: Props) => {
  const { title, level, style } = props;

  return (
    <Title level={level ?? 5} style={{ ...style }}>
      {title}
    </Title>
  );
};

export default Label;
