import React from 'react';

const ContactTab = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-12 space-y-6">
        <h2 className="text-4xl font-bold text-dashboard-text mb-8">Contact Us</h2>
        <div className="glass-card p-8 max-w-md mx-auto">
          <p className="text-lg mb-6 text-dashboard-text">Scan the QR code to contact us on WhatsApp:</p>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/70fc21eb-215b-4ae0-b732-e81c647540a1.png" 
              alt="WhatsApp QR Code"
              className="w-64 h-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTab;