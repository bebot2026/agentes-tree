# 🤖 Árvore de Agentes Be-Wide - Organização On-Demand

Visualização da nova estrutura hierárquica com **sub-agentes temporários spawnados por tarefa**.

## 🌐 Demo

**URL:** [https://bebot2026.github.io/agentes-tree/](https://bebot2026.github.io/agentes-tree/)

## 📋 Nova Estrutura

### Gateway & Coordinator
- **Bebot** (Grok 4.1-fast) - Fala com equipa, coordena, spawna sub-agentes para tarefas.

### Sub-Agentes Temporários (On-Demand)
| Agente | Modelo | Função |
|--------|--------|--------|
| **Assistente** | MiniMax M2.5 | Assistente geral (default para tarefas simples) |
| **Programador** | GPT-5.2-Codex | Programação avançada/apps |
| **Especialista SEO** | Claude Sonnet 4.5 | Auditorias/estratégias SEO |
| *(Mais a definir)* | - | - |

**Fluxo:** Bebot → Spawn sub-agente → Resultado → Bebot responde.

## 🚀 Como Usar
Bebot spawna automaticamente baseado na tarefa (ex: \"auditoria SEO\" → Sonnet).

## 🛠️ Atualizar
Edita `index.html` + commit/push → GitHub Pages atualiza em ~1min.

**Última atualização:** 13 Fev 2026