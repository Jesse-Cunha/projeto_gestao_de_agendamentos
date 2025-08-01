# Testes

Nesta parte da documentação do projeto, serão apresentados dois tipos de teste: os testes de software, realizados pela equipe de desenvolvimento, e os testes de usabilidade, realizados por sujeitos não pertencentes à equipe, a fim de simular a interação de um potencial cliente com a aplicação.

# Teste de Software

Nesta seção serão apresentados os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Foram definidos sete casos de teste, cada um correspondente a uma funcionalidade da aplicação desenvolvida. 

**Caso de Teste** | **CT01 - Criar conta**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://pmv-si-2024-2-pe1-t2-t2-gp01.vercel.app/index.html <br> 2) Clique em "Cadastro" <br> 3) Preencha todos os campos do formulário <br> 4) Clique no botão "Cadastrar"
**Requisitos associados** | RF-001
**Resultado esperado** | Receber uma mensagem de confirmação e ser redirecionado para a tela de login
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Login no sistema**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://pmv-si-2024-2-pe1-t2-t2-gp01.vercel.app/index.html  <br> 2) Clique em "Login" <br> 3) Preencha todos os campos do formulário <br> 4) Clique no botão "Entrar"
**Requisitos associados** | RF-002
**Resultado esperado** | Receber uma mensagem de confirmação e ser redirecionado para a tela de agendamentos
**Dados de entrada** | Inserção de dados válidos no formulário de login
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Agendamentos de Serviço**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://pmv-si-2024-2-pe1-t2-t2-gp01.vercel.app/index.html <br> 2) Clique em "Agendamentos" <br> 3) Preencha todos os campos do formulário <br> 4) Clique no botão "Agendar"
**Requisitos associados** | RF-006
**Resultado esperado** | Receber uma mensagem de confirmação e ser redirecionado para a tela inicial
**Dados de entrada** | Inserção de dados válidos no formulário de agendamentos
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - Editar informações**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://pmv-si-2024-2-pe1-t2-t2-gp01.vercel.app/index.html <br> 2) Clique em "Editar perfil" <br> 3) Clique em "Editar informações" <br> 4) Preencha todos os campos do formulário <br> 5) Clique no botão "Editar"
**Requisitos associados** | RF-003
**Resultado esperado** | Receber uma mensagem de confirmação e ser redirecionado para a tela inicial
**Dados de entrada** | Inserção de dados válidos no formulário de ediçao de informações
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Mudar senha**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://pmv-si-2024-2-pe1-t2-t2-gp01.vercel.app/index.html <br> 2) Clique em "Editar perfil" <br> 3) Clique em "Mudar senha" <br> 4) Preencha todos os campos do formulário <br> 5) Clique no botão "Confirmar"
**Requisitos associados** | RF-003
**Resultado esperado** | Receber uma mensagem de confirmação e ser redirecionado para a tela inicial
**Dados de entrada** | Inserção de dados válidos no formulário de mudança de senha 
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT06 - Histórico de agendamentos**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://pmv-si-2024-2-pe1-t2-t2-gp01.vercel.app/index.html <br> 2) Clique em "Histórico de agendamentos" <br>
**Requisitos associados** | RF-004
**Resultado esperado** | Visualizar o histórico de agendamentos do usuário
**Dados de entrada** | Listagem automática
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT07 - Opinião dos usuários**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço https://pmv-si-2024-2-pe1-t2-t2-gp01.vercel.app/index.html <br> 2) Clique em "Deixe sua opinião" <br> 3) Preencha todos os campos do formulário <br> 4) Clique no botão "Enviar opinião"
**Requisitos associados** | RF-008
**Resultado esperado** | Receber uma mensagem de confirmação e ser redirecionado para a tela inicial
**Dados de entrada** | Inserção de dados válidos no formulário de agendamentos
**Resultado obtido** | Sucesso

## Registro dos Testes de Software

Nesta seção, será apresentado o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Cada caso de teste foi registrado em formato de  vídeo, demonstrando o uso da funcionalidade correspondente.

|*Caso de Teste*                                 |*CT01 - Criar conta*          |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que o cliente crie seu próprio cadastro|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1v5q9HE2dOBIJwrE5zvYm9ZM9aNue4SMO/view?usp=drive_link| 

|*Caso de Teste*                                 |*CT02 -   Login no sistema*                               |
|---|---|
|Requisito Associado | RF-002 - A aplicação deve permitir que o cliente faça login no sistema|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1v-BrVL7pM4IoiSlBZUnjMLRoLeNLS_4Y/view?usp=drive_link | 

|*Caso de Teste*                                 |*CT03 -  Agendamentos de Serviço*                                      |
|---|---|
|Requisito Associado | RF-006 - O cliente deve ser capaz de registrar o horário definido na agenda de cortes, bem como qual funcionário foi escolhido para o serviço|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1uyBKd2Vkk6r840zFo4_3lxh8s3HkQJQc/view?usp=drive_link | 

