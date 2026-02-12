# 🚀 Setup do Repositório GitHub

Os arquivos da página já foram criados localmente em:
`/Users/bebot/.openclaw/workspace/agentes-tree/`

## 📝 Passos para Publicar no GitHub

### Opção 1: Via GitHub Web Interface (Mais Simples)

1. **Criar o repositório no GitHub:**
   - Acesse: https://github.com/new
   - Repository name: `agentes-tree`
   - Owner: `bebot2026`
   - Description: `🤖 Visualização da estrutura hierárquica do sistema multi-agentes Be-Wide`
   - Public: ✅
   - **NÃO** inicialize com README, .gitignore ou license
   - Clique em "Create repository"

2. **Fazer push dos arquivos:**
   ```bash
   cd /Users/bebot/.openclaw/workspace/agentes-tree
   git remote add origin https://github.com/bebot2026/agentes-tree.git
   git branch -M main
   git push -u origin main
   ```

3. **Ativar GitHub Pages:**
   - No repositório, vá em **Settings**
   - Menu lateral: **Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / folder: **/ (root)**
   - Clique em **Save**

4. **Aguardar deploy (~1-2 minutos)**
   - A URL será: https://bebot2026.github.io/agentes-tree/
   - Verifique o status em Actions (se habilitado)

### Opção 2: Via GitHub CLI (Requer Autenticação)

1. **Autenticar GitHub CLI:**
   ```bash
   gh auth login
   ```
   - Escolha: GitHub.com
   - Protocol: HTTPS
   - Authenticate with: Browser (ou Token)

2. **Criar repositório e fazer push:**
   ```bash
   cd /Users/bebot/.openclaw/workspace/agentes-tree
   gh repo create bebot2026/agentes-tree --public --source=. --remote=origin --push \
     --description="🤖 Visualização da estrutura hierárquica do sistema multi-agentes Be-Wide"
   ```

3. **Ativar GitHub Pages:**
   ```bash
   gh api repos/bebot2026/agentes-tree/pages \
     --method POST \
     -f source[branch]=main \
     -f source[path]=/
   ```

### Opção 3: Criar Manualmente e Upload

1. Crie o repositório em: https://github.com/new
2. Faça upload dos arquivos via interface web:
   - index.html
   - style.css
   - script.js
   - README.md
3. Ative Pages em Settings → Pages

## ✅ Verificação

Após publicar, teste:
- ✅ Repositório visível: https://github.com/bebot2026/agentes-tree
- ✅ Página funcionando: https://bebot2026.github.io/agentes-tree/
- ✅ Design responsivo (teste no mobile)
- ✅ Conexões entre agentes aparecendo
- ✅ Interatividade dos cards funcionando

## 🔧 Solução de Problemas

**Se GitHub Pages não ativar:**
- Verifique se o repositório é público
- Confirme que index.html está na raiz do repositório
- Em Settings → Pages, force rebuild selecionando branch novamente

**Se a página não carregar:**
- Aguarde 1-2 minutos após ativar Pages
- Limpe cache do navegador (Ctrl+Shift+R)
- Verifique Actions para erros de deploy

**Se as conexões não aparecerem:**
- Abra console do navegador (F12)
- Verifique se há erros JavaScript
- Teste em navegador diferente

## 📧 Próximos Passos

1. ✅ Criar repositório no GitHub
2. ✅ Fazer push dos arquivos
3. ✅ Ativar GitHub Pages
4. ✅ Testar a URL pública
5. 📧 Enviar URL para Norberto

---

**Arquivos prontos em:**
`/Users/bebot/.openclaw/workspace/agentes-tree/`

**URL final esperada:**
https://bebot2026.github.io/agentes-tree/
