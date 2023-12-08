import {
  HomeOutlined,
  LaptopOutlined,
  ProfileOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu as MenuAntd } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ProductRoutesEnum } from "../../../modules/product/routes";
import { ContainerLogoName, ContainerMenu, LogoMenu, NameCompany } from "./menu.style";

type MenuItem = Required<MenuProps>["items"][number];

const Menu = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("1");

  const items: MenuItem[] = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: "Principal",
    },
    {
      key: "products",
      icon: <LaptopOutlined />,
      label: "Produtos",
      children: [
        {
          key: "products_view",
          label: "Visualizar",
          onClick: () => navigate(ProductRoutesEnum.PRODUCT),
        },
        {
          key: "products_insert",
          label: "Inserir",
          onClick: () => navigate(ProductRoutesEnum.PRODUCT_INSERT),
        },
      ],
    },
    {
      key: "category",
      icon: <ProfileOutlined />,
      label: "Categorias",
      children: [
        {
          key: "category_view",
          label: "Visualizar",
          onClick: () => navigate(ProductRoutesEnum.PRODUCT),
        },
        {
          key: "category_insert",
          label: "Inserir",
          onClick: () => navigate(ProductRoutesEnum.PRODUCT_INSERT),
        },
      ],
    },
    {
      key: "order",
      icon: <SafetyCertificateOutlined />,
      label: "Pedidos",
    },
    {
      key: "user",
      icon: <UserOutlined />,
      label: "Clientes",
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <ContainerMenu>
      <ContainerLogoName>
        <LogoMenu />
        <NameCompany>Vendas Online</NameCompany>
      </ContainerLogoName>
      <MenuAntd
        theme="dark"
        onClick={onClick}
        style={{ width: 240 }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </ContainerMenu>
  );
};

export default Menu;
