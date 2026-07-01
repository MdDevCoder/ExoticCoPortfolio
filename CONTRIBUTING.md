# Contributing to the Exotic Design System

First off, thank you for considering contributing to the **Exotic Design System**. It's people like you that make Exotic Co. an elite engineering organization.

## 1. Where do I go from here?

If you've noticed a bug or have a feature request, please open an internal Jira ticket tagged with `[DesignSystem]`.

## 2. Adding New Components

Before creating a new component, ask yourself:
- Can I build this using existing components?
- Is this component reusable across multiple projects?
- Does it adhere to the [Design Principles](./DESIGN_PRINCIPLES.md)?

If yes, follow these steps:
1. Create the component inside `src/components/ui/`.
2. Ensure it accepts a `className` prop for standard Tailwind overrides.
3. Use the centralized tokens from `src/lib/design/tokens.ts` and `motion.ts`.
4. Export the component.
5. **Crucial:** Add documentation and an interactive example to the `/design-system` route.

## 3. Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the README.md and the `/design-system` route with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the `CHANGELOG.md` to the new version that this Pull Request would represent.
4. You may merge the Pull Request in once you have the sign-off of an Engineering Lead.

## 4. Code Style

- Use `lucide-react` for all UI icons.
- Use `framer-motion` for all complex animations.
- Strictly type all Component props with TypeScript interfaces.
- Avoid inline styles. Use Tailwind utility classes mapping to our design tokens.
