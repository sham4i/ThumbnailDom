
import { Button } from "@/components/ui/button";
import EnhancedThumbnailCard from "./EnhancedThumbnailCard";
import { ThumbnailData } from "@/data/thumbnailData";

interface PortfolioAllProjectsProps {
  filteredItems: ThumbnailData[];
  activeFilter: string;
  onClearFilters: () => void;
}

const PortfolioAllProjects = ({ filteredItems, activeFilter, onClearFilters }: PortfolioAllProjectsProps) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
        {activeFilter === "All" ? "All Projects" : `${activeFilter} Projects`}
        <span className="text-lg font-normal text-muted-foreground ml-2">
          ({filteredItems.length})
        </span>
      </h2>
      
      {filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found matching your criteria.</p>
          <Button 
            variant="outline" 
            onClick={onClearFilters}
            className="mt-4"
          >
            Clear Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <EnhancedThumbnailCard key={item.id} thumbnail={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PortfolioAllProjects;
