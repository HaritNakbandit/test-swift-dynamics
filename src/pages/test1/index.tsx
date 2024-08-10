import { useTranslation } from "react-i18next";
import PageLayout from "../../components/layout/PageLayout";
import { Col, Divider, Row } from "antd";
import styled from "@emotion/styled";
import React, { useState } from "react";

const CardStyle = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #ffa200;
  }
  &:active {
    background: #6eda78;
  }
`;

const TextStyle = styled.div`
  padding: 5px;
  background-color: #6eda78;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  bottom: -12px;
`;

const data = [
  "square",
  "circle",
  "oval",
  "trapezoid",
  "rectangle",
  "parallelogram",
];

const Test1 = () => {
  const { t } = useTranslation("main");
  const [isMovePosi, setIsMovePosi] = useState<boolean>(false);
  const [dataList, setDataList] = useState<string[]>(data);

  const handleMovePosition = () => {
    setIsMovePosi((prev) => !prev);
  };

  const handleRandomPosition = () => {
    const list = [...dataList];
    const shuffledArray = list.sort((a, b) => 0.5 - Math.random());
    setDataList(shuffledArray);
  };

  const handleMoveShape = (reverse?: boolean) => {
    const list = [...dataList];
    if (!reverse) {
      list.push(list.shift()!);
    } else {
      list.unshift(list.pop()!);
    }
    setDataList(list);
  };

  return (
    <PageLayout title={t("test_1_desc")}>
      <div
        style={{ padding: "25px", display: "flex", justifyContent: "center" }}
      >
        <div style={{ width: "80%" }}>
          <Row justify="start" gutter={[16, 16]}>
            <Col span={6}>
              <CardStyle
                onClick={() => handleMoveShape()}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div className="triangle-left" />
                <TextStyle>{t("move_shape")}</TextStyle>
              </CardStyle>
            </Col>
            <Col span={12}>
              <CardStyle onClick={() => handleMovePosition()}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <div className="triangle-up" />
                  <div className="triangle-down" />
                  <TextStyle>{t("move_position")}</TextStyle>
                </div>
              </CardStyle>
            </Col>
            <Col span={6}>
              <CardStyle
                onClick={() => handleMoveShape(true)}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="triangle-right" />
                <TextStyle>{t("move_shape")}</TextStyle>
              </CardStyle>
            </Col>
          </Row>
          <Divider />
          {/* 1 */}
          <Row justify={isMovePosi ? "end" : "center"} gutter={[16, 16]}>
            {dataList?.map((item: string, index: number) => (
              <React.Fragment key={index}>
                {index < 3 && (
                  <Col span={6}>
                    <CardStyle
                      onClick={() => handleRandomPosition()}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div className={item} />
                    </CardStyle>
                  </Col>
                )}
              </React.Fragment>
            ))}
          </Row>
          <div style={{ margin: "16px 0" }} />
          {/* 2 */}
          <Row justify={isMovePosi ? "center" : "end"} gutter={[16, 16]}>
            {dataList?.map((item: string, index: number) => (
              <React.Fragment key={index}>
                {index >= 3 && (
                  <Col span={6}>
                    <CardStyle
                      onClick={() => handleRandomPosition()}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div className={item} />
                    </CardStyle>
                  </Col>
                )}
              </React.Fragment>
            ))}
          </Row>
        </div>
      </div>
    </PageLayout>
  );
};

export default Test1;
