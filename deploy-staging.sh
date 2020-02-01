COMMAND14="cd ~/frontends/amoeba-frontpages-staging/online.codingblocks.com && \
	git checkout master && \
	git fetch --all --prune && \
	git reset --hard origin/master && \
	git pull && \
    ulimit -S -n 65000 && \
    nvm use && \
  yarn && yarn build && \
  nvm use 8 && \
  pm2 restart amoeba-frontpages-staging --update-env --env staging
	"

ssh codingblocks@srv12.cb.lk $COMMAND14


