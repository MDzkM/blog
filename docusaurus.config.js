module.exports = {
  title: 'mdzkm.',
  tagline: 'Blog, Tutorials, and Personal Archives',
  url: 'https://blog-mdzkm.netlify.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'mdzkm', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'mdzkm.',
      logo: {
        href: 'https://mdzkm.netlify.app/',
        target: '_self'
      },
      links: [
        {
          href: 'https://resources-mdzkm.netlify.app/',
          label: 'Tutorials and Archives',
          position: 'right',
          target: '_self',
        },
        {
          to: '/',
          label: 'Blog',
          position: 'right',
        },
      ],
      // algolia: {
      //   apiKey: 'api-key',
      //   indexName: 'index-name',
      // },
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'About',
              href: 'https://mdzkm.netlify.app/',
              target: '_self',
            },
            {
              label: 'Projects',
              href: 'https://mdzkm.netlify.app/projects',
              target: '_self',
            },
            {
              label: 'Tutorials and Archives',
              to: 'https://resources-mdzkm.netlify.app/',
              target: '_self',
            },
            {
              label: 'Blog',
              to: '/',
            },
          ],
        },
        {
          title: 'Codebase',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mdzkm',
            },
            {
              label: 'GitLab',
              href: 'https://gitlab.com/mdzkm',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/mdzkm/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/mdzkm',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/mdzkm',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} mdzkm.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          path: './blog',
          routeBasePath: '/', // Set this value to '/'.
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/mdzkm/resources/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
