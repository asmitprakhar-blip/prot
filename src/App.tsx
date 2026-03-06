import { lazy, Suspense } from "react";
import "./App.css";
import { LoadingProvider } from "./context/LoadingProvider";
import MainContainer from "./components/MainContainer";

const CharacterModel = lazy(() => import("./components/Character"));

const App = () => {
  return (
    <LoadingProvider>
      <MainContainer>
        <Suspense fallback={<div>Loading Character...</div>}>
          <CharacterModel />
        </Suspense>
      </MainContainer>
    </LoadingProvider>
  );
};

export default App;
