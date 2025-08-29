# 📝 Currículo

Um gerador de currículos moderno feito com **React + TypeScript + Tailwind**, integrado com **Google Gemini API** para melhorar textos e exportar versões em PDF.

## 🚀 Tecnologias
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Toastify
- Google Gemini API
- html2pdf.js / react-pdf

## 📂 Estrutura
```
curriculo-ai/
│── src/
│   ├── assets/              # Imagens, ícones e estáticos
│   ├── components/          # Componentes reutilizáveis
│   │   ├── ui/              # Botões, inputs, loaders, modais
│   │   └── layout/          # Header, Footer, Sidebar
│   │
│   ├── pages/               # Páginas principais
│   │   ├── Home.tsx
│   │   ├── Editor.tsx       # Edição do currículo
│   │   └── Preview.tsx      # Pré-visualização + exportar PDF
│   │
│   ├── services/            # Integrações externas (API Gemini, PDF, etc.)
│   │   ├── aiService.ts
│   │   └── pdfService.ts
│   │
│   ├── hooks/               # Custom hooks (ex: useLoading, useForm)
│   ├── context/             # Context API (estado global, ex: CurrículoContext)
│   ├── utils/               # Funções auxiliares
│   ├── styles/              # Tailwind config + estilos extras
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── public/                  # Favicon, index.html base
├── .env.example             # Variáveis de ambiente (API Keys)
├── tailwind.config.js
├── tsconfig.json
├── package.json
├── .gitignore
└── README.md
```

## 📌 Funcionalidades
- Criar e editar currículo
- Melhorar textos via IA (Gemini)
- Pré-visualização em tempo real
- Exportar currículo em PDF
- Feedback claro (loading, erros, sucesso)
- Dark/Light mode
- Templates prontos para escolha
- Salvar progresso no LocalStorage
- Compartilhar via link público

## ⚙️ Como rodar
```bash
git clone https://github.com/usuario/curriculo-ai.git
cd curriculo-ai
npm install
npm run dev
```