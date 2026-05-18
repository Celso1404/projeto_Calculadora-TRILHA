# 🧮 Dev Calculator

Uma calculadora web completa, interativa e com design arrojado (baseado em SVG). Desenvolvida utilizando HTML5, CSS3 e JavaScript (Orientação a Objetos). Além das operações matemáticas básicas, o projeto conta com funcionalidades avançadas como histórico de cálculos, suporte nativo a teclado, integração com a área de transferência (copiar/colar) e feedback em áudio.

## ✨ Funcionalidades

* **Operações Básicas:** Adição, subtração, multiplicação, divisão e porcentagem.
* **Painel de Histórico:** Guarda as expressões calculadas e seus resultados em um painel lateral escuro e moderno. Possui botão para limpar o histórico.
* **Suporte a Teclado:** Integração completa com o teclado do usuário (números, operadores, `Enter` para igual, `Backspace` para apagar, `Escape` para limpar).
* **Copiar e Colar:** Suporte nativo para `Ctrl+C` (copia o valor do display) e `Ctrl+V` (cola um valor no display para cálculo).
* **Feedback de Áudio:** Efeito sonoro de "clique" ao pressionar os botões. (Pode ser ativado/desativado com um duplo clique no botão `AC`).
* **Data e Hora em Tempo Real:** O visor da calculadora exibe a data e a hora atuais, atualizadas segundo a segundo.
* **Tratamento de Erros:** Limite de caracteres no visor (máximo de 11) com exibição de "Error" para evitar quebra de layout.

## 📁 Estrutura de Arquivos

```text
/
├── index.html                           # Estrutura principal e interface SVG
├── click.mp3                            # Arquivo de áudio para os botões (necessário adicionar)
├── digital-7.ttf                        # Fonte digital usada no visor (necessário adicionar)
├── Allen.png                            # Ícone da página (necessário adicionar)
└── scripts/
    ├── calculator.js                    # Arquivo de inicialização da calculadora
    └── controller/
        └── calcController.js            # Classe principal com toda a regra de negócio