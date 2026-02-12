#!/bin/bash

# 🚀 Script de Deploy Automático - Árvore de Agentes Be-Wide
# Uso: ./deploy.sh "Mensagem do commit"

set -e  # Para em caso de erro

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║  🚀 Deploy Árvore de Agentes Be-Wide  ║${NC}"
echo -e "${BLUE}╔════════════════════════════════════════╝${NC}"
echo ""

# Verifica se está no diretório correto
if [ ! -f "index.html" ]; then
    echo -e "${RED}❌ Erro: Execute este script na pasta agentes-tree${NC}"
    exit 1
fi

# Mensagem do commit (usa argumento ou padrão)
COMMIT_MSG="${1:-✨ Atualização da árvore de agentes}"

echo -e "${YELLOW}📝 Mensagem do commit:${NC} $COMMIT_MSG"
echo ""

# Mostra arquivos modificados
echo -e "${BLUE}📋 Arquivos modificados:${NC}"
git status --short
echo ""

# Confirmação
read -p "$(echo -e ${YELLOW}Prosseguir com deploy? [y/N]:${NC} )" -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${RED}❌ Deploy cancelado${NC}"
    exit 1
fi

# Git add
echo -e "${BLUE}➕ Adicionando arquivos...${NC}"
git add .

# Git commit
echo -e "${BLUE}💾 Criando commit...${NC}"
git commit -m "$COMMIT_MSG" || {
    echo -e "${YELLOW}⚠️  Nenhuma mudança para commitar${NC}"
    exit 0
}

# Git push
echo -e "${BLUE}🚀 Enviando para GitHub...${NC}"
git push origin main

echo ""
echo -e "${GREEN}✅ Deploy concluído com sucesso!${NC}"
echo ""
echo -e "${BLUE}🌐 Página será atualizada em ~1 minuto em:${NC}"
echo -e "   ${GREEN}https://bebot2026.github.io/agentes-tree/${NC}"
echo ""
echo -e "${YELLOW}💡 Dica: Limpe o cache do navegador (Ctrl+Shift+R) se não atualizar${NC}"
echo ""
