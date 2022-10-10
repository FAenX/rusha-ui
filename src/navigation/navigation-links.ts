
interface links {
    id?: string;
}


export default (args?: links)=>({
    home: {title: 'Home', link: '/'},
    projects: {title: 'Projects', link: '/projects'},
    createNewProject:{title: 'New project', link: '/projects/new'},
    project: {title: `Project ${args?.id}`, link: '/projects/:id'},
    projectSettings: {title: 'Project settings', link: '/projects/:id/settings'},
    projectSettingsGeneral: {title: `Prject ${args?.id}`, link: '/projects/:id/settings/general'},
    logout: {title: 'Logout', link: '/logout'},
    deploy: {title: 'Deploy', link: '/deploy'},
    deployment: {title: 'React deployment', link: '/deploy/:app'},
});