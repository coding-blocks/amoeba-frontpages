COMMAND14="cd ~/frontends/amoeba-frontpages-staging/online.codingblocks.com && \
	git checkout development && \
	git fetch --all --prune && \
	git reset --hard origin/development && \
	git pull && \
    ulimit -S -n 65000 && \
    nvm use && \
  yarn && yarn build:staging && \
  nvm use 12 && \
  NODE_ENV=staging pm2 restart amoeba-frontpages-staging
	"

ssh codingblocks@srv12.cb.lk $COMMAND14


