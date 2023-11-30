import Button from "../../../shared/buttons/button/Button";
import SVGLogo from "../../../shared/icons/SVGLogo";
import Input from "../../../shared/inputs/input/input";
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  TitleLogin,
} from "../styles/LoginScreen.styles";

const LoginScreen = () => {
  return (
    <div>
      <ContainerLoginScreen>
        <BackgroundImage src="./background.png" />
        <ContainerLogin>
          <LimitedContainer>
            <TitleLogin level={2} type="secondary">
              LOGIN
            </TitleLogin>
            <SVGLogo />
            <Input title="USUÁRIO:" />
            <Input title="SENHA:" />
            <Button type="primary" margin="64px 0px 16px 0px">
              ENTRAR
            </Button>
          </LimitedContainer>
        </ContainerLogin>
      </ContainerLoginScreen>
    </div>
  );
};
export default LoginScreen;
