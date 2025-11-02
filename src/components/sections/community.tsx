import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, Presentation } from 'lucide-react';
import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';

const communityItems = [
  {
    id: 'community-1',
    icon: <Mic className="h-5 w-5" />,
    title: 'Keynote at Web3 Summit 2023',
    description: 'Spoke about the future of developer relations in a decentralized world, focusing on community-driven growth strategies.',
  },
  {
    id: 'community-1',
    icon: <Mic className="h-5 w-5" />,
    title: 'Keynote at Web3 Summit 2023',
    description: 'Spoke about the future of developer relations in a decentralized world, focusing on community-driven growth strategies.',
  },
  {
    id: 'community-2',
    icon: <Presentation className="h-5 w-5" />,
    title: 'Smart Contract Security Workshop',
    description: 'Led a hands-on workshop for 100+ developers on best practices for writing secure Solidity code and avoiding common vulnerabilities.',
  },
];

export default function CommunitySection() {
  return (
    <section id="community" className="bg-muted/30 dark:bg-background">
      <div className="container">
        <div className="text-center space-y-2 mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Community Impact</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Speaking & Collaboration</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {communityItems.map((item) => {
            const itemImage = placeholderData.placeholderImages.find(i => i.id === item.id);
            return (
            <Card key={item.title} className="overflow-hidden flex flex-col sm:flex-row bg-card/80 backdrop-blur-sm border-border/20 transition-all duration-300 hover:border-primary">
              {itemImage && (
                <div className="sm:w-1/3 aspect-video sm:aspect-auto">
                    <Image
                    src={itemImage.imageUrl}
                    alt={itemImage.description}
                    width={600}
                    height={400}
                    data-ai-hint={itemImage.imageHint}
                    className="w-full h-full object-cover"
                    />
                </div>
              )}
              <div className="sm:w-2/3">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="text-primary">{item.icon}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </div>
            </Card>
          )})}
        </div>
      </div>
    </section>
  );
}
