COMMAND14="cd ~/frontends/amoeba-frontpages/online.codingblocks.com && \
	git checkout master && \
	git fetch --all --prune && \
	git reset --hard origin/master && \
	git pull && \
    nvm use && \
    ulimit -S -n 65000 && \
  yarn && yarn build && \
  pm2 restart amoeba-frontpages --update-env
	"

ssh codingblocks@srv12.cb.lk $COMMAND14


