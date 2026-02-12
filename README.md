# 🤖 Árvore de Agentes Be-Wide

Visualização interativa da estrutura hierárquica do sistema multi-agentes Be-Wide.

## 🌐 Demo

**URL:** [https://bebot2026.github.io/agentes-tree/](https://bebot2026.github.io/agentes-tree/)

## 📋 Estrutura dos Agentes

### Nível 1: Comunicação
- **Bebot** (Claude Haiku) - Interface principal de comunicação

### Nível 2: Orquestração
- **Coordenador** (Claude Sonnet) - Distribui tarefas entre especialistas

### Nível 3: Especialistas
- **Programador** (Claude Sonnet) - Desenvolvimento de código
- **Pesquisa** (Claude Haiku) - Investigação e análise
- **Designer** (Claude Sonnet) - Design e UX
- **Escritor** (Claude Haiku) - Produção de conteúdo

## 🚀 Como Usar

### Visualizar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/bebot2026/agentes-tree.git
cd agentes-tree
```

2. Abra `index.html` no navegador ou use um servidor local:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

3. Acesse `http://localhost:8000`

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Animações e design responsivo
- **JavaScript Vanilla** - Interatividade e conexões SVG
- **GitHub Pages** - Hospedagem gratuita

## 📱 Responsividade

A página adapta-se automaticamente para:
- 💻 **Desktop** (1400px+) - Layout em linha
- 📱 **Tablet** (768px-1024px) - Grid 2x2
- 📲 **Mobile** (<768px) - Layout vertical

## ✏️ Como Atualizar

### Adicionar Novo Agente

1. Edite `index.html` e adicione um novo card:
```html
<div class="agent-card specialist novo-agente" data-agent="novo">
    <div class="agent-icon">🆕</div>
    <h2>Nome do Agente</h2>
    <div class="agent-badge sonnet">Claude Sonnet</div>
    <p class="agent-role">Função</p>
    <p class="agent-description">Descrição breve</p>
</div>
```

2. Adicione estilo personalizado em `style.css` (se necessário):
```css
.novo-agente { animation-delay: 0.9s; }
```

3. As conexões serão geradas automaticamente pelo JavaScript.

### Alterar Cores

Edite as variáveis CSS em `style.css`:
```css
:root {
    --primary-blue: #1E73BE;  /* Cor principal Be-Wide */
    --sonnet-color: #9B59B6;  /* Badge Sonnet */
    --haiku-color: #3498DB;   /* Badge Haiku */
}
```

### Modificar Descrições

Edite diretamente o texto nas tags `<p class="agent-description">` em `index.html`.

## 🎨 Personalização

### Ícones
Troque os emojis na div `.agent-icon` ou use ícones SVG/FontAwesome.

### Animações
Ajuste as animações em `style.css`:
- `fadeInUp` / `fadeInDown` - Entrada dos elementos
- `drawLine` - Desenho das conexões
- Delays definidos por agente

### Interatividade
Adicione mais funcionalidades em `script.js`:
- Modal com informações detalhadas
- Filtros por tipo de modelo
- Busca de agentes
- Estatísticas

## 📦 Estrutura de Arquivos

```
agentes-tree/
├── index.html          # Estrutura HTML
├── style.css           # Estilos e animações
├── script.js           # Interatividade e conexões
└── README.md           # Documentação
```

## 🔄 Publicar Alterações

1. Faça commit das mudanças:
```bash
git add .
git commit -m "Descrição da alteração"
```

2. Envie para GitHub:
```bash
git push origin main
```

3. As mudanças aparecerão em **~1 minuto** no GitHub Pages.

## 🐛 Troubleshooting

**Conexões não aparecem:**
- Verifique o console do navegador (F12)
- Conexões são redesenhadas ao redimensionar a janela
- Aguarde o carregamento completo da página

**GitHub Pages não atualiza:**
- Settings → Pages → verifique se Source está em `main` branch
- Pode levar alguns minutos para propagar
- Limpe o cache do navegador (Ctrl+Shift+R)

**Layout quebrado no mobile:**
- Teste com DevTools do Chrome (F12 → Toggle device toolbar)
- Verifique as media queries em `style.css`

## 📄 Licença

Este projeto é parte do ecossistema Be-Wide © 2026

## 🤝 Contribuir

Para sugestões ou melhorias, contate Norberto ou abra uma issue no repositório.

---

**Mantido por:** Be-Wide Team  
**Última atualização:** Fevereiro 2026
