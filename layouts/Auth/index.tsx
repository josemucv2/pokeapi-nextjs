import Image from "next/image";
import { ContainerBox } from "./auth.style";

export const AuthLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ContainerBox>
      <Image
        src="/assets/images/pokemonLogo.png"
        alt="logo"
        width={475}
        height={217}
      />
      {children}
    </ContainerBox>
  );
};
