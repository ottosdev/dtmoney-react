import { HeaderContainer, HeaderContent, NewTranasctionButton } from "./styles";
import logo from "../../assets/logo-dt.svg";
import * as Dialog from "@radix-ui/react-dialog";
import TranascitonModal from "../Modal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="logo" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTranasctionButton>Nova transação</NewTranasctionButton>
          </Dialog.Trigger>
          <TranascitonModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
