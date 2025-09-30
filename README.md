# SportHive 🏆

Plataforma social e educativa de esportes com **Web (Next.js)**, **Mobile (React Native/Expo)** e **Backend (Node/Express)**.

---

## 📂 Estrutura do Projeto

```
sporthive/
  sporthive-backend/   # API mock/diferencial
  sporthive-web/       # Frontend Web (Next.js)
  sporthive-mobile/    # Aplicativo Mobile (Expo/React Native)
```

---

## 🚀 Tecnologias Utilizadas
- **Backend**: Node.js, Express, CORS
- **Web**: Next.js 14, React 18, TailwindCSS
- **Mobile**: React Native (Expo), React Navigation, Axios, AsyncStorage

---

## ⚙️ Como Rodar

### 1) Backend
```bash
cd sporthive-backend
npm install
npm run dev
```
Servidor: [http://localhost:4000](http://localhost:4000)

### 2) Web
```bash
cd sporthive-web
cp .env.local.example .env.local
npm install
npm run dev
```
App Web: [http://localhost:3000](http://localhost:3000)

### 3) Mobile
```bash
cd sporthive-mobile
cp .env.example .env
# ajuste EXPO_PUBLIC_API_BASE_URL para o IP do backend ou do web
npm install
npm start
```
Rodar no **Expo Go** ou fazer build com **EAS**.

---

## 🌐 Deploy
- **Web** → Vercel  
- **Backend** → Render ou Railway  
- **Mobile** → Expo (EAS Build)  

---

## 🎥 Pitch
1. Apresentar o problema (conexão entre esporte e comunidade).  
2. Mostrar **Web** → feed, login, lista de jogos.  
3. Mostrar **Mobile** → login, jogos, perfil, detalhes.  
4. Destacar **Backend** com endpoints mockados.  

---