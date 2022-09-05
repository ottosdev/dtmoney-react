import { ThemeProvider } from "styled-components";
import { TransactionProvider } from "./context/TransactionsContext";
import { Tranasctions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionProvider>
        <Tranasctions />
      </TransactionProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
