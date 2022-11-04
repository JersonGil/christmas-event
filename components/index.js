export { default as TimeLabel } from "./TimeLabel";
export { default as Header } from "./Header";
export { default as SantaClaus } from "./SantaClaus";
export { default as Layout } from "./Layout";

import CardHOC from "./Card";

import CardHeader from "./Card/CardHeader";
import CardBody from "./Card/CardBody";
import CardFooter from "./Card/CardFooter";

export const Card = Object.assign(CardHOC, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
