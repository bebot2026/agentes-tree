// Função para desenhar conexões entre agentes
function drawConnections() {
    const svg = document.getElementById('connections');
    const bebot = document.querySelector('[data-agent="bebot"]');
    const coordinator = document.querySelector('[data-agent="coordinator"]');
    const specialists = document.querySelectorAll('.specialist');
    
    if (!bebot || !coordinator || !svg) return;
    
    // Limpa conexões existentes
    svg.innerHTML = '';
    
    // Função auxiliar para obter o centro de um elemento
    function getCenter(element) {
        const rect = element.getBoundingClientRect();
        const containerRect = svg.parentElement.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2 - containerRect.left,
            y: rect.top + rect.height / 2 - containerRect.top
        };
    }
    
    // Função para criar uma linha com seta
    function createConnection(from, to, delay = 0) {
        const fromCenter = getCenter(from);
        const toCenter = getCenter(to);
        
        // Calcula ponto de controle para curva suave
        const controlY = (fromCenter.y + toCenter.y) / 2;
        
        // Cria path com curva bezier
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const d = `M ${fromCenter.x} ${fromCenter.y} Q ${fromCenter.x} ${controlY}, ${toCenter.x} ${toCenter.y}`;
        
        path.setAttribute('d', d);
        path.setAttribute('class', 'connection-line');
        path.style.animationDelay = `${delay}s`;
        
        svg.appendChild(path);
        
        // Adiciona seta no final
        const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        const angle = Math.atan2(toCenter.y - controlY, toCenter.x - fromCenter.x);
        const arrowSize = 8;
        
        const point1 = {
            x: toCenter.x,
            y: toCenter.y
        };
        const point2 = {
            x: toCenter.x - arrowSize * Math.cos(angle - Math.PI / 6),
            y: toCenter.y - arrowSize * Math.sin(angle - Math.PI / 6)
        };
        const point3 = {
            x: toCenter.x - arrowSize * Math.cos(angle + Math.PI / 6),
            y: toCenter.y - arrowSize * Math.sin(angle + Math.PI / 6)
        };
        
        arrow.setAttribute('points', `${point1.x},${point1.y} ${point2.x},${point2.y} ${point3.x},${point3.y}`);
        arrow.setAttribute('class', 'connection-arrow');
        
        svg.appendChild(arrow);
    }
    
    // Desenha conexão Bebot -> Coordenador
    createConnection(bebot, coordinator, 0.2);
    
    // Desenha conexões Coordenador -> Especialistas
    specialists.forEach((specialist, index) => {
        createConnection(coordinator, specialist, 0.4 + index * 0.1);
    });
}

// Interatividade dos cards
function setupCardInteractivity() {
    const cards = document.querySelectorAll('.agent-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active de todos os cards
            cards.forEach(c => c.classList.remove('active'));
            
            // Adiciona active ao card clicado
            this.classList.add('active');
            
            // Можно adicionar modal ou painel lateral com mais informações
            const agentName = this.querySelector('h2').textContent;
            const agentRole = this.querySelector('.agent-role').textContent;
            const agentModel = this.querySelector('.agent-badge').textContent;
            
            console.log(`Agente selecionado: ${agentName} (${agentModel}) - ${agentRole}`);
        });
    });
}

// Atualiza as conexões quando a janela é redimensionada
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        drawConnections();
    }, 250);
});

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Aguarda um pouco para garantir que os elementos estão renderizados
    setTimeout(() => {
        drawConnections();
        setupCardInteractivity();
    }, 100);
});

// Adiciona efeito parallax suave no mouse (opcional)
document.addEventListener('mousemove', function(e) {
    const cards = document.querySelectorAll('.agent-card');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    cards.forEach((card, index) => {
        const speed = (index + 1) * 2;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        card.style.transform = `translate(${x}px, ${y}px)`;
    });
});
