# Start docker
docker build -t online-shop-vue:latest .
docker run --name online-shop-vue -d -p 127.0.0.1:80:8080/ online-shop-vue:latest

# docker build
Build an image from a Dockerfile

## Usage
```
  docker build [OPTIONS] PATH | URL | -
```

## Extended description
The docker build command builds Docker images from a Dockerfile and a “context”. A build’s context is the set of files located in the specified PATH or URL. The build process can refer to any of the files in the context. For example, your build can use a COPY instruction to reference a file in the context.

The URL parameter can refer to three kinds of resources: Git repositories, pre-packaged tarball contexts and plain text files.

# Tag an image (-t)
```
 docker build -t vieux/apache:2.0 .
```
This will build like the previous example, but it will then tag the resulting image. The repository name will be vieux/apache and the tag will be 2.0. Read more about valid tags.

You can apply multiple tags to an image. For example, you can apply the latest tag to a newly built image and add another tag that references a specific version. For example, to tag an image both as whenry/fedora-jboss:latest and whenry/fedora-jboss:v2.1, use the following:
```
 docker build -t whenry/fedora-jboss:latest -t whenry/fedora-jboss:v2.1 .
```

# Publish or expose port (-p, --expose)🔗
```
 docker run -p 127.0.0.1:80:8080/tcp ubuntu bash
```
This binds port 8080 of the container to TCP port 80 on 127.0.0.1 of the host machine. You can also specify udp and sctp ports. The Docker User Guide explains in detail how to manipulate ports in Docker.

Note that ports which are not bound to the host (i.e., -p 80:80 instead of -p 127.0.0.1:80:80) will be accessible from the outside. This also applies if you configured UFW to block this specific port, as Docker manages his own iptables rules. Read more
```
 docker run --expose 80 ubuntu bash
```
This exposes port 80 of the container without publishing the port to the host system’s interfaces.

# Dockerfile

// our base image
FROM node:14
WORKDIR /app
// COPY <src> <dest>
// <src> and <dest> - file paths. <src> is the path to the source folder containing files to be copied.
// This option can be left empty to copy the contents of the current directory. The source of the files
// has to be a directory on the local computer.
// <dest> is the destination of the COPY command inside the docker container. This is the path where files // are to be copied.
COPY package.json ./
// runs in WORKDIR
RUN npm install
// copy all files to WORKDIR
COPY . .
// specify the port number the container should expose
EXPOSE 5000
// This CMD command is not really necessary for the container to work, as the echo command can be called
// in a RUN statement as well.
// The main purpose of the CMD command is to launch the software required in a container. For example, the
// user may need to run an executable .exe file or a Bash terminal as soon as the container starts – t​he
// CMD command can be used to handle such requests.
// !!!!!  In principle, there should only be one CMD command in your Dockerfile. When CMD is used multiple
// times, only the last instance is executed.
// Видимо запуск только после готовности контейнера
CMD ["npm", "run", "serve"]

# .dockerignore
Добавляем node_modules Dockerfile .git, чтобы они не попали в образ
Образ image также будет включать исходный код

# Базовые команды
docker pull {REGISTRY_NAME}

docker images
docker image rm {IMAGE_ID}

docker ps
docker ps -a

docker stop {CONTAINER ID}

docker rm $(docker ps -a -q -f status=exited) | {CONTAINER ID}
docker rm {CONTAINER ID}
