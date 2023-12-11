import { Modal } from "antd";
import { useState } from "react";

import { logout } from "../../functions/connection/auth";
import { HeaderTestIdEnum } from "./__tests__/headerTestIdEnum";
import { HeaderContainer, LogoExit } from "./header.style";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        data-testid={HeaderTestIdEnum.HEADER_MODAL}
        title="Atenção!"
        open={open}
        onOk={logout}
        onCancel={hideModal}
        okText="Sair"
        cancelText="Cancelar"
      >
        <p data-testid={HeaderTestIdEnum.HEADER_MODAL_P}>Tem certeza que deseja sair?</p>
      </Modal>

      <HeaderContainer data-testid={HeaderTestIdEnum.HEADER_CONTAINER}>
        <LogoExit data-testid={HeaderTestIdEnum.HEADER_LOGO} onClick={showModal} />
      </HeaderContainer>
    </>
  );
};

export default Header;
