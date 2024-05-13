import React from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";

type Props = {
  headerType: string | number;
};

const componentMap: Record<string | number, JSX.Element> = {
  header1: <Header1 />,
  header2: <Header2 />,
  1: <Header1 />,
  2: <Header2 />,
};

const Header = ({ headerType }: Props) => {
  return componentMap[headerType] || <Header3 />;
};

export default Header;
