# Template padrão do site

## Design

1. Layout Principal

Este será o layout base para todas as páginas principais do sistema.

a. Cabeçalho

•	Posicionamento do Logo: O logotipo do sistema será posicionado no canto superior esquerdo, dentro do cabeçalho.
•	O cabeçalho também consta o título do projeto.


c. Área de conteúdo

•	A página irá conter a foto de um barbeiro realizando um corte de cabelo, Texto de boas vindas e o logotipo do estabelecimento.
•	As funcionalidades estarão disponíveis na parte inferior da página.


2. Layout de Login

•	Layout de login consta mensagem de instrução a esquerda, e a direita o campo onde as informações de nome de usuário e senha serão digitados, bem como o botão para entrar no sistema.


3. Menu Padrão

O menu padrão será dividido em ícones na parte inferior da página, cada um representando uma funcionalidade específica do sistema.
a. Principais funcionalidades

1.	Cadastro de novo usuário
2.	Login no sistema
3.	Agendamento de serviços
4.	Personalização do Perfil.
5.	Listagem do histórico de agendamentos
6.	Formulário de avaliação dos serviços

Considerações finais.
•	Das cores e Temas: As cores do layout seguirão um padrão visual neutro, destacando as principais funcionalidades.
•	Tipografia: Tipografia será legível e consistente, com clara hierarquia entre títulos, subtítulos e corpo de texto.


## Cores 
Utilização de cores neutras. Tons de preto, cinza e branco.


