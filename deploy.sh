COMMAND14="cd ~/frontends/landing-pages/hellointern.codingblocks.com && \
	git checkout master && \
	git fetch --all --prune && \
	git reset --hard origin/master && \
	git pull && \
    ulimit -S -n 65000 && \
  yarn && yarn build && \
  pm2 restart landing --update-env
	"
# pm2 restart ./node_modules/nuxt/bin/nuxt.js --name landing -- start

ssh codingblocks@srv9.cb.lk $COMMAND14