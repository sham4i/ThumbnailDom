
interface PortfolioHeaderProps {
  className?: string;
}

const PortfolioHeader = ({ className = "" }: PortfolioHeaderProps) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Our Portfolio
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
        Discover how we've transformed YouTube channels across different niches with strategic, 
        conversion-focused thumbnail designs that drive real results.
      </p>
    </div>
  );
};

export default PortfolioHeader;
