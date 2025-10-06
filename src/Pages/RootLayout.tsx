import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function RootLayout() {
  const [search, setSearch] = useState("");
  // const navigation = useNavigation();

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <main>
        <Outlet context={{ search }} />
      </main>
    </>
  );
}

export default RootLayout;
