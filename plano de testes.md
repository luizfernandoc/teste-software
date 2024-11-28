# Plano de Teste - IEEE 829

**Nome do Sistema**: AutomationExercise(E-commerce)

**Link do site**: https://www.automationexercise.com/

*versão 1.0*

   *Autores: Gabriel Denti, Guilherme Jenner, Luiz Fernando e Rodolfo Pedro.*



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

<br/>

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

   - Teste de interface de usuário - Verificar a consistência visual, responsividade e acessibilidade;
   - Teste de performance - Avaliar o tempo de resposta e a capacidade de suportar carga;
   - Teste de carga - Testar o desempenho em condições de carga máxima e identificar o ponto de falha;
   - Teste de stress - Testar o desempenho em condições de carga máxima e identificar o ponto de falha;
   - Teste de segurança e controle de acesso - Garantir a conformidade com requisitos de segurança, incluindo LGPD;
   - Teste de instalação - Verificar se o sistema pode ser instalado e configurado corretamente;
   - Teste de Funcionalidade -Testar se cada funcionalidade cumpre o comportamento esperado;
   - Teste de Integração - Validar se os módulos e componentes interagem de forma correta.
<br/>

### 3.1 - Teste de Interface de Usuário

<br/>
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

<br/>
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

<br/>
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

<br/>
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

<br/>
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

<br/>
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

<br/>
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

<br/>
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

## 4. Casos de teste - Automatizados

### 4.1 Introdução

Abaixo os cenários e casos de teste necessários para validar os requisitos funcionais e não funcionais do sistema de e-commerce. Cada requisito é associado a cenários específicos que serão testados para garantir que o sistema opere conforme o esperado.

---

### 4.2 Estrutura de Caso de Teste

| Campo               | Descrição                                                              |
|---------------------|------------------------------------------------------------------------|
| **Requisito**       | O requisito do sistema que está sendo validado.                       |
| **Cenário de Teste**| Uma descrição da situação que será validada.                          |
| **ID do Caso**      | Identificador único do caso de teste.                                  |
| **Objetivo**        | O objetivo do caso de teste.                                           |
| **Passos**          | Passos para executar o caso de teste.                                  |
| **Resultado Esperado** | O comportamento esperado do sistema após os passos serem executados.|

---

### 4.3 Requisitos e Casos de Teste

#### 4.3.1 Requisito Funcional 1 (RF1): Cadastro de Cliente

##### Cenário 1: Cadastro com informações válidas

| Campo               | Descrição                                                              |
|---------------------|------------------------------------------------------------------------|
| **Requisito**       | RF1                                                                   |
| **Cenário de Teste**| O usuário realiza um cadastro com informações válidas.                 |
| **ID do Caso**      | CT-RF1-001                                                            |
| **Objetivo**        | Validar que o sistema aceita cadastros com dados corretos.             |
| **Passos**          | 1. Acessar a página de cadastro.<br>2. Preencher nome, e-mail e senha válidos.<br>3. Confirmar o cadastro. |
| **Resultado Esperado** | O sistema exibe uma mensagem de sucesso e registra o cliente.      |

---

#### 4.3.2 Requisito Funcional 2 (RF2): Login de Cliente

##### Cenário 1: Login com credenciais válidas

| Campo               | Descrição                                                              |
|---------------------|------------------------------------------------------------------------|
| **Requisito**       | RF2                                                                   |
| **Cenário de Teste**| O cliente realiza login com e-mail e senha corretos.                   |
| **ID do Caso**      | CT-RF2-001                                                            |
| **Objetivo**        | Validar que o sistema permite o acesso com credenciais válidas.        |
| **Passos**          | 1. Acessar a página de login.<br>2. Inserir e-mail e senha válidos.<br>3. Confirmar o login. |
| **Resultado Esperado** | O sistema redireciona o cliente para a página inicial logado.       |

---

#### 4.3.3 Requisito Funcional 3 (RF3): Adicionar Produto ao Carrinho

##### Cenário 1: Adicionar produto disponível

| Campo               | Descrição                                                              |
|---------------------|------------------------------------------------------------------------|
| **Requisito**       | RF3                                                                   |
| **Cenário de Teste**| O cliente adiciona um produto disponível ao carrinho.                  |
| **ID do Caso**      | CT-RF3-001                                                            |
| **Objetivo**        | Validar que o produto é adicionado corretamente ao carrinho.           |
| **Passos**          | 1. Navegar até a página de produto.<br>2. Selecionar um produto.<br>3. Clicar em "Adicionar ao Carrinho". |
| **Resultado Esperado** | O produto é exibido no carrinho com a quantidade e preço corretos.  |

---

### 4.3.4 Requisito Funcional 4 (RF4): Finalizar Compra

##### Cenário 1: Finalizar compra com produtos disponíveis

