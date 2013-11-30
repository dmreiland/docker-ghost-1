FROM hopsoft/nodejs
MAINTAINER Nathan Hopkins, natehop@gmail.com

ADD assets /opt/hopsoft/ghost
RUN /opt/hopsoft/ghost/install
ENV NODE_ENV production
