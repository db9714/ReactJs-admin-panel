import * as React from "react";
import { Admin, Resource, Login } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./Components/User.jsx";
import { PostList } from "./Components/Post.jsx";
import { PostEdit } from "./Components/EditPost.jsx";
import { PostCreate } from "./Components/CreatePost.jsx";
import { Dashboard } from "./Components/DashBoard.jsx";
import authProvider from "./Components/authProvider.jsx";
import MyLoginPage from "./Components/login";
// import dataProvider from "./utils/api.services";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin loginPage={MyLoginPage} dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={UserList} />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
  </Admin>
);

export default App;
