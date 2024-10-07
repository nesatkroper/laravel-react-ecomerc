import { ModeToggle } from "./components/app/mode-toggle";
import { ThemeProvider } from "./components/app/theme-provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ModeToggle />
    </ThemeProvider>
  );
};

export default App;
