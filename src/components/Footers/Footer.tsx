import React from "react";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";

type Props = {
  footerType: string | number;
};

const componentMap: Record<string | number, JSX.Element> = {
  footer1: <Footer1 />,
  footer2: <Footer2 />,
  1: <Footer1 />,
  2: <Footer2 />,
  // Add more mappings here as needed
};

const Footer = ({ footerType }: Props) => {
  return componentMap[footerType] || <Footer3 />;
};

export default Footer;
