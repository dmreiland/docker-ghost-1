## Start the container

```
mkdir /var/log/ghost
docker run -name my-blog -i -t -p 3000:80 -v /var/www -v /var/log/ghost:/var/log hopsoft/ghost bash
```

## Configure

```
vim /var/www/ghost/config.js
vim /etc/nginx/nginx.conf
vim /etc/nginx/sites-available/ghost.conf
```

## Install a theme *(optional)*

```
cd /var/www/ghost/content/themes
git clone https://github.com/oswaldoacauan/ghostium
vim ghostium/partials/custom/config.hbs
vim /var/www/ghost/content/themes/ghostium/partials/custom/config.hbs
vim /var/www/ghost/content/themes/ghostium/partials/custom/meta.hbs
vim /var/www/ghost/content/themes/ghostium/partials/custom/navigation.hbs
```

## Start all services & exit

```
/opt/hopsoft/ghost/start
<CTL-P> <CTL-Q>
```

## Visit the blog

```
curl http://localhost:3000
```

## Make a config change after start

```
docker attach my-blog
vim /var/www/ghost/config.js
forever restartall
<CTL-P> <CTL-Q>
```

## Restart the container

```
docker start my-blog
/opt/hopsoft/ghost/start
<CTL-P> <CTL-Q>
```


