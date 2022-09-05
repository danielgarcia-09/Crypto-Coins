import { QueryClient, QueryClientProvider } from "react-query";
import Index from "./components/Index";


function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <Index/>
    </QueryClientProvider>
  );
}

export default App;
