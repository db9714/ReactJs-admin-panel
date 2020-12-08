import * as React from "react";

import { Card, CardContent, CardHeader } from "@material-ui/core";

export const Dashboard = () => (
  <Card>
    <CardHeader title="Welcome to the React JS Administration Panel" />
    <CardContent>
      This is the React JS Admin panel project. <br />
      <br />
      For back-end Data https://jsonplaceholder.typicode.com API's are used.
    </CardContent>
  </Card>
);
