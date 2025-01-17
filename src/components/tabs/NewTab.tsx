const NewTab = () => {
  return (
    <div className="space-y-8 max-w-3xl">
      <h2 className="text-3xl font-bold text-white">Killer Feature</h2>
      <div className="space-y-6 text-lg leading-relaxed">
        <p className="text-dashboard-text">
          A scenario is a ready, <span className="font-bold text-dashboard-accent1">verified "recipe"</span> for solving a specific business problem. It works like navigation - you don't need to know the route or understand the technology, just state where you want to go. MetaAgent selects appropriate AI agents and experts, then guides you step by step to your goal.
        </p>
        
        <img 
          src="/lovable-uploads/28ef12ed-04b0-41c6-9d1d-3458b3049cee.png" 
          alt="Scenario Execution Process"
          className="w-full max-w-2xl mx-auto my-8"
        />
        
        <p className="text-dashboard-text mt-6">
          It's like the difference between:
        </p>
        
        <div className="glass-card p-6">
          <p className="text-dashboard-text italic">
            Receiving a map and compass (regular search engines providing information) and stepping into an autonomous vehicle with an experienced driver (MetaAgent with a ready scenario)
          </p>
        </div>
        
        <p className="text-dashboard-text mt-6">
          The key value lies in the fact that <span className="font-bold text-dashboard-accent1">one proven scenario</span> can be repeatedly used by different companies, making expertise easily scalable.
        </p>
      </div>
    </div>
  );
};

export default NewTab;