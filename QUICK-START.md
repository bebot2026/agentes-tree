# ⚡ Quick Start - 3 Minutos para Deploy

## 🎯 Objetivo
Colocar a Árvore de Agentes Be-Wide online em **< 5 minutos**.

---

## 📋 Pré-requisitos
- ✅ Conta GitHub (bebot2026)
- ✅ Git instalado
- ✅ Arquivos criados em: `/Users/bebot/.openclaw/workspace/agentes-tree/`

---

## 🚀 3 Passos Rápidos

### 1️⃣ Criar Repositório (2 min)

**Via Browser:**
1. Abra: https://github.com/new
2. Preencha:
   - Repository name: `agentes-tree`
   - Public: ✅
   - Initialize: ❌ (deixe desmarcado)
3. Clique **Create repository**

### 2️⃣ Fazer Push (1 min)

```bash
cd /Users/bebot/.openclaw/workspace/agentes-tree
git remote add origin https://github.com/bebot2026/agentes-tree.git
git push -u origin main
```

### 3️⃣ Ativar GitHub Pages (1 min)

1. No repo: **Settings** → **Pages**
2. Branch: **main** → **Save**
3. Aguarde 1 minuto

✅ **Pronto!** Acesse: https://bebot2026.github.io/agentes-tree/

---

## 🔥 Deploy Rápido (Atualizações Futuras)

Após editar arquivos:

```bash
./deploy.sh "Descrição da mudança"
```

Ou manualmente:
```bash
git add .
git commit -m "Descrição"
git push
```

---

## 📱 Teste Rápido

Após deploy, verifique:
- [ ] URL abre: https://bebot2026.github.io/agentes-tree/
- [ ] 6 agentes aparecem
- [ ] Conexões visíveis
- [ ] Funciona no mobile

---

## 🆘 Problemas Comuns

**GitHub Pages não ativa:**
→ Aguarde 2 minutos, recarregue Settings → Pages

**Erro no push:**
→ Verifique se criou o repositório corretamente
→ Confirme que não marcou "Initialize with README"

**Página 404:**
→ Aguarde propagação (~1 minuto)
→ Limpe cache: Ctrl+Shift+R

---

## 📚 Documentação Completa

- **Visão geral:** [README.md](README.md)
- **Setup detalhado:** [SETUP.md](SETUP.md)
- **Manutenção:** [MANUTENCAO.md](MANUTENCAO.md)
- **Checklist:** [CHECKLIST.md](CHECKLIST.md)
- **Resumo:** [RESUMO-ENTREGA.md](RESUMO-ENTREGA.md)

---

⏱️ **Tempo total:** ~5 minutos  
🎉 **Resultado:** Página web online e funcional
