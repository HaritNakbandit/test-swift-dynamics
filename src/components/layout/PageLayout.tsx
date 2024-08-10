import { Layout, Select } from "antd";
import styled from "@emotion/styled";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { Title } from "../ui";

const LayoutStyle = styled(Layout)`
  background: #6eda78;
  background: linear-gradient(90deg, #6eda78 0%, #ffa200 100%);
`;

interface Props {
  children: React.ReactNode;
  title?: string;
}
const { Header, Content } = Layout;

const PageLayout = (props: Props) => {
  const { children, title } = props;
  const { t } = useTranslation("main");
  const headerBarHeight = 64;

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <LayoutStyle>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "transparent",
          padding: "0 20px",
        }}
      >
        <Title title={title ?? ""} level={1} />
        <Select
          value={i18n.language}
          style={{ width: 80 }}
          onChange={handleChange}
          options={[
            { value: "en", label: t("en") },
            { value: "th", label: t("th") },
          ]}
        />
      </Header>
      <Content
        style={{
          height: `calc(100vh - ${headerBarHeight}px)`,
          overflow: "auto",
          overflowY: "scroll",
        }}
      >
        {children}
      </Content>
    </LayoutStyle>
  );
};

export default PageLayout;
