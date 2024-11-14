# Plano de Teste

**E-commerce**


*versão 1.0*

   *Autores: Gabriel Denti, Guilherme Jenner, Luiz Fernando e Rodolfo Pedro.*



## Histórico das alterações

   Data    | Versão |    Descrição   | Autor(a)
-----------|--------|----------------|-----------------
12/11/2024 |  1.0   | Release incial | Luiz Fernando Contarato



## 1 - Introdução

   Este documento descreve os requisitos a testar, os  tipos de testes definidos para cada iteração, os recursos de hardware e software a serem empregados e o cronograma dos testes ao longo do projeto. As seções referentes aos requisitos, recursos e cronograma servem para permitir ao gerente do projeto acompanhar a evolução dos testes.

   Com esse documento, você deve:
      - Identificar informações de projeto existentes e os componentes de software que devem ser testados.
      - Listar os Requisitos a testar.
      - Recomendar e descrever as estratégias de teste a serem empregadas.
      - Identificar os recursos necessários e prover uma estimativa dos esforços de teste.
      - Listar os elementos resultantes do projeto de testes.


### 1.1 Propósito

   O objetivo deste Plano de Teste é definir as diretrizes, metodologias e recursos necessários para garantir que a aplicação de e-commerce atenda aos requisitos funcionais e não-funcionais especificados.


### 1.2 Escopo


Este plano abrange o teste funcional e não-funcional das principais funcionalidades do site de e-commerce, incluindo:

   - Cadastro e login de clientes
   - Busca e navegação de produtos
   - Adição de produtos ao carrinho de compras
   - Processo de checkout e pagamento
   - Persistência e segurança de dados dos clientes


## 2 - Requisitos a Testar

   Esta seção deve conter os casos de uso e requisitos não funcionais identificados como objetos dos testes ao longo do desenvolvimento do projeto.
Como, em geral, os requisitos a testar são obtidos diretamente dos requisitos do sistema, esta seção é concebida como opcional. Assim sendo, sempre que novos requisitos a testar, que não constem como requisitos do sistema, forem identificados ou, simplesmente, por questões de organização e clareza, esta seção deve ser preenchida.
Dependendo das informações disponíveis, essa seção pode começar a ser preenchida já nas primeiras iterações do ciclo de vida a partir do documento de requisitos.

   Caso seja necessário, liste aqui os requisitos a testar subdivididos em casos de uso e requisitos não-funcionais.



### Casos de uso:


| Identificador do caso de uso | Nome do caso de uso                |
|------------------------------|------------------------------------|
| id UC1                       | Cadastro de Cliente                |
| id UC2                       | Login de Cliente                   |
| id UC3                       | Adicionar Produto ao Carrinho      |
| id UC4                       | Finalizar Compra                   |
| id UC5                       | Pagamento                          |
| id UC6                       | Consultar Histórico de Compras     |
| id UC7                       | Gestão de Endereços de Entrega     |
| id UC8                       | Aplicação de Cupons de Desconto    |
| id UC9                       | Avaliação e Feedback de Produtos   |
| id UC10                      | Atualização de Dados Cadastrais    |



### Requisitos não-funcionais:


| Identificador do requisito   | Nome do requisito                                                  | Casos de uso relacionados                                             |
|------------------------------|--------------------------------------------------------------------|---------------------------------------------------------------------  |
| id RNF1                      | Tempo de resposta das páginas inferior a 2 segundos                | id UC1, UC2, UC3, UC4, UC5, UC6, UC7, UC8, UC9, UC10                  |
| id RNF2                      | Capacidade de suporte a 100 usuários simultâneos                   | id UC1, UC2, UC3, UC4, UC5, UC6, UC7, UC8, UC9, UC10                  |
| id RNF3                      | Segurança dos dados do cliente (LGPD compliance)                   | id UC1, UC2, UC3, UC4, UC5, UC7, UC8, UC10                            |
| id RNF4                      | Compatibilidade com navegadores Chrome e Firefox                   | id UC1, UC2, UC3, UC4, UC5, UC6, UC7, UC8, UC9, UC10                  |
| id RNF5                      | Disponibilidade de 99,9% no horário comercial                      | id UC1, UC2, UC3, UC4, UC5, UC6, UC7, UC8, UC9, UC10                  |
| id RNF6                      | Suporte a múltiplos idiomas (Português e Inglês)                   | id UC1, UC2, UC3, UC4, UC5, UC6, UC7, UC8, UC9, UC10                  |
| id RNF7                      | Carregamento de imagens em alta resolução em menos de 3 segundos   | id UC3, UC9                                                           |
| id RNF8                      | Integração com métodos de pagamento locais (PIX e boleto)          | id UC5                                                                |
| id RNF9                      | Navegação acessível para pessoas com deficiência                   | id UC1, UC2, UC3, UC4, UC5, UC6, UC7, UC8, UC9, UC10                  |
| id RNF10                     | Resposta de consulta de estoque em até 1 segundo                   | id UC3, UC4, UC6                                                      |



