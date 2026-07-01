import React from "react";
import { Metadata } from "next";
import { Container, Section, Grid, Stack, Flex } from "@/components/layout/Layouts";
import { Display, H1, H2, H3, H4, Lead, Body, Small, Overline } from "@/components/typography/Typography";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";
import { ArrowRight, Search, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Design System | Exotic Co.",
  description: "The official design system and component library for Exotic Co.",
};

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#020305]">
      <Container>
        
        {/* Header */}
        <div className="mb-24">
          <Overline className="mb-4 block">Exotic Design System v1.0</Overline>
          <Display className="mb-6">Single Source <br/><span className="text-primary italic">of Truth.</span></Display>
          <Lead className="max-w-3xl">
            This is the official design language of Exotic Co. All future products, dashboards, and internal tools must inherit from these tokens and components to ensure uncompromising quality and visual consistency.
          </Lead>
        </div>

        {/* Colors (Tokens) */}
        <Section className="!py-12 border-t border-white/5">
          <H2 className="mb-8">Color Tokens</H2>
          <Grid className="grid-cols-2 md:grid-cols-4">
            <div className="space-y-3">
              <div className="h-24 w-full rounded-2xl bg-[#2D8CFF] shadow-[0_0_20px_rgba(45,140,255,0.4)]" />
              <div>
                <div className="font-bold text-white">Primary</div>
                <div className="text-sm text-secondary-text">#2D8CFF</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-24 w-full rounded-2xl bg-[#56A8FF]" />
              <div>
                <div className="font-bold text-white">Glow</div>
                <div className="text-sm text-secondary-text">#56A8FF</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-24 w-full rounded-2xl bg-[#050608] border border-white/10" />
              <div>
                <div className="font-bold text-white">Surface</div>
                <div className="text-sm text-secondary-text">#050608</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-24 w-full rounded-2xl bg-[#020305] border border-white/5" />
              <div>
                <div className="font-bold text-white">Background</div>
                <div className="text-sm text-secondary-text">#020305</div>
              </div>
            </div>
          </Grid>
        </Section>

        {/* Typography */}
        <Section className="!py-12 border-t border-white/5">
          <H2 className="mb-8">Typography Scale</H2>
          <Stack className="gap-8">
            <div>
              <Display>Display Text</Display>
              <Small className="mt-2 text-primary">text-6xl md:text-8xl, font-bold, tracking-tighter</Small>
            </div>
            <div>
              <H1>Heading Level 1</H1>
              <Small className="mt-2 text-primary">text-5xl md:text-7xl, font-bold, tracking-tight</Small>
            </div>
            <div>
              <H2>Heading Level 2</H2>
              <Small className="mt-2 text-primary">text-4xl md:text-5xl, font-bold, tracking-tight</Small>
            </div>
            <div>
              <H3>Heading Level 3</H3>
              <Small className="mt-2 text-primary">text-2xl md:text-3xl, font-bold</Small>
            </div>
            <div className="max-w-2xl">
              <Lead>Lead Body Text. Used for primary descriptions and hero subheadings. It has a relaxed line height and lighter weight.</Lead>
              <Small className="mt-2 text-primary">text-xl md:text-2xl, font-light</Small>
            </div>
            <div className="max-w-2xl">
              <Body>Standard body text. This is used for paragraphs, long-form content, and general descriptions. It prioritizes legibility with a relaxed line height.</Body>
              <Small className="mt-2 text-primary">text-base md:text-lg, font-light</Small>
            </div>
          </Stack>
        </Section>

        {/* Buttons */}
        <Section className="!py-12 border-t border-white/5">
          <H2 className="mb-8">Buttons & Interactions</H2>
          <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center">
            <Button variant="primary" icon={<ArrowRight size={18} />}>Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </Grid>
          <Grid className="grid-cols-1 md:grid-cols-3 mt-8 items-center">
             <Button size="sm">Small Size</Button>
             <Button size="md">Medium Size</Button>
             <Button size="lg">Large Size</Button>
          </Grid>
        </Section>

        {/* Inputs */}
        <Section className="!py-12 border-t border-white/5">
          <H2 className="mb-8">Form Controls</H2>
          <Grid className="md:grid-cols-2 max-w-4xl">
            <Input label="Email Address" placeholder="Enter your email" type="email" icon={<Search size={18} />} />
            <Input label="Password" placeholder="Enter your password" type="password" />
            <Input label="Error State" placeholder="Invalid input" error="This field is required." />
            <Input label="Disabled State" placeholder="Cannot edit this" disabled />
          </Grid>
        </Section>

        {/* Badges & Cards */}
        <Section className="!py-12 border-t border-white/5">
          <H2 className="mb-8">Badges & Cards</H2>
          
          <Flex className="mb-12 flex-wrap gap-4">
            <Badge variant="primary">Flagship</Badge>
            <Badge variant="secondary">Beta Feature</Badge>
            <Badge variant="outline">Enterprise</Badge>
            <Badge variant="ghost">v1.0.0</Badge>
          </Flex>

          <Grid className="md:grid-cols-3">
            <Card variant="surface" padding="md" hoverEffect="glow">
              <div className="mb-4 text-primary"><Code2 size={24} /></div>
              <H3 className="mb-2">Surface Card</H3>
              <Body className="text-sm">Standard opaque card used for most dashboard panels and solid sections.</Body>
            </Card>
            
            <Card variant="glass" padding="md" hoverEffect="lift">
              <div className="mb-4 text-primary"><Code2 size={24} /></div>
              <H3 className="mb-2">Glass Card</H3>
              <Body className="text-sm">Translucent glassmorphic card used over gradients or images.</Body>
            </Card>

            <Card variant="outline" padding="md" hoverEffect="none">
              <div className="mb-4 text-primary"><Code2 size={24} /></div>
              <H3 className="mb-2">Outline Card</H3>
              <Body className="text-sm">Minimalist outlined card with no hover effects or backgrounds.</Body>
            </Card>
          </Grid>
        </Section>

      </Container>
    </main>
  );
}
