import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "./OrderTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Customer" source="customer" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="orderNumber" source="orderNumber" />
        <TextField label="Product" source="product" />
        <TextField label="totalAmount" source="totalAmount" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Currency"
          target="orderId"
          label="Currencies"
        >
          <Datagrid rowClick="show">
            <TextField label="code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="exchangeRate" source="exchangeRate" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <ReferenceField label="Order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="symbol" source="symbolField" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