## 3 - Tipos de teste

   Esta seção deve conter os tipos de testes escolhidos para cada iteração do projeto.
   Pode-se definir inicialmente apenas os tipos de testes que serão usadas na próxima iteração, mas é possível também já registrar eventuais tipos de teste que se espera utilizar nas demais iterações. 
   
   Com base no guia de testes, indique os tipos de testes que melhor se adéquam aos requisitos, tipo da aplicação e seus recursos disponíveis e, caso necessário complemente ou forneça mais detalhes da técnica e dos critérios de completude sugeridos no guia para cada tipo de teste indicado.

   - Teste de interface de usuário;
   - Teste de performance;
   - Teste de carga;
   - Teste de stress;
   - Teste de segurança e controle de acesso;
   - Teste de instalação;
   - Teste de Funcionalidade;
   - Teste de Integração.


### 3.1 - Teste de Interface de Usuário 

   Para teste de funcionalidade.
   Aqui deve-se verificar se cada classe retorna o esperado.
   Se possível usar teste automatizado.

<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Validar a interação entre o usuário e o sistema, garantindo que todos os elementos da interface respondam conforme esperado.
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração ( )
        </th>
        <th>
            Sistema (x)
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação (x)
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca ( )
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Rodolfo Pedro
        </th>
    </tr>
</table>
<br/>



### 3.2 - Teste de Persistência de Dados

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Verificar se dados são mantidos após súbito desligamento do programa .
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração ( )
        </th>
        <th>
            Sistema (x)
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca ( )
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Gabriel Denti
        </th>
    </tr>
</table>
<br/>



### 3.3 - Teste de Integração

<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Validar a integração entre os diversos módulos ou componentes do sistema.
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração (x)
        </th>
        <th>
            Sistema ( )
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca (x)
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Guilherme Jenner
        </th>
    </tr>
</table>
<br/>



### 3.4 - Teste de Tempo de Resposta

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Verificar o tempo de resposta do sistema, garantindo que todas as páginas e funcionalidades carreguem em tempo adequado, conforme os requisitos de desempenho. O objetivo é assegurar que o sistema não sofra atrasos significativos durante as interações com o usuário.
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            ( ) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração ( )
        </th>
        <th>
            Sistema (x)
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca (x)
        </th>
        <th colspan="2">
            Caixa preta ( )
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Luiz Fernando
        </th>
    </tr>
</table>
<br/>



### 3.5 - Teste de Performance

<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Verificar a resposta do sistema sob carga normal e identificar gargalos de desempenho.
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração (x)
        </th>
        <th>
            Sistema (x)
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca ( )
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Rodolfo Pedro
        </th>
    </tr>
</table>
<br/>



### 3.6 Teste de Funcionalidade

<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Verificar se todas as funcionalidades do sistema estão operando de acordo com as especificações.
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração (x)
        </th>
        <th>
            Sistema (x)
        </th>
        <th>
            Unidade (x)
        </th>
        <th>
            Aceitação (x)
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca (x)
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Gabriel Denti
        </th>
    </tr>
</table>
<br/>



### 3.7 Teste de Instalação

<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Validar a instalação correta do sistema, sem erros de configuração ou falhas no processo de instalação.
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração ( )
        </th>
        <th>
            Sistema (x)
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação (x)
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca ( )
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Rodolfo Pedro
        </th>
    </tr>
</table>
<br/>



### 3.8 Teste de Segurança e Controle de Acesso

<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Garantir que o sistema esteja seguro e que os controles de acesso estejam funcionando corretamente.
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração (x)
        </th>
        <th>
            Sistema (x)
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca (x)
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Guilherme Jenner
        </th>
    </tr>
</table>
<br/>



### 3.8 Teste de Stress

<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Testar a robustez do sistema e identificar os limites máximos de operação, colocando o sistema em condições extremas.
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração (x)
        </th>
        <th>
            Sistema (x)
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca ( )
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Luiz Fernando
        </th>
    </tr>
</table>
<br/>



### 3.9 Teste de Carga

<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Validar o comportamento do sistema com grande volume de usuários ou dados para garantir que ele não falhe sob pressão.
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração (x)
        </th>
        <th>
            Sistema (x)
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca ( )
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Guilherme Jenner
        </th>
    </tr>
</table>
<br/>



## 4 - Recursos
   
   Esta seção deve descrever os recursos humanos, de ambiente de teste (hardware e software) e de ferramentas de automatização de testes necessários para execução dos testes que devem ser descritos nas subseções que seguem.

### 4.1 - Ambiente de teste - Software e Hardware

   Software: Sistema operacional Windows 10, Linux, navegadores Chrome e Firefox (últimas versões).
   Hardware: Processador Intel i5 ou superior, 8GB de RAM, conexão à internet estável.

### 4.2 - Ferramenta de teste

   Selenium: Para automação dos testes de interface.
   JMeter: Para testes de desempenho e carga.
   OWASP ZAP: Para testes de segurança e verificação de vulnerabilidades.

## 5 - Cronograma

Tipo de teste      | Duração | Data de Início | Data de Término
-------------------|---------|----------------|-----------------
Planejamento       |  2 dias | 12/11/2024     | 14/11/2024
Projeto de Teste   |         | dd/mm/aaaa     | dd/mm/aaaa
Implementação      |         | dd/mm/aaaa     | dd/mm/aaaa
Execução de Testes |         | dd/mm/aaaa     | dd/mm/aaaa
Avaliação          |         | dd/mm/aaaa     | dd/mm/aaaa
