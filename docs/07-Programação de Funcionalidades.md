# Programação de Funcionalidades

Para realização de agendamento de serviços foi implementada o formulário a seguir, onde o usuário seleciona o serviço desejado, preenche o formulário com seus dados e de seu animal e seleciona o dia e horario de sua conveniência. Desta maneira é concluido o agendamento.

<img src="/docs/img/agendamento.png" width=40% height=30%>

Os dados deste formulário permitem a inserção do seguinte objeto JSON, na base de dados:

    {
    "finalidade":"banho",
    "dia":"2022-12-06",
    "hora":"10h00",
    "nomeTutor":"Beto Lopes",
    "nomePet":"Batata",
    "numTelefone":"3199999-2222",
    "email": "bLopes@yahoo.com"
    },


O cadastro dos pets é realizado durante a consulta pelo profissional da saúde. No formlário abaixo são inseridas a identificação do tutor, nome e data de nascimento do pet.Os dados deste formulário permitem a inserção do seguinte objeto JSON, na base de dados:

<img src="/docs/img/cadastroPet.png" width=40% height=30%>

Os dados deste formulário permitem a inserção do seguinte objeto JSON, na base de dados:

    {
    "nomeTutor":"Beto Lopes",
    "numTelefone":"3199999-2222",
    "email": "bLopes@yahoo.com",
    "nomePet":"Batata",
    "dataNascimento":"2021-12-02",
    "identificador":"Beto Lopes-Batata"
    },


O histórico dos atendimentos do animal pode ser consultado pelo profissional da saúde atraves do formulário a seguir. 

<img src="/docs/img/dadosPet.png" width=40% height=30%>


Os dados deste formulário permitem a inserção do seguinte objeto JSON, na base de dados:

    {
    "identificador":"Beto Lopes-Batata",
    "pesoPet":"6",
    "alturaPet":"35",
    "comprimentoPet":"45",
    "relatosExameClinico":"Perda de pêlo e falt de apetite",
    "diagnosticoReceita":"Anemia. Utilizar ração específica para raça e idade. Utilizar suplemento alimentar",
    "data":"2022-03-03",
    "nomeVacina":"",
    "doseVacina":"",
    "nomeLaboratorio":"",
    "numLote":"",
    "dataValidade":"",
    "dataVacinacao":""
    }

<!--
<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm) -->
