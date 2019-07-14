module.exports = {
    apps: [
        {
            name: 'ibooking-app',
            script: './src/index.js',
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ]
};