# GETControlApp

Criar pacote npm
$ npm init

Mudar de branch(ramificação):
$ git checkout {nome_branch}

criar branch(ramificação):
$ git checkout -b {nome_branch} (Obs.: sempre estar na develop)

Como trazer da nuvem: SEMPRE ANTES DE COMEÇAR E DEPOIS QUE TERMINAR
$ git fetch (informante do que esta na nuvem)
$ git pull origin {nome_branch} (Traz EXATAMENTE como ta na nuvem)
$ git merge origin/{nome_branch} atual -> ( feature/start-api )

Como enviar para a nuvem:
$ git push origin {nome_branch} (ENVIAR EXATAMENTE como ta na MAQUINA)

Listar branchs que existe na maquina
$ git branch

Após instalar pacotes de config typescript
usar npx para executar ex: npx tsc --init
usar npn para install

biblioteca usada para criptografar
bcryptjs
instala junto como dependencia da biblioteca bcryptjs
@types/bcryptjs -D

RODA TODAS AS MIGRATIONS EXITENTES
$ npx prisma migrate dev
