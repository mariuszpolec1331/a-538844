import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, GitMerge } from "lucide-react";

const GTMTab = () => {
  const roadmapSteps = [
    {
      title: "Initial Integration Planning",
      description: "Comprehensive analysis of ERP platforms and widget requirements",
      tasks: [
        "Technical requirements gathering",
        "ERP platform compatibility assessment",
        "Integration architecture design"
      ],
      status: "completed"
    },
    {
      title: "Widget Development & Testing",
      description: "Building and testing the widget for seamless ERP integration",
      tasks: [
        "Core widget development",
        "API integration implementation",
        "Cross-platform testing"
      ],
      status: "in-progress"
    },
    {
      title: "ERP Platform Integration",
      description: "Implementing the widget across major ERP platforms",
      tasks: [
        "SAP integration deployment",
        "Oracle ERP integration",
        "Microsoft Dynamics integration"
      ],
      status: "upcoming"
    },
    {
      title: "Market Launch & Support",
      description: "Rolling out to market with comprehensive support",
      tasks: [
        "Documentation and training materials",
        "Customer support setup",
        "Continuous monitoring and updates"
      ],
      status: "upcoming"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <GitMerge className="w-8 h-8 text-dashboard-accent1" />
        <h2 className="text-2xl font-bold">Go-to-Market Strategy</h2>
      </div>

      <div className="grid gap-6">
        {roadmapSteps.map((step, index) => (
          <Card key={index} className="p-6 bg-white/5 border-white/10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              <Badge 
                variant={step.status === "completed" ? "default" : 
                        step.status === "in-progress" ? "secondary" : 
                        "outline"}
                className="capitalize"
              >
                {step.status === "completed" && <Check className="w-4 h-4 mr-1" />}
                {step.status}
              </Badge>
            </div>
            <div className="space-y-2">
              {step.tasks.map((task, taskIndex) => (
                <div key={taskIndex} className="flex items-center gap-2 text-sm text-gray-300">
                  <ArrowRight className="w-4 h-4 text-dashboard-accent1" />
                  {task}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 bg-dashboard-accent1/10 rounded-lg border border-dashboard-accent1/20">
        <h3 className="text-xl font-semibold mb-4">Implementation Benefits</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <Check className="w-5 h-5 text-dashboard-accent1" />
            Seamless integration with existing ERP workflows
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-5 h-5 text-dashboard-accent1" />
            Minimal configuration requirements for quick deployment
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-5 h-5 text-dashboard-accent1" />
            Enhanced data synchronization across platforms
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-5 h-5 text-dashboard-accent1" />
            Scalable architecture for future expansions
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GTMTab;