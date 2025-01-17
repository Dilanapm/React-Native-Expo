module.exports = {
  // Extiende las reglas base de ESLint y Prettier para React Native (Expo)
  extends: [
    "expo", // Reglas de Expo
    "plugin:prettier/recommended", // Configura Prettier automáticamente como una regla
  ],
  plugins: ["prettier"], // Habilita Prettier como plugin de ESLint
  rules: {
    "prettier/prettier": "warn", // Muestra advertencias para problemas de formato
    "no-unused-vars": "warn", // Opcional: Muestra advertencias para variables no usadas
    "react/prop-types": "off", // Opcional: Desactiva validaciones de prop-types si no las usas
  },
  ignorePatterns: ["/dist/*"], // Ignora la carpeta dist en ESLint
};
