![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

# Jogo da Forca

![image](https://user-images.githubusercontent.com/91689754/162090842-ccac8005-10a6-41b2-a9a8-1cb6e2d5fb59.png)

Challenge proposto pelo programa [Oracle Next Education](https://www.oracle.com/br/education/oracle-next-education/). Construir um jogo da forca usando Vanilla JavaScript.

## Sobre

O algoritmo do jogo permite sortear uma palavra usando Math.random() para que ela seja usada quando o usuário iniciar a partida.

```js
const palavraSorteio = [
  "javascript",
  "programar",
  "java",
  "backend",
  "frontend",
];

let sorteio =
  palavraSorteio[
    Math.floor(Math.random() * palavraSorteio.length)
  ].toUpperCase();
  
```

Ao ser sorteada, usamos DOM para que seja criado as barras correspondente a palavra sorteada.

![image](https://user-images.githubusercontent.com/91689754/162091434-e972687c-df47-4ee6-ad44-bdbb3c12bb5e.png)

Uma ilustração será carregada de acordo com os erros do usuário.

![image](https://user-images.githubusercontent.com/91689754/162091637-c0e3a719-b478-4435-add5-d079fcaa2263.png)

## Ferramentas utilizadas

* HTML
* CSS
* JavaScript

## Guia

Você pode utilizar Git Clone.

```
https://github.com/felipe-miranda-marreiros/jogo-da-forca.git
```
