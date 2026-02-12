# 🔧 Guia de Manutenção - Árvore de Agentes Be-Wide

## 📝 Atualizações Comuns

### 1. Adicionar Novo Agente

**Localização:** `index.html`

**Encontre a seção apropriada:**
- Nível 1 (Topo): `.level-1` - Interface/Comunicação
- Nível 2 (Meio): `.level-2` - Coordenação
- Nível 3 (Base): `.level-3` - Especialistas

**Template para novo agente:**
```html
<div class="agent-card specialist NOME-CLASSE" data-agent="id-unico">
    <div class="agent-icon">🆕</div>
    <h2>Nome do Agente</h2>
    <div class="agent-badge sonnet">Claude Sonnet</div>
    <!-- OU -->
    <div class="agent-badge haiku">Claude Haiku</div>
    
    <p class="agent-role">Função Principal</p>
    <p class="agent-description">Descrição breve do que faz</p>
</div>
```

**Adicione delay de animação em `style.css`:**
```css
.NOME-CLASSE { animation-delay: 0.9s; }
```

**As conexões são automáticas!** O JavaScript detecta e desenha.

---

### 2. Modificar Informações de Agente Existente

**Localização:** `index.html`

Encontre o agente pelo `data-agent` ou nome:

```html
<!-- Exemplo: Alterar função do Programador -->
<div class="agent-card specialist programmer" data-agent="programmer">
    <p class="agent-role">NOVA FUNÇÃO</p>
    <p class="agent-description">Nova descrição detalhada</p>
</div>
```

**Não altere:**
- `data-agent` (quebra conexões JavaScript)
- Estrutura das classes CSS

---

### 3. Trocar Ícone de um Agente

**Opção A: Emoji**
```html
<div class="agent-icon">🚀</div>
```

**Opção B: Usar Font Awesome** (adicione no `<head>` de index.html):
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- No card: -->
<div class="agent-icon">
    <i class="fas fa-robot"></i>
</div>
```

**Ícones sugeridos:**
- 💬 Comunicação
- 🎯 Coordenação
- 👨‍💻 Programação
- 🔍 Pesquisa
- 🎨 Design
- ✍️ Escrita
- 🤖 Automação
- 📊 Análise
- 🔐 Segurança

---

### 4. Alterar Cores do Tema

**Localização:** `style.css` - início do arquivo

```css
:root {
    --primary-blue: #1E73BE;     /* Cor principal Be-Wide */
    --dark-blue: #0D3B66;        /* Azul escuro */
    --light-blue: #4A9EE0;       /* Azul claro */
    --accent-blue: #E8F4FD;      /* Fundo suave */
    --sonnet-color: #9B59B6;     /* Badge Sonnet (roxo) */
    --haiku-color: #3498DB;      /* Badge Haiku (azul) */
}
```

**Troque valores hexadecimais:**
- Ferramenta: [Coolors.co](https://coolors.co/)
- Teste contraste: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

### 5. Mudar Modelo de um Agente (Sonnet ↔ Haiku)

**Localização:** `index.html`

```html
<!-- De Sonnet para Haiku: -->
<div class="agent-badge haiku">Claude Haiku</div>

<!-- De Haiku para Sonnet: -->
<div class="agent-badge sonnet">Claude Sonnet</div>
```

As cores mudam automaticamente!

---

### 6. Remover Agente

1. **Delete o bloco completo** em `index.html`:
```html
<div class="agent-card ...">
    <!-- Todo o conteúdo -->
</div>
```

2. **Remova delay CSS** (opcional) em `style.css`:
```css
.nome-do-agente { animation-delay: 0.9s; } /* DELETE esta linha */
```

3. As conexões ajustam-se automaticamente.

---

## 🎨 Personalizações Avançadas

### Adicionar Modal com Detalhes

**1. Adicione HTML antes de `</body>`:**
```html
<div id="modal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2 id="modal-title"></h2>
        <p id="modal-description"></p>
    </div>
</div>
```

**2. Adicione CSS em `style.css`:**
```css
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
}
.modal-content {
    background: white;
    margin: 10% auto;
    padding: 30px;
    max-width: 600px;
    border-radius: 16px;
}
.close {
    float: right;
    font-size: 28px;
    cursor: pointer;
}
```

**3. Adicione JavaScript em `script.js`:**
```javascript
cards.forEach(card => {
    card.addEventListener('click', function() {
        const modal = document.getElementById('modal');
        const title = this.querySelector('h2').textContent;
        const desc = this.querySelector('.agent-description').textContent;
        
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-description').textContent = desc;
        modal.style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});
```

---

### Adicionar Estatísticas

Adicione antes de `</main>` em `index.html`:

```html
<div class="stats">
    <div class="stat-item">
        <h3>6</h3>
        <p>Agentes Ativos</p>
    </div>
    <div class="stat-item">
        <h3>2</h3>
        <p>Modelos IA</p>
    </div>
    <div class="stat-item">
        <h3>3</h3>
        <p>Níveis Hierárquicos</p>
    </div>
</div>
```

**Estilo:**
```css
.stats {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 60px;
}
.stat-item {
    text-align: center;
}
.stat-item h3 {
    font-size: 3rem;
    color: var(--primary-blue);
}
```

---

## 🚀 Publicar Mudanças

### Depois de editar os arquivos:

```bash
cd /Users/bebot/.openclaw/workspace/agentes-tree

# Veja as mudanças
git status

# Adicione arquivos modificados
git add .

# Commit com mensagem descritiva
git commit -m "✨ Descrição da mudança"

# Envie para GitHub
git push origin main
```

**Aguarde ~1 minuto** e verifique:
https://bebot2026.github.io/agentes-tree/

**Limpe cache do navegador** se não atualizar: `Ctrl+Shift+R` (ou `Cmd+Shift+R` no Mac)

---

## 🐛 Troubleshooting

### Conexões não aparecem
- **Solução:** Abra DevTools (F12) → Console → procure erros
- Verifique se `data-agent` está único para cada card
- Recarregue a página

### Layout quebrado
- **Solução:** Valide HTML em https://validator.w3.org/
- Verifique se fechou todas as tags `<div>`
- Teste em modo responsivo (F12 → Toggle device toolbar)

### Animações não funcionam
- **Solução:** Verifique se classes CSS estão corretas
- Inspecione elemento (clique direito → Inspecionar)
- Confirme que `script.js` está carregando (sem erros 404)

### GitHub Pages não atualiza
- **Solução 1:** Settings → Pages → Salve novamente (força rebuild)
- **Solução 2:** Aguarde 2-3 minutos
- **Solução 3:** Limpe cache: `Ctrl+Shift+Delete`

---

## 📞 Suporte

**Documentação oficial:**
- HTML: https://developer.mozilla.org/pt-BR/docs/Web/HTML
- CSS: https://developer.mozilla.org/pt-BR/docs/Web/CSS
- JavaScript: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
- GitHub Pages: https://docs.github.com/pt/pages

**Testes locais:**
```bash
# Python
python -m http.server 8000

# Acesse: http://localhost:8000
```

---

✅ **Página criada e documentada!**
Qualquer dúvida, consulte README.md ou este guia.
