import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { MovingBorder } from '@/components/ui/moving-border';
import placeholderData from '@/lib/placeholder-images.json';

const projects = [
  {
    id: 'project-1',
    title: 'Paycrypt',
    description: 'PayCrypt is a seamless payment platform that empowers you to pay your everyday bills with cryptocurrency quickly, securely, and effortlessly',
    tags: ['Next.js', 'Web3.js', 'The Graph'],
  },
  {
    id: 'project-1',
    title: 'Memevibe',
    description: 'A fun and intuitive mini app that helps you craft hilarious memes in just seconds — quick, easy, and enjoyable, fostering social engagement',
    tags: ['Next.js', 'Web3.js', 'The Graph'],
  },
  {
    id: 'project-2',
    title: 'BaseConnect',
    description: 'A Web3 collaboration platform that connects builders and contributors through transparent, automated, and trustless systems, enabling seamless collaboration between project owners and skilled contributors from task creation to verified completion and instant payment.',
    tags: ['Solidity', 'Hardhat', 'React'],
  },
  {
    id: 'project-3',
    title: 'Governance DAO Framework',
    description: 'A modular and extensible framework for launching Decentralized Autonomous Organizations. Features on-chain voting and treasury management.',
    tags: ['Smart Contracts', 'DAO', 'Ethers.js'],
  },
  {
    id: 'project-4',
    title: 'Web3 Developer Portal',
    description: 'A comprehensive documentation and tutorial portal for a Layer-2 scaling solution, designed to improve developer onboarding and experience.',
    tags: ['DevRel', 'Documentation', 'Docusaurus'],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="container">
      <div className="text-center space-y-2 mb-12">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">My Work</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Featured Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => {
          const projectImage = placeholderData.placeholderImages.find(p => p.id === project.id);
          return (
          <div key={project.title} className="relative p-[1px] overflow-hidden rounded-lg">
             <Card className="relative z-10 h-full bg-card/80 backdrop-blur-sm">
                <MovingBorder duration={5000} rx="8px" ry="8px">
                    <CardHeader>
                        {projectImage && (
                            <div className="aspect-video overflow-hidden rounded-md mb-4 border">
                                <Image
                                src={projectImage.imageUrl}
                                alt={projectImage.description}
                                width={600}
                                height={400}
                                data-ai-hint={projectImage.imageHint}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        )}
                        <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{project.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                        <div className="flex gap-2">
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="#" target="_blank">
                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                            </Link>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="#" target="_blank">
                                <Code className="mr-2 h-4 w-4" /> Source Code
                            </Link>
                        </Button>
                        </div>
                    </CardFooter>
                 </MovingBorder>
            </Card>
          </div>
        )})}
      </div>
    </section>
  );
}
