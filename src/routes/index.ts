import { ComponentType } from "react";
import { Event, Login } from "../pages";

export interface IRoute {
  path: string;
  element: ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = '/login',
  EVENT = '/'
}

export const publicRoutes: Array<IRoute> = [
  { path: RouteNames.LOGIN, exact: true, element: Login }
];

export const privateRoutes: Array<IRoute> = [
  { path: RouteNames.EVENT, exact: true, element: Event }
];