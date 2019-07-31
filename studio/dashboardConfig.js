export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d41cdddd6a0008b1c9d2e2b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-tm4yvz3r',
                  apiId: '5c7d112d-98e0-4f7a-8fc6-aeff01206389'
                },
                {
                  buildHookId: '5d41cddd308dc277cdefb74f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-h2ndirh7',
                  apiId: '0101a6b0-088f-4910-9470-fdab39e7e167'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iChris/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-h2ndirh7.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
