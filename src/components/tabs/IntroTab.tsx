import React from 'react';

const IntroTab = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-dashboard-text">
        Welcome to MetaAgent
      </h1>

      <div className="w-full flex justify-center mb-8">
        <img 
          src="/lovable-uploads/60a40fd5-5002-4397-b38c-bd0714dde376.png" 
          alt="How to achieve business goals"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      
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
      
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-dashboard-text">Our Mission</h2>
        <p className="text-lg leading-relaxed text-dashboard-text">
          We compose and orchestrate teams of <span className="font-bold">intelligent AI agents</span> tailored to your business. Our system instantly matches the best agents to tasks, synchronizes their cooperation, and ensures peak performance, while <span className="font-bold">industry experts</span> maintain strategic oversight. It's like having your own AI super-team under the watchful eye of the best coaches.
        </p>
        <p className="text-lg leading-relaxed text-dashboard-text font-semibold">
          We combine human expertise with advanced automation
        </p>
      </div>
    </div>
  );
};

export default IntroTab;