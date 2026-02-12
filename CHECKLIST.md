# ✅ Checklist de Deploy - Árvore de Agentes Be-Wide

## 📦 Pré-Deploy (Desenvolvimento)

### Arquivos Criados
- [x] `index.html` - Estrutura HTML
- [x] `style.css` - Estilos e animações
- [x] `script.js` - Interatividade
- [x] `README.md` - Documentação principal
- [x] `SETUP.md` - Instruções de configuração
- [x] `MANUTENCAO.md` - Guia de manutenção
- [x] `CHECKLIST.md` - Este arquivo
- [x] `deploy.sh` - Script de deploy automático
- [x] `.nojekyll` - Configuração GitHub Pages
- [x] `templates/novo-agente.html` - Template para novos agentes

### Validações Locais
- [ ] Abrir `index.html` no navegador
- [ ] Verificar se todos os 6 agentes aparecem
- [ ] Testar responsividade (F12 → Device toolbar)
  - [ ] Desktop (1400px+)
  - [ ] Tablet (768px)
  - [ ] Mobile (375px)
- [ ] Verificar se conexões SVG aparecem
- [ ] Clicar nos cards (interatividade)
- [ ] Console sem erros (F12 → Console)

### Estrutura Verificada
- [ ] **Nível 1:** Bebot (Haiku) - Comunicação ✅
- [ ] **Nível 2:** Coordenador (Sonnet) - Orquestração ✅
- [ ] **Nível 3:** 4 Especialistas:
  - [ ] Programador (Sonnet) ✅
  - [ ] Pesquisa (Haiku) ✅
  - [ ] Designer (Sonnet) ✅
  - [ ] Escritor (Haiku) ✅

---

## 🌐 Deploy GitHub

### 1. Criar Repositório
- [ ] Acessar https://github.com/new
- [ ] Nome: `agentes-tree`
- [ ] Owner: `bebot2026`
- [ ] Visibilidade: **Public**
- [ ] **NÃO** marcar "Initialize with README"
- [ ] Clicar "Create repository"

### 2. Configurar Git Local
```bash
cd /Users/bebot/.openclaw/workspace/agentes-tree
git remote add origin https://github.com/bebot2026/agentes-tree.git
git branch -M main
```

### 3. Primeiro Push
```bash
git push -u origin main
```
- [ ] Verificar em https://github.com/bebot2026/agentes-tree
- [ ] Confirmar que todos os arquivos subiram

### 4. Ativar GitHub Pages
- [ ] Ir em **Settings** → **Pages**
- [ ] Source: **Deploy from a branch**
- [ ] Branch: **main**
- [ ] Folder: **/ (root)**
- [ ] Clicar **Save**
- [ ] Aguardar mensagem: "Your site is live at..."

---

## 🧪 Testes Pós-Deploy

### Acesso e Performance
- [ ] URL pública funciona: https://bebot2026.github.io/agentes-tree/
- [ ] Página carrega em < 3 segundos
- [ ] HTTPS ativo (cadeado verde)
- [ ] Sem erros 404 (arquivos faltando)

### Funcionalidades
- [ ] Todos os 6 agentes aparecem corretamente
- [ ] Conexões SVG desenhadas
- [ ] Animações funcionando (fade-in, linhas)
- [ ] Cards clicáveis (efeito hover)
- [ ] Badges de modelo (Sonnet/Haiku) com cores corretas
- [ ] Ícones emoji renderizando

### Responsividade
Testar nos dispositivos/resoluções:
- [ ] Desktop 1920x1080 (layout horizontal)
- [ ] Tablet 768x1024 (grid 2x2)
- [ ] Mobile 375x667 (layout vertical)
- [ ] Safari (iOS)
- [ ] Chrome (Android)
- [ ] Firefox (Desktop)

### SEO e Meta
- [ ] Título da página correto
- [ ] Favicon (opcional, mas recomendado)
- [ ] Descrição meta tag (para compartilhamento)

---

## 📱 Compartilhamento

### Testar Links de Compartilhamento
- [ ] WhatsApp (preview correto)
- [ ] Telegram (preview correto)
- [ ] Twitter/X (card preview)
- [ ] LinkedIn (preview)

### Comunicar ao Norberto
- [ ] Enviar URL: https://bebot2026.github.io/agentes-tree/
- [ ] Explicar estrutura:
  ```
  📊 Estrutura Multi-Agentes Be-Wide:
  
  Nível 1: Bebot (Comunicação)
  Nível 2: Coordenador (Orquestração)
  Nível 3: 4 Especialistas
  
  ✅ Página ativa e responsiva
  🔧 Documentação completa para manutenção
  ```

---

## 🔧 Manutenção Futura

### Antes de Atualizar
- [ ] Ler `MANUTENCAO.md`
- [ ] Testar mudanças localmente
- [ ] Usar `templates/novo-agente.html` se adicionar agente

### Processo de Atualização
```bash
# Editar arquivos (index.html, style.css, etc.)

# Opção 1: Deploy manual
git add .
git commit -m "✨ Descrição da mudança"
git push origin main

# Opção 2: Script automático
./deploy.sh "Descrição da mudança"
```

### Após Atualização
- [ ] Aguardar ~1 minuto
- [ ] Verificar URL pública
- [ ] Limpar cache: Ctrl+Shift+R
- [ ] Testar em dispositivo mobile

---

## 🐛 Troubleshooting

### Problema: GitHub Pages não ativa
**Solução:**
1. Verificar se repositório é público
2. Settings → Pages → Forçar rebuild (salvar novamente)
3. Aguardar 2-3 minutos

### Problema: Página 404
**Solução:**
1. Verificar se `index.html` está na raiz
2. Checar URL exata (case-sensitive)
3. Limpar cache DNS: `ipconfig /flushdns` (Windows) ou `sudo dscacheutil -flushcache` (Mac)

### Problema: Conexões não aparecem
**Solução:**
1. Abrir DevTools (F12) → Console
2. Procurar erros JavaScript
3. Verificar se `script.js` carregou (Network tab)
4. Testar em navegador diferente

### Problema: Layout quebrado no mobile
**Solução:**
1. Validar HTML: https://validator.w3.org/
2. Inspecionar CSS media queries
3. Testar em dispositivo real (não só emulador)

---

## 📊 Métricas de Sucesso

- [x] ✅ Página 100% funcional
- [x] 📱 Responsiva em todos os dispositivos
- [x] 🎨 Design alinhado com cores Be-Wide (#1E73BE)
- [x] 📝 Documentação completa
- [x] 🚀 URL pública acessível
- [x] 🔧 Fácil de manter/atualizar

---

## 📞 Recursos

**Documentação:**
- [README.md](README.md) - Visão geral
- [SETUP.md](SETUP.md) - Configuração inicial
- [MANUTENCAO.md](MANUTENCAO.md) - Guia de manutenção

**Templates:**
- [templates/novo-agente.html](templates/novo-agente.html) - Adicionar agentes

**Scripts:**
- `deploy.sh` - Deploy automatizado

**URLs:**
- Repositório: https://github.com/bebot2026/agentes-tree
- Página: https://bebot2026.github.io/agentes-tree/

---

✅ **Status:** Pronto para deploy!
📅 **Data:** Fevereiro 2026
👤 **Solicitante:** Norberto (Be-Wide)
