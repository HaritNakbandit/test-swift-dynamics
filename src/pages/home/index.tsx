import { useTranslation } from "react-i18next";
import PageLayout from "../../components/layout/PageLayout";
import { Card } from "../../components/ui/";
import { Flex } from "antd";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { t } = useTranslation("main");
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <PageLayout>
      <Flex
        gap={"small"}
        justify={"center"}
        align="center"
        style={{ height: `calc(100% - 64px)` }}
      >
        <Card
          title={t("test_1_title")}
          desc={t("test_1_desc")}
          onClick={() => handleCardClick("test1")}
          style={{ cursor: "pointer" }}
          bodyStyle={{
            height: 100,
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "column",
          }}
        />
        <Card
          title={t("test_2_title")}
          desc={t("test_2_desc")}
          onClick={() => handleCardClick("test2")}
          style={{ cursor: "pointer" }}
          bodyStyle={{
            height: 100,
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "column",
          }}
        />
      </Flex>
    </PageLayout>
  );
};

export default HomePage;
