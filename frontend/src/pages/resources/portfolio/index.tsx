import Layout from "@/components/layout/Layout";
import AllProjects from "@/components/resources/portfolio/AllProjects";

import PortfolioHero from "@/components/resources/portfolio/portfolioHero";

const Portfolio = () => {
  return (
    <Layout enableSmoothScroll>
      <PortfolioHero />
      <AllProjects />
    </Layout>
  );
};

export default Portfolio;
