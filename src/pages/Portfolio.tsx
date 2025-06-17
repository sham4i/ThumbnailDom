import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioSearchAndFilter from "@/components/PortfolioSearchAndFilter";
import PortfolioFilterButtons from "@/components/PortfolioFilterButtons";
import PortfolioFeaturedSection from "@/components/PortfolioFeaturedSection";
import PortfolioAllProjects from "@/components/PortfolioAllProjects";
import { thumbnailsData } from "@/data/thumbnailData";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  const filters = ["All", "SMM", "Educational", "Tech", "Business", "Gaming", "Lifestyle", "Documentary", "Vlog"];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  
  const filteredItems = thumbnailsData.filter(item => {
    const matchesFilter = activeFilter === "All" || item.niche === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.niche.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.clientName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featuredItems = thumbnailsData.filter(item => item.featured);

  const handleClearFilters = () => {
    setActiveFilter("All");
    setSearchQuery("");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="animate-pulse space-y-8">
              <div className="h-8 bg-muted rounded w-1/3"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-64 bg-muted rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Portfolio</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <PortfolioHeader />
          <PortfolioSearchAndFilter 
            searchQuery={searchQuery} 
            onSearchChange={setSearchQuery} 
          />
          <PortfolioFilterButtons 
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          {/* Featured Projects */}
          {activeFilter === "All" && searchQuery === "" && (
            <PortfolioFeaturedSection featuredItems={featuredItems} />
          )}

          <PortfolioAllProjects 
            filteredItems={filteredItems}
            activeFilter={activeFilter}
            onClearFilters={handleClearFilters}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
