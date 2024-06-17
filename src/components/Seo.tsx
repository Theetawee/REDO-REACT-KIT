import { base_url } from "@hooks/constants";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";



const Seo = ({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${base_url}${location.pathname}`} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:url" content={`${base_url}${location.pathname}`} />
        <meta
          name="identifier-URL"
          content={`${base_url}${location.pathname}`}
        />
        <meta name="url" content={`${base_url}${location.pathname}`} />
      </Helmet>
      {children}
    </>
  );
};

export default Seo;
