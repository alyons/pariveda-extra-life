FROM node:6.11.4

RUN useradd --user-group --create-home --shell /bin/false app &&\
    yarn global add npm@5

ENV HOME=/home/app

COPY package.json package-lock.json $HOME/extra-life/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/extra-life
RUN npm install --quiet

CMD ["npm", "start"]