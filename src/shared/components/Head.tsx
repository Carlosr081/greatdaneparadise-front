import { Helmet } from "react-helmet";
import favicon from "./../../assets/logo.jpg";

interface IProps {
  title: string;
}

export default function Head({ title }: IProps): JSX.Element {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href={favicon} />
    </Helmet>
  );
}
