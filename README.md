First run:

```
mkdir /var/log/ghost
docker run -name my-ghost-blog -i -t -p 3000:80 -v /var/www -v /var/log/ghost:/var/log ghost bash
# customize i.e. setup mail config, install themes etc..
/opt/hopsoft/ghost/start
<CTL-P> <CTL-C>
docker stop my-blog
```

Subsequent runs:

```
docker start my-ghost-blog
/opt/hopsoft/ghost/start
<CTL-P> <CTL-C>
```

