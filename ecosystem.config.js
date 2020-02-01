/**
 * Created by umair on 7/31/17.
 */
module.exports = {

  apps : [

      {
          name      : "amoeba-frontpages",
          script    : "online.codingblocks.com/node_modules/.bin/nuxt",
          // interpreter: "/home/codingblocks/.nvm/versions/node/v10.17.0/bin/node",
          max_memory_restart: "1600M",
          append_env_to_name: true,
          env_production : {
            NODE_ENV: "production",
            PORT: 8082
          },
          env_staging : {
            NODE_ENV: "staging",
            PORT: 8081,
          }
      }
  ],

}
