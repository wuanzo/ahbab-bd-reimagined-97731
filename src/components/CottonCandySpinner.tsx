export const CottonCandySpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-16 h-16">
        {/* Spinning circles with cotton candy colors */}
        <div className="absolute inset-0 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-secondary/30 border-t-secondary animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        <div className="absolute inset-4 rounded-full border-4 border-accent/30 border-t-accent animate-spin-slow"></div>
        
        {/* Center sparkle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
