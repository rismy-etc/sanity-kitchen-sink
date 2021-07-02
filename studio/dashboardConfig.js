export default {
  widgets: [
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
                  buildHookId: '60def72e2ad04ebf9ee5e907',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3ha1tisw',
                  apiId: 'a6ff4eb2-4147-40ea-a8b8-ff80af6ae44d'
                },
                {
                  buildHookId: '60def72e53caabc085513c50',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-eku4sfkx',
                  apiId: '151eda26-c22e-48e3-930b-846ba5be632c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rismy-etc/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-eku4sfkx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
