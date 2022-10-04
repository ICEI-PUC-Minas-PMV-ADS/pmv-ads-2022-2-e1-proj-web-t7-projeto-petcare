# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`      |PARA ... `MOTIVO/VALOR`                 |
|--------------------|-----------------------------------------|----------------------------------------|
|Flávia Amaral | Manter seu pet sempre bem cuidado.      | Para manter seu pet sempre saudável.    |
|Flávia Amaral | Manter o esquema vacinal e vermifugação <br> de seus animais em dia.| Evitar que seus pets se contaminem no contato <br> com outros cães ou fezes de animais. |                      
|Flávia Amaral    | Ter segurança que ao viajar não vou ter <br> problemas com a documentação dos meus pets. | Para viajar tranquila. |
|Dr. Carlos Gomes | Prestar bom atendimento aos seus clientes.  | Para aumentar o nível de fidelização dos clientes. |
|Gilberto Costa  | Ter mais controle sobre a programação de <br> serviços diários. | Poder dar mais atenção aos clientes. |
|Bruno Carrasco    | Ter mais controle sobre a programação de serviços diários.   | Poder dar mais atenção aos pets. |


> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O usuário deverá ser capaz de realizar agendamento on-line para consultas, <br> vacinação e serviços de banho/tosa. | ALTA | 
|RF-002| O usuário deverá ser capaz de consultar o cartão de vacinação de seus pets.   | MÉDIA |
|RF-003| O usuário deverá ser capaz de visualizar e fazer download do <strong>Atestado <br> de Boa Saúde</strong> de seus pets quando embarcar.| ALTA | 
|RF-004| O funcionário da loja deverá ser capaz de realizar agendamento de <br>banho e/ou <br> tosa, consultas médicas e vacinação.   | MÉDIA |
|RF-005| O funcionário da loja deverá ser capaz de imprimir a lista de atendimentos <br> programados para o dia. | ALTA | 
|RF-006| O médico deverá ser capaz de visualizar o histórico de consultas dos pets.   | MÉDIA |
|RF-007| O funcionário da loja deverá ser capaz de imprimir o agendamento de <br> consultas, vacinação e serviços de banho/tosa. | ALTA | 
|RF-008| Emitir um relatório de tarefas no mês   | MÉDIA |
|RF-009| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-0010| Emitir um relatório de tarefas no mês   | MÉDIA |
|RF-0011| Emitir um relatório de tarefas no mês   | MÉDIA |
|RF-0012| Emitir um relatório de tarefas no mês   | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
