// shipitfile.js
module.exports = shipit => {
    // Load shipit-deploy tasks
    require('shipit-deploy')(shipit)

    shipit.initConfig({
        default: {
            // workspace: '/tmp/github-monitor',
            asUser: "root",
            deployTo: '/usr/share/nginx/html/',
            repositoryUrl: 'https://github.com/Yann-nc/shipit_test.git',
            branch: 'main',
            key: '~/.ssh/id_ed25519',
            // shallowClone: false,
        },
        staging: {
            servers: 'ec2-user@ec2-15-188-63-61.eu-west-3.compute.amazonaws.com',
        },
    })
}