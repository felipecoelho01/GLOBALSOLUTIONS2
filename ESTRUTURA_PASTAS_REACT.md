# 📁 Estrutura de Pastas React - Melhores Práticas

## 🏗️ Estrutura Geral do Projeto

```
projeto-react/
├── 📁 public/                    # Arquivos estáticos públicos
│   ├── favicon.ico
│   ├── manifest.json
│   ├── robots.txt
│   └── images/                   # Imagens estáticas
├── 📁 src/                       # Código fonte principal
│   ├── 📁 components/            # Componentes reutilizáveis
│   │   ├── 📁 ui/               # Componentes básicos de UI
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.module.css
│   │   │   │   ├── Button.test.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   ├── Modal/
│   │   │   └── Loading/
│   │   ├── 📁 layout/           # Componentes de layout
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── Sidebar/
│   │   │   └── Navigation/
│   │   └── 📁 common/           # Componentes comuns
│   │       ├── ErrorBoundary/
│   │       ├── ProtectedRoute/
│   │       └── SEO/
│   ├── 📁 pages/                # Páginas/Views da aplicação
│   │   ├── 📁 Home/
│   │   │   ├── Home.tsx
│   │   │   ├── Home.module.css
│   │   │   ├── Home.test.tsx
│   │   │   └── index.ts
│   │   ├── 📁 About/
│   │   ├── 📁 Contact/
│   │   ├── 📁 Dashboard/
│   │   └── 📁 Auth/
│   │       ├── Login/
│   │       ├── Register/
│   │       └── ForgotPassword/
│   ├── 📁 hooks/                # Custom hooks
│   │   ├── useAuth.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useFetch.ts
│   │   ├── useDebounce.ts
│   │   └── index.ts
│   ├── 📁 services/             # Serviços e APIs
│   │   ├── 📁 api/
│   │   │   ├── auth.ts
│   │   │   ├── users.ts
│   │   │   ├── products.ts
│   │   │   └── index.ts
│   │   ├── httpClient.ts
│   │   └── storage.ts
│   ├── 📁 store/                # Gerenciamento de estado
│   │   ├── 📁 slices/           # Redux Toolkit slices
│   │   │   ├── authSlice.ts
│   │   │   ├── userSlice.ts
│   │   │   └── uiSlice.ts
│   │   ├── store.ts
│   │   └── index.ts
│   ├── 📁 context/              # Context API
│   │   ├── AuthContext.tsx
│   │   ├── ThemeContext.tsx
│   │   └── index.ts
│   ├── 📁 utils/                # Funções utilitárias
│   │   ├── constants.ts
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   ├── helpers.ts
│   │   └── index.ts
│   ├── 📁 types/                # Tipos TypeScript
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   ├── common.ts
│   │   └── index.ts
│   ├── 📁 styles/               # Estilos globais
│   │   ├── globals.css
│   │   ├── variables.css
│   │   ├── mixins.css
│   │   └── themes/
│   │       ├── light.css
│   │       └── dark.css
│   ├── 📁 assets/               # Assets estáticos
│   │   ├── 📁 images/
│   │   ├── 📁 icons/
│   │   ├── 📁 fonts/
│   │   └── 📁 videos/
│   ├── 📁 config/               # Configurações
│   │   ├── env.ts
│   │   ├── routes.ts
│   │   └── constants.ts
│   ├── 📁 __tests__/            # Testes globais
│   │   ├── setup.ts
│   │   └── utils.ts
│   ├── App.tsx                  # Componente principal
│   ├── main.tsx                 # Ponto de entrada
│   └── vite-env.d.ts           # Tipos do Vite
├── 📁 tests/                    # Configurações de teste
│   ├── setup.ts
│   └── mocks/
├── 📄 package.json             # Dependências e scripts
├── 📄 vite.config.ts           # Configuração do Vite
├── 📄 tsconfig.json            # Configuração TypeScript
├── 📄 eslint.config.js         # Configuração ESLint
├── 📄 .gitignore               # Arquivos ignorados pelo Git
└── 📄 README.md                # Documentação do projeto
```

## 🎯 Princípios da Organização

### 1. **Separação por Responsabilidade**
- Cada pasta tem uma responsabilidade específica
- Componentes separados por funcionalidade
- Lógica de negócio isolada em services

### 2. **Escalabilidade**
- Estrutura que cresce com o projeto
- Fácil adição de novos módulos
- Componentes reutilizáveis

