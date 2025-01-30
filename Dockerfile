# Étape 1 : Construire l'application Angular
FROM node:latest

WORKDIR /app

# Copier package.json et package-lock.json
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Exposer le port 4200 (par défaut utilisé par `ng serve`)
EXPOSE 4200

# Démarrer l'application Angular en mode développement avec `ng serve`
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "4200"]