![Paleta de cores](https://github.com/user-attachments/assets/f9cfd372-4755-40b4-b160-7eef8a1def73)


## Tipografia

**Título da página:**

Fonte: Goldman

Estilo: Regular

Tamanho: 60

Cor: #000000

Opacidade: 100%

**Texto de apresentação do site:**

Fonte: Gruppo

Estilo: Regular

Tamanho: 65

Cor 1: #000000

Opacidade: 20%

Cor 2: #000000

Opacidade: 100%

**Título da seção "Funcionalidades:**

Fonte: Gruppo

Estilo: Regular

Tamanho: 54

Cor: #000000

Opacidade: 100%

**Títulos dos ícones na página inicial:***

Fonte: Galindo

Estilo: Regular

Tamanho: 35

Cor: #000000

Opacidade: 100%

**Corpo de textos explicativos:**

Fonte: Body/Font Family

Estilo: Font Weight Strong

Tamanho: 48

Cor: #FFFFFF

Opacidade: 100%

**Textos presentes em botões:**

Fonte: Inter

Estilo: Semi bold

Tamanho: 36

Cor: #FFFFFF

Opacidade: 100%

## Iconografia

1 - Ícone de uma pessoa com um símbolo de adição representando o cadastro de novo usuário.

![image](https://github.com/user-attachments/assets/cf808a53-b29c-4971-bef7-6e317c031c08)

2 - Ícone de uma pasta com uma seta apontando para dentro para representar o login do usuário no sistema.

![image](https://github.com/user-attachments/assets/7daa9ac4-5999-4130-b567-183892c66421)

3 – Ícone de calendário para representar o agendamento de serviços em uma data e horário específicos.

![image](https://github.com/user-attachments/assets/88facbac-5aa4-4beb-8d2b-f93415a27649)

4 -Ícone de um lápis representando a edição de informações do usuário.

![image](https://github.com/user-attachments/assets/223b243c-6827-4786-bfe2-e9c99841aae1)

5 – Ícone de lista para representar a exibição do histórico de serviços prestados para o usuário.

![image](https://github.com/user-attachments/assets/13889d15-774a-4b74-a88b-dfdaa247011a)

6 -Ícone de balões de fala representando as opiniões do usuário a respeito dos serviços prestados.

![image](https://github.com/user-attachments/assets/774edbb1-0ade-423c-82db-692765dff58f)

## Estilos CSS

**1.0 - Header**

width: 1512px;

height: 260px;

flex-shrink: 0;

border: 1px solid #000;

background: #FFF;

 *1.1 - Título da página*

 color: #000;

text-align: center;

font-family: Goldman;

font-size: 60px;

font-style: normal;

font-weight: 400;

line-height: normal;

**2.0 - Seção de apresentação**

width: 1528px;

height: 457px;

flex-shrink: 0;

background: #FFF;

 *2.1 - Texto da seção de apresentação parte 1*

width: 1019px;

height: 206px;

flex-shrink: 0;

color: #000;

text-align: center;

font-family: Gruppo;

font-size: 65px;

font-style: normal;

font-weight: 400;

line-height: normal;

 *2.2 - Texto da seção de apresentação parte 2*

 width: 1042px;

color: #000;

text-align: center;

font-family: "Gentium Plus";

font-size: 45px;

font-style: normal;

font-weight: 400;

line-height: normal;

**3.0 - Seção de funcionalidades**

width: 1521px;

height: 953px;

background: #FBFBFB;

 *3.1 - Ícones representando as funcionalidades*

width: 212.256px;
 
height: 214.031px;

flex-shrink: 0;

fill: #000;

**4.0 Frames das telas de interação com o usuário**

width: 1294.204px;

height: 1137px;

flex-shrink: 0;

background: #D9D9D9;

 *4.1 - Áreas em que estão presentes as mensagens, botões e textos de instrução parte 1*

width: 565.185px;

height: 958px;

flex-shrink: 0;

fill: #1E1E1E;

filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.25));

 *4.2 - Áreas em que estão presentes as mensagens, botões e textos de instrução parte 2*

width: 1056px;

height: 958px;

flex-shrink: 0;

**5.0 - Campos de digitação e seus títulos**

*Campos:*

width: 539px;

height: 48px;

flex-shrink: 0;

border: 2px solid #000;

box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);

*Títulos:*

width: 335px;

height: 46px;

flex-shrink: 0;

color: #000;

text-align: center;

font-family: Inter;

font-size: 40px;

font-style: normal;

font-weight: 600;

line-height: 140%; /* 56px */

 *5.1 - Textos de instrução nos formulários*

width: 338px;
 
height: 267.981px;

flex-shrink: 0;

color: #FFF;

text-align: center;

font-family: var(--sds-typography-body-font-family);

font-size: 48px;

font-style: normal;

font-weight: var(--sds-typography-body-font-weight-strong);

line-height: 140%; /* 67.2px */

**6.0 Botões e seus textos**

 *Botões tipo 1*

width: 245px;

height: 91.18px;

flex-shrink: 0;

border: 1px solid #FFF;

background: #000;

 *Textos*

display: flex;

width: 195px;

height: 91.18px;

flex-direction: column;

justify-content: center;

flex-shrink: 0;

color: #FFF;

text-align: center;

-webkit-text-stroke-width: 1;

-webkit-text-stroke-color: #FFF;

font-family: Inter;

font-size: 36px;

font-style: normal;

font-weight: 600;

line-height: 140%; /* 50.4px */
 
 *Botões tipo 2*

width: 576.214px;

height: 91.18px;

flex-shrink: 0;

*Texto*

display: flex;

width: 458.619px;

height: 91.18px;

flex-direction: column;

justify-content: center;

flex-shrink: 0;

color: #FFF;

text-align: center;

-webkit-text-stroke-width: 1;

-webkit-text-stroke-color: #FFF;

font-family: Inter;

font-size: 36px;

font-style: normal;

font-weight: 600;

line-height: 140%; /* 50.4px */

**7.0 - Frame do calendário**

display: flex;

width: 1291px;

height: 1137px;

padding: 20px;

flex-direction: column;

justify-content: center;

align-items: center;

gap: 10px;

background: #FFF;

 *7.1 - Caracteres dos dias da semana*

display: flex;

width: 130px;

height: 46px;

transform: rotate(-0.752deg);

flex-direction: column;

justify-content: center;

flex-shrink: 0;

color: #000;

text-align: center;

font-family: Gruppo;

font-size: 48px;

font-style: normal;

font-weight: 400;

line-height: normal;

 *7.2 - Dias do mês*

display: flex;

width: 150.857px;

height: 165.319px;

padding: 10px;

flex-direction: column;

justify-content: center;
align-items: center;

gap: 10px;

flex-shrink: 0;

 *7.3 - Tela com os horários disponíveis*

width: 327px;

height: 253px;

background: #FFF;

 *7.4 - Título da tela de horários*

display: flex;

width: 113px;

height: 28px;

flex-direction: column;

justify-content: center;

flex-shrink: 0;

color: #000;

text-align: center;

font-family: Gruppo;

font-size: 16px;

font-style: normal;

font-weight: 400;

line-height: normal;

 *7.5 - Horários*

display: flex;

width: 46px;

height: 10px;

flex-direction: column;

justify-content: center;

flex-shrink: 0;

color: #000;

text-align: center;

font-family: Gruppo;

font-size: 14px;

font-style: normal;

font-weight: 400;

line-height: normal;


 



 
 
 








 



