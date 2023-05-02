### Teste Exercício: Quake log Parser


#### Como testar e rodar a aplicação:
No terminal deve ser executado o comando `docker-compose up -d`,
após a instalação das dependências e a criação dos containers,
o servidor estará disponível em `http://localhost:3000/`.
__Opcional__: caso queira acessar o banco de dados, segue as credenciais de acesso:
> mongodb://ruber:123@localhost:27018/rubcube_db

##### São 3 endpoints disponíveis:
- `GET /player/ranking`: retorna o ranking de jogadores por jogo; 
  - Suporta o parâmetro opcional `games` para filtrar por jogo, ex: `GET /player/ranking?games=["Game_1","Game_2"]`;
- `GET /admin/stats/games`: retorna as estatísticas dos jogos;
  - Suporta o parâmetro opcional `games` para filtrar por jogo, ex: `GET /admin/stats/games?games=["Game_1","Game_2"]`;
- `POST /job/process-file`: processa o arquivo de log parametrizado, faz o parse, estrutura os dados e salva no banco de dados para sem usados posteriormente nos outros endpoints;

É necessário o uso de uma ferramenta de teste de API, como o Postman ou Insomnia para testar os endpoints.
Segue arquivos de configuração destas ferramentas, já contendo as APIs de cada endpoint:
- Para o Insomnia : [apis-insomnia.json](./docs/insomnia.json)
- Para o Postman : [apis-postman.json](./docs/RubCube.postman_collection.json)
- Ou, existe a opção de testar ou copiar os consumos cURL que estão no arquivo [apis.http](./docs/apis.http)

> O arquivo de log deve ser enviado no formato `multipart/form-data` com o nome `file`. Certifique-se que ele está corratamente anexado na sua aplicação de teste de APIs.

#### Pontos sobre o teste:
- Eu segui na abordagem de procesar o arquivo de logs e salvar no banco de dados para serem processados depois, porém sendo salvo já estruturado. Acredito que essa abordagem seja mais performática, pois não é necessário processar o arquivo de log a cada requisição, e sim apenas uma vez, e depois consumir os dados já estruturados no banco de dados. A outra opção seria manter em memória, mas acredito que não seja uma boa prática, pois o arquivo de log pode ser muito grande e poderia acabar consumindo muita memória.


#### Prints e Evidências

- Print do endpoint que retorna as estadísticas dos jogos filtrando pela Game_2 e Game_3:
![Print do endpoint que retorna as estadísticas dos jogos FILTRADO](./docs/admin_stats_filtered.png)

- Print do endpoint que retorna as estadísticas de todos os jogos:
![Print do endpoint que retorna as estadísticas dos jogos](./docs/admin_stats.png)

- Print do endpoint que retorna o ranking de jogadores filtrando pela Game_2 e Game_3:
![Print do endpoint que retorna o ranking de jogadores FILTRADO](./docs/ranking_filtered.png)

- Print do endpoint que retorna o ranking de todos os jogadores:
![Print do endpoint que retorna o ranking de jogadores](./docs/ranking.png)

- Print do MongoDB com os dados salvos:
- ![Print da_collection_logs](./docs/mongodb_logs.png)
