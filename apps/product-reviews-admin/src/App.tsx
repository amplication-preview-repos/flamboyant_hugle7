import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { ReviewList } from "./review/ReviewList";
import { ReviewCreate } from "./review/ReviewCreate";
import { ReviewEdit } from "./review/ReviewEdit";
import { ReviewShow } from "./review/ReviewShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { UserLocationList } from "./userLocation/UserLocationList";
import { UserLocationCreate } from "./userLocation/UserLocationCreate";
import { UserLocationEdit } from "./userLocation/UserLocationEdit";
import { UserLocationShow } from "./userLocation/UserLocationShow";
import { ProductOrderList } from "./productOrder/ProductOrderList";
import { ProductOrderCreate } from "./productOrder/ProductOrderCreate";
import { ProductOrderEdit } from "./productOrder/ProductOrderEdit";
import { ProductOrderShow } from "./productOrder/ProductOrderShow";
import { ProductAddOnList } from "./productAddOn/ProductAddOnList";
import { ProductAddOnCreate } from "./productAddOn/ProductAddOnCreate";
import { ProductAddOnEdit } from "./productAddOn/ProductAddOnEdit";
import { ProductAddOnShow } from "./productAddOn/ProductAddOnShow";
import { CurrencyList } from "./currency/CurrencyList";
import { CurrencyCreate } from "./currency/CurrencyCreate";
import { CurrencyEdit } from "./currency/CurrencyEdit";
import { CurrencyShow } from "./currency/CurrencyShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ProductReviews"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Review"
          list={ReviewList}
          edit={ReviewEdit}
          create={ReviewCreate}
          show={ReviewShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="UserLocation"
          list={UserLocationList}
          edit={UserLocationEdit}
          create={UserLocationCreate}
          show={UserLocationShow}
        />
        <Resource
          name="ProductOrder"
          list={ProductOrderList}
          edit={ProductOrderEdit}
          create={ProductOrderCreate}
          show={ProductOrderShow}
        />
        <Resource
          name="ProductAddOn"
          list={ProductAddOnList}
          edit={ProductAddOnEdit}
          create={ProductAddOnCreate}
          show={ProductAddOnShow}
        />
        <Resource
          name="Currency"
          list={CurrencyList}
          edit={CurrencyEdit}
          create={CurrencyCreate}
          show={CurrencyShow}
        />
      </Admin>
    </div>
  );
};

export default App;
