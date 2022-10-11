
interface links {
    id?: string;
}


export default (args?: links)=>({
    home: {title: 'Home', link: '/'},
    applications: {title: 'applications', link: '/applications'},
    createNewProject:{title: 'New project', link: '/project/new'},
    project: {title: `Project ${args?.id}`, link: '/project/:id'},
    projectSettings: {title: 'Project settings', link: '/applications/:id/settings'},
    projectSettingsGeneral: {title: `Prject ${args?.id}`, link: '/applications/:id/settings/general'},
    logout: {title: 'Logout', link: '/logout'},
    deploy: {title: 'Deploy', link: '/deploy'},
    deployment: {title: 'React deployment', link: '/deploy/:app'},
});