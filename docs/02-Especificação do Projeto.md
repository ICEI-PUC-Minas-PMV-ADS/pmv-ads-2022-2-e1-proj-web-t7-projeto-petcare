# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

<table>
    <tbody>
        <tr>
            <td rowspan=3> <img src="/docs/img/Flavia_3.png" width=100% height=100%> <br> Foto de Edward Cisnero em Unsplash </td>
            <td colspan=2> <h1>Flávia Amaral</h1> </td> 
        </tr>
        <tr>
            <td rowspan=2><h4>Idade:</h4> 52 <br> <h4>Ocupação:</h4> Advogada, é sócia de um escritório que atua na área de direto tributário. Tem dois cachorros da raça Yorkshire. <br>Por causa da alta demanda de serviço no escritório tem pouco tempo para outras coisas importantes em sua vida.</td>
            <td><strong>Objetivo:</strong><br> <ul><li>Cuidar da saúde e bem-estar<br> de seus animais.</li></ul></td>
        </tr>
        <tr>
            <td><strong>Hobbies:</strong> <ul><li>Academia;</li> <li>Fazer ginastica;</li></li></ul></td>
        </tr>
  	    <tr>
            <td colspan="3"><strong>Motivações:</strong><br> <ul><li>Prefere resolver todas as suas necessidades por meio de smartphone, no momento que puder;</li> <li>Poder realizar o agendamento de consultas e banho/tosa para meus pets em qualquer horário do dia;</li> <li>Quando embarcar ter a segurança de saber que o Atestado de Boa Saúde dos meus animais e as informações sobre as vacinas estarão disponíveis no site da clínica.</li></ul></td></tr>
       <tr>
            <td colspan="3"><strong>Frustrações:</strong> <ul><li>Semanalmente precisa ligar para a clínica veterinária e solicitar horário de banho para seus dois animais.</li><li> Não conseguir lembrar do calendário de vacinação dos pets.</li></td></tr>
    </tbody>
</table>


![Flavia](/docs/img/Flavia.jpg)

<table>
    <tbody>
        <tr>
            <td rowspan=3> <img src="/docs/img/Carlos_2.png" width=100% height=100%> <br> Foto de Bruno Rodrigues em Unsplash </td>
            <td colspan=2> <h1>Dr. Carlos Gomes</h1> </td> 
        </tr>
        <tr>
            <td rowspan=2><h4>Idade:</h4> 42 <br> <h4>Ocupação:</h4> Um dos médicos veterinários sócio da PetCare. Também faz atendimento clínico.</td>
            <td><strong>Objetivo:</strong><br> <ul><li>Realizar bons atendimentos médicos;</li><li>Aumentar o número de clientes da clínica;</li></ul></td>
        </tr>
        <tr>
            <td><strong>Hobbies:</strong> <ul><li>Academia;</li> <li>Yoga;</li></li></ul></td>
        </tr>
  	    <tr>
            <td colspan="3"><strong>Motivações:</strong><br> <ul><li>A qualidade prestada pelo sistema de atendimento vai aumentar a fidelização dos clientes na clínica; </li></ul></td></tr>
        <tr>
            <td colspan="3"><strong>Frustrações:</strong> <ul><li>Muitas vezes quando atendo um animal não tenho informações disponíveis sobre o histórico de saúde dele, nem dos atendimentos anteriores recebidos por ele aqui na clínica.</li></td></tr>
    </tbody>
</table>


![Carlos](/docs/img/Carlos.jpg)
![Gilberto](/docs/img/Gilberto.jpg)
![Carrasco](/docs/img/Carrasco.jpg)                                                                                                                |


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`      |PARA ... `MOTIVO/VALOR`                 |
|--------------------|-----------------------------------------|----------------------------------------|
|Flávia Amaral | Manter seu pet sempre bem cuidado.      | Para manter seu pet sempre saudável.    |
|Flávia Amaral | Manter o esquema vacinal e vermifugação <br> de seus animais em dia.| Evitar que seus pets se contaminem no contato <br> com outros cães ou fezes de animais. |                      
|Flávia Amaral    | Ter segurança que ao viajar não vou ter <br> problemas com a documentação dos meus pets. | Para viajar tranquila. |
|Dr. Carlos Gomes | Prestar bom atendimento aos seus clientes.  | Para aumentar o nível de fidelização dos clientes. |
|Gilberto Costa  | Ter mais controle sobre a programação de <br> serviços diários. | Poder dar mais atenção aos clientes. |
|Bruno Carrasco    | Ter mais controle sobre a programação de <br> serviços diários.   | Poder dar mais atenção aos pets. |


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
|RF-004| O funcionário da loja deverá ser capaz de realizar agendamento de <br>banho e/ou tosa, consultas médicas e vacinação.   | MÉDIA |
|RF-005| O funcionário da loja deverá ser capaz de imprimir a lista de atendimentos <br> programados para o dia. | ALTA | 
|RF-006| O médico deverá ser capaz de visualizar o histórico de consultas dos pets.   | MÉDIA |
|RF-007| O funcionário da loja deverá ser capaz de imprimir o agendamento de <br> consultas, vacinação e serviços de banho/tosa. | ALTA | 
|RF-008| O médico deverá ser capaz de cadastrar as informações obtidas nas consultas, <br> tais como: peso do animal, diagnóstico, receita médica e outros.   | MÉDIA |
|RF-009| O médico deverá ser capaz visualizar o cartão de vacinação dos pets. | ALTA | 
|RF-0010| O médico deverá ser capaz de atualizar o cartão de vacinação dos pets.  | MÉDIA |
|RF-0011| O médico deverá ser capaz de gerar o Atestado de Boa Saúde dos pets.   | MÉDIA |
|RF-0012| O médico deverá ao médico imprimir a receita médica. | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deverá permitir o usuário realizar seu cadastro. | MÉDIA | 
|RNF-002| O site deverá validar o cadastramento dos usuários. |  BAIXA | 
|RNF-003|O site deve disponibilizar a agenda de banho/tosa e <br>consultas para próxima semana. |  BAIXA |
|RNF-004| O site deve identificar na base de dados a data da <br>próxima vacinação dos pets. |  BAIXA |
|RNF-005| O site deve enviar notificação aos tutores quando se <br> aproximar a data da próxima etapa de vacinação. |  BAIXA |
|RNF-006| O sistema deverá gerar a fatura com o custo total dos <br> procedimentos médicos.|  BAIXA |

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
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar <br>a data de 01/12/2022|
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Front-end.  |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho.  |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