| Campo               | Descrição                                                              |
|---------------------|------------------------------------------------------------------------|
| **Requisito**       | RF4                                                                   |
| **Cenário de Teste**| O cliente finaliza a compra com todos os produtos disponíveis no carrinho. |
| **ID do Caso**      | CT-RF4-001                                                            |
| **Objetivo**        | Validar que o sistema processa corretamente a finalização do pedido quando os produtos estão disponíveis. |
| **Passos**          | 1. Adicionar produtos ao carrinho.<br>2. Ir para a página de checkout.<br>3. Preencher as informações obrigatórias (endereço e método de pagamento).<br>4. Confirmar a compra. |
| **Resultado Esperado** | O sistema gera um número de pedido, exibe mensagem de sucesso e atualiza o estoque. |

---

### 4.3.5 Requisito Funcional 5 (RF5): Pagamento

##### Cenário 1: Pagamento com cartão de crédito válido

| Campo               | Descrição                                                              |
|---------------------|------------------------------------------------------------------------|
| **Requisito**       | RF5                                                                   |
| **Cenário de Teste**| O cliente realiza o pagamento com um cartão de crédito válido.         |
| **ID do Caso**      | CT-RF5-001                                                            |
| **Objetivo**        | Validar que o sistema processa corretamente o pagamento com um cartão válido. |
| **Passos**          | 1. Ir para a página de checkout.<br>2. Selecionar pagamento por cartão de crédito.<br>3. Inserir informações válidas do cartão (número, validade, CVV).<br>4. Confirmar o pagamento. |
| **Resultado Esperado** | O sistema aprova o pagamento, exibe mensagem de sucesso e gera o pedido. |

##### Cenário 2: Pagamento recusado por cartão inválido

| Campo               | Descrição                                                              |
|---------------------|------------------------------------------------------------------------|
| **Requisito**       | RF5                                                                   |
| **Cenário de Teste**| O cliente tenta realizar pagamento com um cartão inválido.             |
| **ID do Caso**      | CT-RF5-002                                                            |
| **Objetivo**        | Validar que o sistema rejeita o pagamento e exibe mensagem apropriada para cartões inválidos. |
| **Passos**          | 1. Ir para a página de checkout.<br>2. Selecionar pagamento por cartão de crédito.<br>3. Inserir informações inválidas do cartão (número incorreto ou expirado).<br>4. Confirmar o pagamento. |
| **Resultado Esperado** | O sistema exibe mensagem de erro indicando que o pagamento foi recusado e permite ao cliente tentar novamente. |

## 5. Casos de teste - Manuais

### 5.1 Introdução

Abaixo os cenários e casos de teste necessários para validar os requisitos funcionais e não funcionais do sistema de e-commerce. Cada requisito é associado a cenários específicos que serão testados para garantir que o sistema opere conforme o esperado.

---

### 5.2 Estrutura de Caso de Teste

| Campo               | Descrição                                                              |
|---------------------|------------------------------------------------------------------------|
| **Requisito**       | O requisito do sistema que está sendo validado.                       |
| **Cenário de Teste**| Uma descrição da situação que será validada.                          |
| **ID do Caso**      | Identificador único do caso de teste.                                  |
| **Objetivo**        | O objetivo do caso de teste.                                           |
| **Passos**          | Passos para executar o caso de teste.                                  |
| **Resultado Esperado** | O comportamento esperado do sistema após os passos serem executados.|

---

#### Requisito Funcional 2 (RF2): Login de Cliente

##### Cenário 1: Login com Credenciais Inválidas

| Campo               | Descrição                                                              |
|---------------------|------------------------------------------------------------------------|
| **Requisito**       | id UC2: Login de Cliente                                               |
| **Cenário de Teste**| O cliente tenta realizar login com e-mail ou senha inválidos.          |
| **ID do Caso**      | CT-UC2-002                                                            |
| **Objetivo**        | Validar que o sistema exibe mensagem de erro apropriada para login com credenciais inválidas. |
| **Passos**          | 1. Acessar o site: `https://www.automationexercise.com`.<br>2. Clicar em "Signup / Login".<br>3. Preencher o campo "Email Address" com um e-mail inválido ou não registrado.<br>4. Preencher o campo "Password" com uma senha incorreta.<br>5. Clicar em "Login". |
| **Resultado Esperado** | O sistema exibe a mensagem de erro "Your email or password is incorrect!" e o login não é efetuado. |

---

####  Requisito Funcional 1 (RF1): Cadastro de Cliente

##### Cenário 2: Cadastro com Informações Inválidas

| Campo               | Descrição                                                              |
|---------------------|------------------------------------------------------------------------|
| **Requisito**       | id UC1: Cadastro de Cliente                                            |
| **Cenário de Teste**| O cliente tenta realizar cadastro com informações inválidas (e-mail já registrado ou campos obrigatórios vazios). |
| **ID do Caso**      | CT-UC1-002                                                            |
| **Objetivo**        | Validar que o sistema exibe mensagens de erro apropriadas ao tentar cadastrar informações inválidas. |
| **Passos**          | 1. Acessar o site: `https://www.automationexercise.com`.<br>2. Clicar em "Signup / Login".<br>3. Preencher o campo "Name" com um nome válido.<br>4. Preencher o campo "Email Address" com um e-mail já registrado no sistema.<br>5. Clicar em "Signup". |
| **Resultado Esperado** | O sistema exibe a mensagem de erro "Email Address already exists!" e o cadastro não é realizado. |

