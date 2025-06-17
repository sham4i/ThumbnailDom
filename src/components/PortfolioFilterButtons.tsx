
import { Button } from "@/components/ui/button";

interface PortfolioFilterButtonsProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const PortfolioFilterButtons = ({ filters, activeFilter, onFilterChange }: PortfolioFilterButtonsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={activeFilter === filter ? "default" : "outline"}
          onClick={() => onFilterChange(filter)}
          size="sm"
          className="mb-2"
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};

export default PortfolioFilterButtons;
