export type Tool = {
  name: string;
  status: string;
  summary: string;
  features: string[];
  tech?: string[];
  href?: string; // add a link once the tool has a public page or repository
};

// To add a tool, append an object here. The Tools page renders this list.
export const tools: Tool[] = [
  {
    name: 'Lab manager',
    status: 'In development',
    summary:
      'A web app for running a physical lab: what we own, who has it, and who is allowed to do what.',
    features: [
      'Electronics and equipment inventory',
      'Borrowing and returns',
      'Several labs in one installation, each with its own members and stock',
      'Role-based access control',
    ],
    tech: ['SvelteKit'],
  },
];
