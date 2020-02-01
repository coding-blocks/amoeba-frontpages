COMMAND14="cd ~/frontends/amoeba-frontpages-prod/online.codingblocks.com && \
	git checkout master && \
	git fetch --all --prune && \
	git reset --hard origin/master && \
	git pull && \
    ulimit -S -n 65000 && \
    nvm use && \
  yarn && yarn build:prod && \
  nvm use 8 && \
  pm2 start ecosystem.config.js --update-env --env production
	"

ssh codingblocks@srv12.cb.lk $COMMAND14


