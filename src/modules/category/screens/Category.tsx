import { Input } from "antd";
import { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";

import Button from "../../../shared/components/buttons/button/Button";
import Screen from "../../../shared/components/screen/Screen";
import { DisplayFlexJustifyBetween } from "../../../shared/components/styles/display.styled";
import { LimitedContainer } from "../../../shared/components/styles/limited.styled";
import Table from "../../../shared/components/table/Table";
import { CategoryType } from "../../../shared/types/CategoryType";
import { useCategory } from "../hooks/useCategory";
import { CategoryRoutesEnum } from "../routes";

const { Search } = Input;

const columns: ColumnsType<CategoryType> = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Produtos",
    dataIndex: "amountProducts",
    key: "amountProducts",
    render: (text) => <a>{text}</a>,
  },
];

const Category = () => {
  const { categories } = useCategory();
  const navigate = useNavigate();

  const handleOnClickCategory = () => {
    navigate(CategoryRoutesEnum.CATEGORY_INSERT);
  };

  const handleOnSearch = (value: string) => {
    console.log(value);
  };

  return (
    <Screen
      listBreadcrumb={[
        {
          name: "HOME",
        },
        {
          name: "CATEGORIAS",
        },
      ]}
    >
      <DisplayFlexJustifyBetween margin="0px 0px 16px 0px">
        <LimitedContainer width={240}>
          <Search placeholder="Pesquisar..." onSearch={handleOnSearch} enterButton />
        </LimitedContainer>

        <LimitedContainer width={120}>
          <Button type="primary" onClick={handleOnClickCategory}>
            Inserir
          </Button>
        </LimitedContainer>
      </DisplayFlexJustifyBetween>

      <Table columns={columns} dataSource={categories} />
    </Screen>
  );
};

export default Category;
