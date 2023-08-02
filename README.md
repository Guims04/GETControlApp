# GETControlApp

## How to run with Docker Compose

To run the application using Docker Compose, follow these steps:

1. Make sure you have Docker installed on your system.
2. Open a terminal or command prompt and navigate to the root of the project.
3. Run the following command to start the application:
   ```
   $ docker compose up
   ```
   This command will build and start the necessary containers for the application to run.

## Creating your User Access

1. Open a terminal on your operating system.
2. Run **_docker ps_** to list the running containers. It will look like this:
   ```
   CONTAINER ID   IMAGE                  COMMAND                  CREATED          STATUS          PORTS                    NAMES
   c7afd1997598   getcontrolapp-api      "docker-entrypoint.s…"   16 minutes ago   Up 15 minutes   0.0.0.0:3000->3000/tcp   api
   5ecbe2030148   getcontrolapp-webapp   "docker-entrypoint.s…"   16 minutes ago   Up 15 minutes   0.0.0.0:4200->4200/tcp   webapp
   0b8076f23944   postgres:latest        "docker-entrypoint.s…"   16 minutes ago   Up 15 minutes   0.0.0.0:5430->5432/tcp   get_control_db
   ```
   Locate the CONTAINER ID for the getcontrolapp-api container.
3. Run the following command, replacing **`<CONTAINER ID>`** with the actual CONTAINER ID you found in the previous step:
   ```
   $ docker exec -it <CONTAINER ID> bash
   ```
   If **`bash`** does not work, try using **`sh`**.
4. To create the admin user, execute the following command in the Docker terminal:
   ```
   $ npx prisma db seed
   ```
   The command will create the admin user and display the username and password that you can use to access the application.

ENJOY 🙃

<br><br>

## Helpers

Here are some helpful commands and tips for working with the project:

- Criar pacote npm

  ```
  $ npm init
  ```

- Mudar de branch(ramificação):

  ```
  $ git checkout {nome_branch}
  ```

- criar branch(ramificação):

  ```
  $ git checkout -b {nome_branch} ( Obs.: sempre estar na develop )
  ```

- excluir branch(ramificação):

  ```
  $ git branch -d {nome_branch} ( Obs.: sempre estar na develop )
  ```

- Como trazer da nuvem: SEMPRE ANTES DE COMEÇAR E DEPOIS QUE TERMINAR

  ```
  $ git fetch (informante do que esta na nuvem)
  $ git pull origin {nome_branch} (Traz EXATAMENTE como ta na nuvem)
  $ git merge origin/{nome_branch} atual -> ( feature/start-api )
  ```

- Como enviar para a NUVEM:

  ```
  $ git push origin {nome_branch} (ENVIAR EXATAMENTE como ta na MAQUINA)
  ```

- Listar branchs que existe na maquina
  ```
  $ git branch
  ```
- Rodar todas as migrations existentes

  ```
  $ npx prisma migrate dev
  ```

- Para criar componentes

  ```
  $ ng g c nome-componente --module=nome-module
  ```

- Para criar module

  ```
  $ ng g m nome-module
  ```

  <br>

  Após instalar pacotes de config typescript:

  - usar npx para executar ex: npx tsc --init
  - usar npn para install

  <br>

biblioteca usada para criptografar:

- bcryptjs
- instala junto como dependencia da biblioteca bcryptjs
- @types/bcryptjs -D
