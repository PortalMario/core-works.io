export const content = {
  user: 'felix@core-works',

  commands: [
    {
      command: 'whoami',
      output: 'Felix Weigl',
      outputStyle: 'name',
    },
    {
      command: 'cat role.txt',
      output: 'DevOps Engineer · Fachinformatiker · Core Works',
      outputStyle: 'accent',
    },
    {
      command: 'cat about.txt',
      output:
        'Freelance DevOps engineer and IT infrastructure consultant serving small and mid-size businesses.',
      outputStyle: 'about',
    },
    {
      command: 'ls ./stack',
      output: ['Docker', 'Kubernetes', 'Terraform', 'AWS', 'Linux', 'CI/CD'],
      outputStyle: 'stack',
    },
    {
      command: 'cat contact.txt',
      output: 'contact',
      outputStyle: 'contact',
    },
  ],

  contact: {
    email: 'info@core-works.io',
    phone: '+49 174 3203893',
    linkedin: 'in/felix-weigl',
  },

  cta: {
    command: 'mail --send "Kontakt per E-Mail"',
    href: 'mailto:info@core-works.io',
  },
};
