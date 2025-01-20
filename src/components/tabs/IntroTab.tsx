import React from 'react';

const IntroTab = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-12 space-y-6">
        <h2 className="text-4xl font-bold text-dashboard-text">MetaAgent: The Power of Orchestration</h2>
        <p className="text-lg leading-relaxed text-dashboard-text">
          Text-to-action is revolutionizing business automation in 2025. Simply describe what you want to achieve, and MetaAgent's proven methodology transforms your words into <span className="font-bold">real business execution</span>, orchestrating thousands of AI agents and bringing in human expertise exactly when needed.
        </p>
        <p className="text-lg leading-relaxed text-dashboard-text">
          We combine <span className="font-bold">predefined expert scenarios</span> with the right mix of AI agents and domain experts, automating your business processes while maintaining human oversight where it matters most.
        </p>
        <p className="text-xl font-semibold text-dashboard-text italic">
          MetaAgent: Your words become reality.
        </p>
        <div className="w-full flex justify-center">
          <img 
            src="/lovable-uploads/0ec99827-da47-4c09-a749-c4c2791887f9.png" 
            alt="MetaAgent Process Flow"
            className="max-w-full h-auto"
          />
        </div>
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-dashboard-text">
        Welcome to MetaAgent
      </h1>
      <p className="text-lg leading-relaxed text-dashboard-text mb-8">
        MetaAgent is a central AI orchestration layer where <span className="font-bold">industry experts</span> and <span className="font-bold">intelligent AI agents</span> co-create and transform businesses into autonomous organizations. We combine <span className="font-bold">predefined expert scenarios</span> with advanced automation, helping entrepreneurs build and modernize scalable businesses of the future - from initial concept to a functioning AI ecosystem.
      </p>
      <div className="w-full flex justify-center mb-12">
        <img 
          src="/lovable-uploads/94e7f52b-bca0-4b3d-8675-afe6484ae1c0.png" 
          alt="MetaAgent Architecture Diagram"
          className="max-w-full h-auto rounded-lg shadow-lg border border-white/10"
        />
      </div>
      
      <div className="space-y-6 mb-12">
        <h2 className="text-2xl font-bold text-dashboard-text">Our Mission</h2>
        <p className="text-lg leading-relaxed text-dashboard-text">
          We compose and orchestrate teams of <span className="font-bold">intelligent AI agents</span> tailored to your business. Our system instantly matches the best agents to tasks, synchronizes their cooperation, and ensures peak performance, while <span className="font-bold">industry experts</span> maintain strategic oversight. It's like having your own AI super-team under the watchful eye of the best coaches.
        </p>
        <p className="text-lg leading-relaxed text-dashboard-text font-semibold">
          We combine human expertise with advanced automation
        </p>
      </div>

      {/* Example Conversation */}
      <div className="glass-card p-8 space-y-6">
        <div className="space-y-4">
          <div className="bg-dashboard-dark/40 p-4 rounded-lg">
            <p className="text-dashboard-text font-semibold">USER:</p>
            <p className="text-dashboard-text">"I want to create an online shoe store"</p>
          </div>

          <div className="bg-dashboard-dark/20 p-4 rounded-lg">
            <p className="text-dashboard-text font-semibold">META-AGENT:</p>
            <p className="text-dashboard-text">"I'll help you build a profitable e-commerce business. Let's start..."</p>
          </div>

          <div className="space-y-2">
            <p className="text-dashboard-text font-semibold">1. Quick Analysis [1 min]:</p>
            <ul className="list-disc list-inside text-dashboard-text ml-4">
              <li>Agent gathers basic info: budget, scale, niche</li>
              <li>Shows market potential and sales forecasts</li>
            </ul>
          </div>

          <div className="bg-dashboard-accent1/10 p-4 rounded-lg">
            <p className="text-dashboard-text font-semibold">[EXPERT NEED DETECTED]</p>
            <p className="text-dashboard-text">META-AGENT: "I see that the footwear industry has specific sourcing requirements. Connecting you with an expert who has 15 years of footwear e-commerce experience..."</p>
          </div>

          <div className="bg-dashboard-accent2/10 p-4 rounded-lg">
            <p className="text-dashboard-text font-semibold">[SMOOTH TRANSITION TO EXPERT]</p>
            <p className="text-dashboard-text">EXPERT: "Hi! Meta-Agent briefed me on the details. I have a few key questions about your collection vision..."</p>
            <ul className="list-disc list-inside text-dashboard-text ml-4 mt-2">
              <li>Brief expert session [10 min]</li>
              <li>Specific recommendations on suppliers and margins</li>
            </ul>
          </div>

          <div className="bg-dashboard-dark/20 p-4 rounded-lg">
            <p className="text-dashboard-text font-semibold">[BACK TO AUTOMATION]</p>
            <p className="text-dashboard-text">META-AGENT: "Thanks to the expert. Based on this information, I'm preparing an optimized plan..."</p>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-dashboard-text font-semibold">2. Automated Implementation:</p>
              <ul className="list-disc list-inside text-dashboard-text ml-4">
                <li>Agent builds store incorporating expert knowledge</li>
                <li>Configures all systems and integrations</li>
                <li>Client only approves subsequent stages</li>
              </ul>
            </div>

            <div>
              <p className="text-dashboard-text font-semibold">3. Sales Launch:</p>
              <ul className="list-disc list-inside text-dashboard-text ml-4">
                <li>Automated marketing activation</li>
                <li>Full operations automation</li>
                <li>Regular reports and optimizations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroTab;