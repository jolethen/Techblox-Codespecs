const config = {
  title: 'Techblox Developer Archive',
  tagline: 'The blueprints for the future of voxel MMORPGs',
  url: 'https://your-username.github.io', // Replace with your GitHub username
  baseUrl: '/techblox-site/', // The name of your repo
  organizationName: 'Techblox Development Team', 
  projectName: 'Codespecs', 
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  themeConfig: {
    navbar: {
      title: 'Techblox Docs',
      items: [
        {type: 'doc', docId: 'intro', position: 'left', label: 'The Blueprint'},
        {href: 'https://jolethen.github.io/Techblox-Codespecs/', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Techblox. Licensed under CC BY 4.0.`,
    },
  },
};
