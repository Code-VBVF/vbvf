export { default } from "../old-app/App";

import GlobalNavStyles from "../old-app/styles/css/global-nav.css";

export const links = () => {
  return [{ rel: "stylesheet", href: GlobalNavStyles }];
};
