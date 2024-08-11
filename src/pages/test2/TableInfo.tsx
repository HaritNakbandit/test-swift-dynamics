import { useTranslation } from "react-i18next";
import {
  Button,
  Table,
  TableColumnsType,
  Space,
  PaginationProps,
  Checkbox,
} from "antd";
import React, { useState } from "react";
import { TableRowSelection } from "antd/es/table/interface";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useDispatch } from "react-redux";
import { deleteUser, selectUser } from "../../store/test2/test2Slice";

interface Props {
  dataList?: any;
}

interface DataType {
  key: React.Key;
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  countyCode: string;
  mobileNumber: string;
  nationally: string;
}

const TableInfo = (props: Props) => {
  const { t } = useTranslation("main");
  const dispatch = useDispatch();
  const { dataList } = props;
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const onSelectAll = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      setSelectedRowKeys(dataList.map((item: { id: string }) => item.id));
    } else {
      setSelectedRowKeys([]);
    }
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: t("name"),
      dataIndex: "name",
      render: (_, record) => (
        <>
          {record.firstName} {record.lastName}
        </>
      ),
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: t("gender"),
      dataIndex: "gender",
      render: (item) => t(`gender_select.${item}`),
      sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      title: t("mobile_phone"),
      dataIndex: "mobilePhone",
      render: (_, record) => <>{record.countyCode + record.mobileNumber}</>,
      sorter: (a, b) => a.countyCode.localeCompare(b.countyCode),
    },
    {
      title: t("nationally"),
      dataIndex: "nationally",
      render: (item) => t(`nationally_select.${item}`),
      sorter: (a, b) => a.nationally.localeCompare(b.nationally),
    },
    {
      title: t("manage"),
      key: "manage",
      render: (_, record) => (
        <Space size="middle">
          <p
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(selectUser(record.id))}
          >
            {t("edit")}
          </p>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(deleteUser([record.id]));
            }}
          >
            {t("delete")}
          </p>
        </Space>
      ),
    },
  ];

  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      return <a>{t("prev")}</a>;
    }
    if (type === "next") {
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      return <a>{t("next")}</a>;
    }
    return originalElement;
  };

  return (
    <div style={{ padding: "50px" }}>
      <div style={{ marginBottom: "20px" }}>
        <Checkbox onChange={onSelectAll}>{t("select_all")}</Checkbox>
        <Button
          onClick={() => {
            dispatch(deleteUser(selectedRowKeys));
          }}
        >
          {t("delete")}
        </Button>
      </div>
      <Table
        rowKey="id"
        rowSelection={rowSelection}
        dataSource={dataList}
        columns={columns}
        pagination={{ position: ["topRight"], itemRender: itemRender }}
      />
    </div>
  );
};

export default TableInfo;
