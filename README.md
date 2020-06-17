# Eslint Config Avila Tek

Este breve paquete es una configuración de eslint para los proyectos de [Avila Tek](https://avilatek.dev) esta inspirado en la configuración de [wesbos](https://github.com/wesbos/eslint-config-wesbos) la version de [TypeScript](https://github.com/Avila-Tek/eslint-config-avilatek-typescript) puedes encontrarla [aquí](https://github.com/Avila-Tek/eslint-config-avilatek-typescript).

## Install

Para instalar esta configuración lo que debes hacer es ejecutar este comando dentro de la carpeta de tu proyecto, se instalara como una dependencia de desarrollo, por lo cual las reglas solamente se ejecutaran el proyecto en que lo hayas instalado. **Nótese que es npx no es npm**

```shell
npx install-peerdeps --dev eslint-config-avilatek
```

Luego deberás crear un archivo de config `.eslintrc.js` es el root del proyecto y copiar lo siguiente.

```javascript
module.exports = {
  extends: ['avilatek'],
};
```

## Para usar con VS Code

> Requisitos: Debes tener instalado [vscode](https://code.visualstudio.com) y la extension de [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

Luego deberás abrir el archivo de `settings.json` (preferiblemente el global) y agregar las siguientes instrucciones al archivo.

```json
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "prettier.disableLanguages": ["javascript", "javascriptreact"]
}
```
