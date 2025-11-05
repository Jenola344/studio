import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Code, Rocket, Users } from 'lucide-react';

const skills = [
  {
    title: 'Frontend Development',
    icon: <Code className="w-8 h-8" />,
    description: 'I build interfaces that feel invisible. I prioritize intuitive design and flawless performance to create seamless experiences ',
  },
  {
    title: 'Smart Contract Engineering',
    icon: <Rocket className="w-8 h-8" />,
    description: 'Developing secure and efficient smart contracts on EVM-compatible chains.',
  },
  {
    title: 'Developer Relations',
    icon: <Users className="w-8 h-8" />,
    description: 'Bridging the gap between developers and ecosystems. I excel at creating high-quality documentation, engaging educational content, and fostering vibrant communities.',
  },
  {
    title: 'Community & Ecosystem Growth',
    icon: <BrainCircuit className="w-8 h-8" />,
    description: 'Strategizing and executing initiatives that drive developer adoption and community growth, including hackathons, workshops, and technical advocacy.',
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-muted/30 dark:bg-background">
      <div className="container">
        <div className="text-center space-y-2 mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">My Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Core Competencies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <Card key={skill.title} className="bg-card/80 backdrop-blur-sm border-border/20 hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="flex flex-col items-center text-center">
                 <div className="p-4 bg-primary/10 rounded-full mb-4 text-primary" style={{ filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.6))' }}>
                  {skill.icon}
                </div>
                <CardTitle>{skill.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