|*Caso de Teste*                                 |*CT04 - Editar informações*                                        |
|---|---|
|Requisito Associado | RF-003 - A aplicação deve permitir que o cliente edite seus próprios dados, inclusive sua senha|
|Link do vídeo do teste realizado: |https://drive.google.com/file/d/1v7QhDJT6ITV3DJbaAeNzr7oTqG_1J14b/view?usp=drive_link | 

|*Caso de Teste*                                 |*CT05 - Mudar senha*                                        |
|---|---|
|Requisito Associado | RF-003 - A aplicação deve permitir que o cliente edite seus próprios dados, inclusive sua senha|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1v1YsLKuPXNWTDllzCv3k6glLEXEqSj3x/view?usp=drive_link| 

|*Caso de Teste*                                 |*CT06 - Histórico de agendamentos*                                       |
|---|---|
|Requisito Associado | RF-004 - A aplicação deve permitir que o cliente visualize seu histórico de serviços agendados|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1vBG7nsq-0HoBfppl4AjsR6MSben8LNC6/view?usp=drive_link | 

|*Caso de Teste*                                 |*CT07 - Opinião dos usuários*                                        |
|---|---|
|Requisito Associado | RF-008 - A aplicação deve ser capaz de captar feedbacks do usuário por meio de campos com notas de 1 a 5 e de um campo de opinião por extenso|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1v1WlN4uwZRv32-MIgA6b0Gt95gpNCgKs/view?usp=drive_link | 


## Avaliação dos Testes de Software

As sete funcionalidades planejadas foram implementadas com sucesso. Para todos os formulários existem condicionais que verificam adequadamente se os campos foram digitados. Nos formulários em que constam senhas de usuário, há condicionais que testam adequadamente se as senhas digitadas estão idênticas. No formulário de agendamento, há condicionais que testam adequadamente se todos os dados foram selecionados, bem como se os horários pretendidos pelo usuário estão disponíveis. No formulário de envio de opinião do cliente, há uma condicional que testa se o campo de texto foi preenchido. Todos os dados coletados via formulário são adequadamente registrados no armazenamento local do navegador em que a aplicação é utilizada, com a possibilidade de checagem e recuperação, em caso de conveniência ou necessidade.


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos três cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas três pessoas com perfis correspondentes às histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             |Você deseja agendar seu primeiro corte na barbearia Det's. Faça seu cadastro e logue com seus dados. Agende seu primeiro serviço e, após isso, verifique sua listagem de serviços.           |
| 2             |Você precisa editar seus dados cadastrados e modificar sua senha. Acesse a personalização de perfil e modifique seus dados e senha.            |
| 3             |Você deseja avaliar o serviço de um funcionario. Acesse o formulário de opinião, escolha um funcionário e o avalie. Deixe um comentário por escrito e envie sua avaliação.             |



## Registro de Testes de Usabilidade

### Cenário 1: Você deseja agendar seu primeiro corte na barbearia Det's. Faça seu cadastro e logue com seus dados. Agende seu primeiro serviço e, após isso, verifique sua listagem de serviços.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             |       5          | 78.52 segundos            |
| 2       | SIM             |           4        |       187.97 segundos         |
| 3       | SIM             |         4          | 146.13 segundos                  |
|  |  |  |  |
| **Média**     | 100%           |       4.3         | 137.54 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 80.96 segundos |

Comentários dos usuários: 

Usuário 1: "Está bem tranquilo de seguir o fluxo da aplicação."

Usuário 2: "Está muito bom. Só senti falta de um redirecionamento para mudança de senha caso o usuário esteja com dificuldade de lembrá-la."

Usuário 3: "Fluxo bastante intuitivo."

### Cenário 2: Você precisa editar seus dados cadastrados e modificar sua senha. Acesse a personalização de perfil e modifique seus dados e senha.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             |           4          |  46.63 segundos                          |
| 2       | SIM             |             4       |  46.56 segundos                          |
| 3       | SIM             |         3            | 79.80 segundos                          |
|  |  |  |  |
| **Média**     | 100%           |      3.6     | 57.66 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 49.46 segundos |

Comentários dos usuários: 

Usuário 1: "Faltou, no formulário de edição de dados, aparecerem os dados que já estão registrados, a fim de comparar e ver quais deles desejo modificar."

Usuário 2: "O design está bem padrão, ficaria ótimo se colocassem algo mais original e com a cara do time de desenvolvimento."

Usuário 3: "Poderia redirecionar para mudar senha após editar informações do perfil."


### Cenário 3: Você deseja avaliar o serviço de um funcionario. Acesse o formulário de opinião, escolha um funcionário e o avalie. Deixe um comentário por escrito e envie sua avaliação. 

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             |        5             |  25.68 segundos                          |
| 2       | SIM             |           5          |  37.00 segundos                          |
| 3       | SIM             |         5            |  49.88 segundos                          |
|  |  |  |  |
| **Média**     | 100%           |        5         | 37.52 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 29.05 segundos |

Comentários dos usuários: 

Usuário 1: "O formulário está bastante completo e intuitivo."

Usuário 2: "O formulário está objetivo e não está chato de preencher. Rápido."

Usuário 3: "Bastante tranquilo de preencher o formulário."

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento em que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que em sua maior parte variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 137 segundos — média usuários — contra 80 segundos — especialista — no cenário 1), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.