### 3. **Manutenibilidade**
- Arquivos relacionados agrupados
- Nomenclatura consistente
- Fácil localização de código

## 📁 Detalhamento das Pastas

### `/src/components/`
**Finalidade**: Componentes reutilizáveis da aplicação

#### `/ui/`
- Componentes básicos de interface (Button, Input, Modal)
- Componentes sem lógica de negócio
- Altamente reutilizáveis

#### `/layout/`
- Componentes estruturais (Header, Footer, Sidebar)
- Responsáveis pelo layout geral

#### `/common/`
- Componentes compartilhados com lógica específica
- ErrorBoundary, ProtectedRoute, etc.

### `/src/pages/`
**Finalidade**: Páginas/Views principais da aplicação
- Cada página em sua própria pasta
- Contém componentes específicos da página
- Conecta componentes menores

### `/src/hooks/`
**Finalidade**: Custom hooks para lógica reutilizável
- Encapsulam lógica de estado
- Facilitam reutilização
- Seguem padrão de nomenclatura `use*`

### `/src/services/`
**Finalidade**: Comunicação com APIs e serviços externos
- Funções de API organizadas por entidade
- Cliente HTTP configurado
- Interceptors e middlewares

### `/src/store/`
**Finalidade**: Gerenciamento de estado global
- Redux Toolkit slices
- Configuração da store
- Actions e reducers

### `/src/utils/`
**Finalidade**: Funções utilitárias puras
- Formatadores de data/número
- Validadores
- Helpers gerais

### `/src/types/`
**Finalidade**: Definições de tipos TypeScript
- Interfaces da API
- Tipos customizados
- Enums e constantes tipadas

## 🔧 Padrões de Nomenclatura

### Arquivos
- **Componentes**: PascalCase (`Button.tsx`)
- **Hooks**: camelCase com prefixo `use` (`useAuth.ts`)
- **Tipos**: PascalCase (`UserType.ts`)
- **Utilitários**: camelCase (`formatDate.ts`)

### Pastas
- **Componentes**: PascalCase (`Button/`)
- **Outras**: camelCase (`services/`)

### Convenções
```typescript
// ✅ Bom
export const Button = () => { ... }
export default Button;

// ✅ Bom - index.ts para re-exports
export { Button } from './Button';
export { Input } from './Input';

// ✅ Bom - estrutura de pasta de componente
Button/
├── Button.tsx          # Componente principal
├── Button.module.css   # Estilos específicos
├── Button.test.tsx     # Testes
├── Button.stories.tsx  # Storybook (opcional)
└── index.ts           # Re-export
```

## 🧪 Estratégia de Testes

### Localização
- Testes unitários: junto ao arquivo (`Component.test.tsx`)
- Testes de integração: pasta `/tests/`
- Mocks: pasta `/tests/mocks/`

### Estrutura de Teste
```
src/
├── components/
│   └── Button/
│       ├── Button.tsx
│       ├── Button.test.tsx     # ← Teste unitário
│       └── index.ts
└── __tests__/                  # ← Testes de integração
    ├── setup.ts
    └── integration/
```

## 📝 Boas Práticas Adicionais

### 1. **Imports Organizados**
```typescript
// Libs externas primeiro
import React from 'react';
import { useState } from 'react';

// Imports relativos depois
import { Button } from '../ui/Button';
import { useAuth } from '../../hooks/useAuth';
```

### 2. **Re-exports com index.ts**
```typescript
// src/components/ui/index.ts
export { Button } from './Button';
export { Input } from './Input';
export { Modal } from './Modal';
```

### 3. **Absolute Imports**
```typescript
// vite.config.ts
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    }
  }
});
```

### 4. **Environment Variables**
```typescript
// src/config/env.ts
export const env = {
  API_URL: import.meta.env.VITE_API_URL,
  APP_VERSION: import.meta.env.VITE_APP_VERSION,
} as const;
```

## 🚀 Evolução da Estrutura

### Para Projetos Pequenos
Remover:
- `/store/` (se não usar estado global)
- `/context/` (se não precisar de Context API)
- Simplificar `/components/` (menos subpastas)

### Para Projetos Grandes
Adicionar:
- `/modules/` (feature-based organization)
- `/shared/` (código compartilhado entre módulos)
- `/libs/` (bibliotecas internas)
- `/docs/` (documentação técnica)

---

**Esta estrutura garante um projeto React escalável, manutenível e seguindo as melhores práticas da comunidade!** 🎉 