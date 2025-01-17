import React from 'react';

const IntroTab = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <p className="text-lg leading-relaxed text-gray-300 mb-8">
        MetaAgent is a central AI <span style={{ color: '#44bcd8', fontWeight: 'bold' }}>orchestration layer</span> where industry experts and intelligent agents co-create and transform businesses into autonomous organizations. We combine <span style={{ color: '#44bcd8', fontWeight: 'bold' }}>predefined expert scenarios</span> with advanced automation, helping entrepreneurs build and modernize scalable businesses of the future - from initial concept to a functioning AI ecosystem.
      </p>
      <div className="w-full flex justify-center mb-12">
        <img 
          src="/lovable-uploads/94e7f52b-bca0-4b3d-8675-afe6484ae1c0.png" 
          alt="MetaAgent Architecture Diagram"
          className="max-w-full h-auto rounded-lg shadow-lg border border-white/10"
        />
      </div>
    </div>
  );
};

export default IntroTab;