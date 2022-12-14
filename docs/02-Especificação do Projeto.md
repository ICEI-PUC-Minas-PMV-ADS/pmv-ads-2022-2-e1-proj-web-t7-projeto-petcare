# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

<table>
    <tbody>
        <tr>
            <td rowspan=3> <img src="/docs/img/Flavia_3.png" width=80% height=80%> <br> Foto de Edward Cisnero em Unsplash </td>
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


<table>
    <tbody>
        <tr>
            <td rowspan=3> <img src="/docs/img/Carlos_2.png" width=80% height=80%> <br> Foto de Bruno Rodrigues em Unsplash </td>
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

<table>
    <tbody>
        <tr>
            <td rowspan=3> <img src="/docs/img/Gilberto_2.png" width=80% height=80%> <br> Foto de Andrei Damian em Unsplash </td>
            <td colspan=2> <h1>Gilberto Costa</h1> </td> 
        </tr>
        <tr>
            <td rowspan=2><h4>Idade:</h4> 25 <br> <h4>Ocupação:</h4> Funcionário que atua na recepção da PetCare.</td>
            <td><strong>Objetivo:</strong><br> <ul><li>Organizar melhor os serviços realizados na PetCare.</li></ul></td>
        </tr>
        <tr>
            <td><strong>Hobbies:</strong> <ul><li>Academia;</li> <li>Games;</li></li></ul></td>
        </tr>
  	    <tr>
            <td colspan="3"><strong>Motivações:</strong><br> <ul><li>São muitos os atendimentos diários, listas atualizadas para os atendimentos médicos e serviços de banho/tosa iriam deixar o ambiente mais organizado.  </li></ul></td></tr>
        <tr>
            <td colspan="3"><strong>Frustrações:</strong> <ul><li>Pessoas reclamando de atraso no atendimento de seus animais, tanto para consultas quanto para banho e tosa.</li></td></tr>
    </tbody>
</table>

<table>
    <tbody>
        <tr>
            <td rowspan=3> <img src="/docs/img/Carrasco_2.png" width=80% height=80%> <br> Foto de Irene Strong em Unsplash </td>
            <td colspan=2> <h1>Bruno Carrasco</h1> </td> 
        </tr>
        <tr>
            <td rowspan=2><h4>Idade:</h4> 28 <br> <h4>Ocupação:</h4> Funcionário responsável pelo serviço de banho e tosa da PetCare.</td>
            <td><strong>Objetivo:</strong><br> <ul><li>Otimizar os serviços de banho e tosa da PetCare.</li></ul></td>
        </tr>
        <tr>
            <td><strong>Hobbies:</strong> <ul><li>Academia;</li> <li>Pesca;</li></li></ul></td>
        </tr>
  	    <tr>
            <td colspan="3"><strong>Motivações:</strong><br> <ul><li>Sente necessidade de uma lista com os horários e serviços de cada pet. </li></ul></td></tr>
        <tr>
            <td colspan="3"><strong>Frustrações:</strong> <ul><li>Tem dificuldades de saber quais cães serão tosados, sempre tem que ir à recepção para perguntar ao Gilberto. </li></td></tr>
    </tbody>
</table>
                                                                                                              


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


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O usuário deverá ser capaz de realizar agendamento on-line para consultas, vacinação <br> e serviços de banho/tosa. | ALTA | 
|RF-002| O usuário deverá ser capaz de consultar o cartão de vacinação de seus pets.   | MÉDIA |
|RF-003| O usuário deverá ser capaz de visualizar e fazer download do <strong>Atestado de Boa Saúde</strong><br> de seus pets quando embarcar.| ALTA | 
|RF-004| O funcionário da loja deverá ser capaz de realizar agendamento de banho e/ou tosa, consultas <br> médicas e vacinação.   | MÉDIA |
|RF-005| O funcionário da loja deverá ser capaz de imprimir a lista de atendimentos programados para<br> o dia. | ALTA | 
|RF-006| O médico deverá ser capaz de visualizar o histórico de consultas dos pets.   | MÉDIA |
|RF-007| O funcionário da loja deverá ser capaz de imprimir o agendamento de consultas, vacinação e <br> serviços de banho/tosa. | ALTA | 
|RF-008| O médico deverá ser capaz de cadastrar as informações obtidas nas consultas, tais como: peso <br> do animal, diagnóstico, receita médica e outros.   | MÉDIA |
|RF-009| O médico deverá ser capaz visualizar o cartão de vacinação dos pets. | ALTA | 
|RF-0010| O médico deverá ser capaz de atualizar o cartão de vacinação dos pets.  | MÉDIA |
|RF-0011| O médico deverá ser capaz de gerar o Atestado de Boa Saúde dos pets.   | MÉDIA |
|RF-0012| O médico deverá ao médico imprimir a receita médica. | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deverá permitir o usuário realizar seu cadastro. | ALTA | 
|RNF-002| O site deverá validar o cadastramento dos usuários. |  ALTA | 
|RNF-003|O site deve disponibilizar a agenda de banho/tosa e consultas para próxima semana. |  ALTA |
|RNF-004| O site deve identificar na base de dados a data da próxima vacinação dos pets. |  ALTA |
|RNF-005| O site deve enviar notificação aos tutores quando se aproximar a data da próxima <br> etapa de vacinação. |  ALTA |
|RNF-006| O sistema deverá gerar a fatura com o custo total dos procedimentos médicos.|  ALTA |

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
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 01/12/2022|
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Front-end.  |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho.  |

