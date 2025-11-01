"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Twitter } from 'lucide-react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const text = "Building the bridge between Developers and Web3 Ecosystems.".split(" ");

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight glowing-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            Jesutola Olusegun
          </motion.h1>
          <motion.p 
            className="mt-2 text-lg font-semibold text-primary/90"
            style={{ textShadow: '0 0 10px hsl(var(--primary) / 0.5)'}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
          >
            a.k.a. JENOLA
          </motion.p>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground">
            {text.map((el, i) => (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.25,
                        delay: i / 10,
                    }}
                    key={i}
                >
                    {el}{" "}
                </motion.span>
            ))}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#projects">
                Explore My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.8 }}
             className="mt-12 flex justify-center gap-6"
          >
            <Link href="https://github.com/Jenola344" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110" style={{ filter: 'drop-shadow(0 0 5px hsl(var(--primary) / 0))', transition: 'filter 0.3s' }} onMouseOver={e => e.currentTarget.style.filter = 'drop-shadow(0 0 5px hsl(var(--primary) / 0.8))'} onMouseOut={e => e.currentTarget.style.filter = 'drop-shadow(0 0 5px hsl(var(--primary) / 0))'}/>
            </Link>
            <Link href="https://x.com/jenola_dev" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6 text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110" style={{ filter: 'drop-shadow(0 0 5px hsl(var(--primary) / 0))', transition: 'filter 0.3s' }} onMouseOver={e => e.currentTarget.style.filter = 'drop-shadow(0 0 5px hsl(var(--primary) / 0.8))'} onMouseOut={e => e.currentTarget.style.filter = 'drop-shadow(0 0 5px hsl(var(--primary) / 0))'}/>
            </Link>
          </motion.div>

        </div>
      </motion.div>
    </AuroraBackground>
  );
}
