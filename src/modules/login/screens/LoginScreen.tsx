import SVGLogo from "../../../shared/icons/SVGLogo";
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
} from "../styles/LoginScreen.styles";

const LoginScreen = () => {
  return (
    <div>
      <ContainerLoginScreen>
        <BackgroundImage src="./background.png" />
        <ContainerLogin>
          <LimitedContainer>
            <SVGLogo />
          </LimitedContainer>
        </ContainerLogin>
      </ContainerLoginScreen>
    </div>
  );
};
export default LoginScreen;
