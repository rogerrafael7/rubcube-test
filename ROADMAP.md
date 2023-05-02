## Sobre o Exercício: Quake log Parser

#### Historia 1 e 3 (dados estatisticos para o admin)
Para essa primeira história e para as histórias seguintes, eu já precisei
me preocupar em como seriam processados os logs a cada requests,
então implementei um module de job que seria o responsável em processar
os arquivos de logs e persistir os dados no banco de dados. Inicialmente eu pensei
em fazer com CronJob, mas depois pensei que seria melhor fazer com Rest mesmo, pq desta
forma fica até mais fácil parametrizar outros arquivos de logs, para possíveis testes.

#### Historia 2 (dados estatisticos para o player)
Com a estrutura da base de dados já montada, agora ficou mais fácil ter que se preocupar apenas
em como agregar os valores que estão na collection de logs do mongodb.
E eu usei as funções de aggregator do proprio MongoDB pra isso.

#### O que você adicionaria se tivesse mais tempo?
- Testes unitários
- Testes de integração, com mais arquivos de logs

#### O que você faria diferente se tivesse mais tempo?
- Melhoraria o parser dos logs, principalmente no quesito performance.
Talvez processando linha a linha em chunks ao invés de tudo ao mesmo tempo
 consumindo desnecessariamente os recursos da máquina

