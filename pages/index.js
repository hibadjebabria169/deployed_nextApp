import { Provider } from "react-redux";
import store from "../store/index";
import React from "react";
import MainApp from "../components/MainApp";

function App({ data }) {
  
  return (
    <Provider store={store}>
      <MainApp data={data} />
    </Provider>
  );
}

export async function getServerSideProps() {
  console.log("hiba");

  // Fetch data from external API
  const res = await fetch(
    `https://react-http-1e4fd-default-rtdb.firebaseio.com/meals.json`
  );

  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default App;
