
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

interface PortfolioSearchAndFilterProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const PortfolioSearchAndFilter = ({ searchQuery, onSearchChange }: PortfolioSearchAndFilterProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search by title, niche, or client..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 w-full md:w-80"
        />
      </div>
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Filter by niche:</span>
      </div>
    </div>
  );
};

export default PortfolioSearchAndFilter;