---


## 6 - Recursos
   
   Esta seção deve descrever os recursos humanos, de ambiente de teste (hardware e software) e de ferramentas de automatização de testes necessários para execução dos testes que devem ser descritos nas subseções que seguem.

### 6.1 - Ambiente de teste - Software e Hardware

   Software: Sistema operacional Windows 10, Linux, navegadores Chrome e Firefox (últimas versões).<br/>

   Hardware: Processador Intel i5 ou superior, 8GB de RAM, conexão à internet estável.<br/>

   Rede: Simulação de diferentes condições de rede (Wi-Fi, 3G, 4G) para avaliar a experiência em cenários reais.<br/>


### 6.2 - Ferramenta de teste

   Selenium: Para automação dos testes de interface.<br/>

   JMeter: Para testes de desempenho e carga.<br/>

   OWASP ZAP: Para testes de segurança e verificação de vulnerabilidades.<br/>


## 7.0 - Template de Reporte de Defeitos

  Este template serve para facilitar o registro de bugs, garantindo que todas as informações essenciais estejam documentadas de forma clara. Use os campos abaixo para descrever o problema em detalhes:
  
---

  Nome: Reporte de Defeitos <br/>
  
  Sobre: Crie um relatório para nos ajudar a melhora<br/>
  
  Título do Bug: ''<br/>
  
  Labels: ''<br/>
  
  Responsáveis: ''<br/>

---

### 7.1 Informações Básicas

- **Data do Relato:** [Data em que o bug foi reportado]
- **Relatado por:** [Nome do responsável por relatar o bug]
- **Versão do Sistema:** [Versão específica do sistema ou build em que o bug foi encontrado]
- **Prioridade:** [Alta, Média, Baixa]
- **Severidade:** [Crítica, Alta, Média, Baixa]


### 7.2 Descrição do Bug

**Descrição Completa**<br/>

  [Descreva o problema de forma detalhada, incluindo o que está acontecendo e por que ele é considerado um problema.]

**Para Reproduzir**<br/>

  Passos para reproduzir o comportamento:
  
  1. Vá para '...'
  2. Clique em '....'
  3. Role até '....'
  4. Veja o erro

**Resultado Esperado**<br/>

  [Explique qual deveria ser o comportamento correto do sistema.]

**Resultado Atual**<br/>

  [Explique o comportamento atual observado no sistema.]

### 7.3 Anexos

**Capturas de tela**<br/>

  [Link ou anexar imagem que mostra o problema, se aplicável]

**Vídeos**<br/>

  [Link ou anexar vídeo que reproduz o problema, se aplicável]

**Logs de Erro**

  [Logs ou mensagens de erro do sistema relacionados, se aplicável]

### 7.4 Ambiente de Teste

**Desktop (complete as seguintes informações):** <br/>

  - Sistema Operacional: [ex. iOS]
  - Navegador [ex. Chrome, Safari]
  - Versão [ex. 22]
  - Rede:[Wi-Fi, 3G, 4G, etc. (se relevante)]

**Smartphone (complete as seguintes informações):** <br/>

  - Dispositivo: [ex. iPhone6]
  - Sistema Operacional: [ex. iOS8.1]
  - Navegador [ex. navegador padrão, Safari]
  - Versão [ex. 22]
  - Rede:[Wi-Fi, 3G, 4G, etc. (se relevante)]


### 7.6 Status do Bug

- **Status Atual:**
  - [ ] Novo
  - [ ] Em Análise
  - [ ] Em Progresso
  - [ ] Resolvido
  - [ ] Não Reproduzível
  - [ ] Rejeitado

- **Data de Resolução:** [Data em que o bug foi resolvido]
- **Versão de Correção:** [Versão do sistema onde a correção foi aplicada]

---
## 8. Critérios de Conclusão dos Testes

- **Critério de Conclusão**: O teste será considerado completo se:
  - 100% dos casos de uso e requisitos críticos forem testados e aprovados.
  - Nenhum erro de alta prioridade permanecer pendente.
 
## 9. Cronograma de Testes

| Atividade           | Data de Início | Data de Término | Responsável       |
|---------------------|----------------|-----------------|-------------------|
| Teste de Interface  | dd/mm/aaaa     | dd/mm/aaaa      | Gabriel Denti     |
| Teste de Integração | dd/mm/aaaa     | dd/mm/aaaa      | Guilherme Jenner  |
| Teste de Segurança  | dd/mm/aaaa     | dd/mm/aaaa      | Luiz Fernando     |


## 10 - Cronograma

Tipo de teste      | Duração | Data de Início | Data de Término
-------------------|---------|----------------|-----------------
Planejamento       |  2 dias | 12/11/2024     | 14/11/2024
Projeto de Teste   |  4 dias | 18/11/2024     | 21/11/2024
Implementação      |         | dd/mm/aaaa     | dd/mm/aaaa
Execução de Testes |         | dd/mm/aaaa     | dd/mm/aaaa
Avaliação          |         | dd/mm/aaaa     | dd/mm/aaaa
