# Arquitetura da Solução 

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de componentes

O diagrama de componentes para esta aplicação consiste nas paginas Web e na unidade de armazenamento local (localStorage) do browse.


<img src="/docs/img/locaStorage.png" width=80% height=50%>

Imagem: https://learninfinity.info/utilizing-browser-local-storage-for-client-site-script-in-any-web-application/

A solução implementada conta com os seguintes módulos:

- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Usuário**  tutores interessados em realizar agendamento de serviços para seus Pets;
     - **Clínica/Funcionário** - realiza o agendamento de serviços; 
     - **Clínica/Médico** - consulta histórico médico dos animais e registra consultas e vacinação;



## Tecnologias Utilizadas

Serão utilizados HTML, CSS e JavaScript para desenvolvimento das páginas web e funcionalidades do sistema.


## Hospedagem

O projeto em desenvolvimento utiliza a plataforma GitHub como ambiente de hospedagem

