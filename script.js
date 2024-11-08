document.addEventListener('DOMContentLoaded', () => {
    const jukeData = {
        categories: {
            exterior: {
                name: "Exterior",
                features: [
                    {name: "Faróis Full LED: frente, trás e de nevoeiro traseiros (com ajuste manual)", ACENTA: "Sim", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Antena tubarão", ACENTA: "Sim", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Vidros escurecidos, corte UV do para-brisas e desembaciador do vidro traseiro", ACENTA: "Sim", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Espelhos retrovisores exteriores ajustáveis eletricamente na cor da carroçaria com indicadores de mudança de direção integrados", ACENTA: "Não", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Pintura Two-Tone", ACENTA: "Não", "N-CONNECTA": "Não", TEKNA: "Não", "N-DESIGN": "Sim", "N-SPORT": "Não"},
                    {name: "Acabamentos exteriores em Satin Dark Grey", ACENTA: "Não", "N-CONNECTA": "Não", TEKNA: "Não", "N-DESIGN": "Não", "N-SPORT": "Sim"}
                ]
            },
            interior: {
                name: "Interior",
                features: [
                    {name: "Ecrã Touch de 12.3\" com Rádio, DAB, Bluetooth, Reconhecimento de Voz, wireless Android Auto & Apple CarPlay", ACENTA: "Sim", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Computador de Bordo com ecrã TFT em cor de 7\"", ACENTA: "Sim", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Ar condicionado automático para motorização híbrida, ar condicionado manual para motorização a gasolina", ACENTA: "Híbrido", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Sistema de som Bose", ACENTA: "Não", "N-CONNECTA": "Não", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Carregador Wireless", ACENTA: "Não", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Sistema de Navegação", ACENTA: "Não", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Material dos Bancos: Tecido, Mélange, Pele Sintética, Pele/Alcantara, Pele/PVC ICON", ACENTA: "Tecido", "N-CONNECTA": "Mélange", TEKNA: "Pele Sintética", "N-DESIGN": "Pele/Alcantara", "N-SPORT": "Pele/PVC ICON"},
                    {name: "Volante em Smooth Leather", ACENTA: "Não", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Iluminação ambiente em todo o habitáculo", ACENTA: "Não", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"}
                ]
            },
            seguranca: {
                name: "Segurança",
                features: [
                    {name: "Câmera de visão traseira", ACENTA: "Sim", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Câmera inteligente de visão 360º com deteção de objetos em movimento", ACENTA: "Não", "N-CONNECTA": "Não", TEKNA: "Sim", "N-DESIGN": "Não", "N-SPORT": "Não"},
                    {name: "Cruise Control & Limitador de Velocidade", ACENTA: "Sim", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Sistema anti-colisão frontal com Assistência em cruzamentos e reconhecimento de peões e ciclistas", ACENTA: "Sim", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Sensores de estacionamento: dianteiro e traseiro", ACENTA: "Não", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Pro Pilot MT (Assistência à manutenção na faixa de rodagem)", ACENTA: "Não", "N-CONNECTA": "Não", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Alerta Inteligente de Fadiga do condutor (DAA)", ACENTA: "Não", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Identificador de sinais de trânsito", ACENTA: "Não", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Assistente Inteligente de Manutenção de Faixa", ACENTA: "Não", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"}
                ]
            },
            motorizacao: {
                name: "Motorização",
                features: [
                    {name: "Motor a Gasolina 1.0L", ACENTA: "Sim", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Motorização Híbrida", ACENTA: "Não", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "e-Pedal Step (aceleração e desaceleração com um único pedal)", ACENTA: "Não", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Caixa de velocidades automática multi-modo de baixa fricção", ACENTA: "Não", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"}
                ]
            },
            conectividade: {
                name: "Conectividade",
                features: [
                    {name: "Ecrã Touch de 12.3\" com Rádio, DAB, Bluetooth, Reconhecimento de Voz, wireless Android Auto & Apple CarPlay", ACENTA: "Sim", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Computador de Bordo com ecrã TFT em cor de 12.3\"", ACENTA: "Sim", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"},
                    {name: "Chave Inteligente com funções de walk away auto lock e desbloqueio por aproximação", ACENTA: "Não", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"}
                ]
            },
            espaco: {
                name: "Espaço",
                features: [
                    {name: "Capacidade da Bagageira (litros)", ACENTA: "422", "N-CONNECTA": "422", TEKNA: "422", "N-DESIGN": "422", "N-SPORT": "422"}
                ]
            },
            cores: {
                name: "Cores",
                features: [
                    {name: "Opções de Cores Disponíveis", ACENTA: "Cinza, Preto", "N-CONNECTA": "Cinza, Preto, Branco", TEKNA: "Cinza, Preto, Branco, Vermelho", "N-DESIGN": "Cinza, Preto, Branco, Vermelho, Azul", "N-SPORT": "Cinza, Preto, Vermelho"}
                ]
            },
            acessorios: {
                name: "Acessórios",
                features: [
                    {name: "Suporte para bicicletas", ACENTA: "Opcional", "N-CONNECTA": "Opcional", TEKNA: "Opcional", "N-DESIGN": "Opcional", "N-SPORT": "Opcional"},
                    {name: "Tapetes de borracha", ACENTA: "Sim", "N-CONNECTA": "Sim", TEKNA: "Sim", "N-DESIGN": "Sim", "N-SPORT": "Sim"}
                ]
            }
        }
    };

    function updateTable() {
        const category = document.getElementById('categoryFilter').value;
        const version1 = document.getElementById('version1').value;
        const version2 = document.getElementById('version2').value;
        const searchTerm = document.getElementById('searchFeature').value.toLowerCase();

        let tableHtml = `<table class="comparison-table">
            <tr>
                <th>Característica</th>`;

        let versions = [];
        if (version1 === 'ALL' || version2 === 'ALL') {
            versions = ["ACENTA", "N-CONNECTA", "TEKNA", "N-DESIGN", "N-SPORT"];
        } else {
            versions = [version1, version2];
        }

        versions.forEach(version => {
            tableHtml += `<th>${version}</th>`;
        });

        tableHtml += `</tr>`;

        for (const categoryKey in jukeData.categories) {
            if (category === 'all' || category === categoryKey) {
                const categoryData = jukeData.categories[categoryKey];
                
                const filteredFeatures = categoryData.features.filter(feature => 
                    feature.name.toLowerCase().includes(searchTerm)
                );

                if (filteredFeatures.length > 0) {
                    tableHtml += `
                        <tr class="category-header">
                            <td colspan="${versions.length + 1}">${categoryData.name}</td>
                        </tr>
                    `;

                    filteredFeatures.forEach(feature => {
                        tableHtml += `<tr><td>${feature.name}</td>`;
                        versions.forEach(version => {
                            tableHtml += `<td class="${feature[version] === 'Sim' ? 'feature-present' : 'feature-absent'}">${feature[version]}</td>`;
                        });
                        tableHtml += `</tr>`;
                    });
                }
            }
        }

        tableHtml += '</table>';
        document.getElementById('tableContainer').innerHTML = tableHtml;
    }

    // Adicionar event listeners
    document.getElementById('categoryFilter').addEventListener('change', updateTable);
    document.getElementById('version1').addEventListener('change', updateTable);
    document.getElementById('version2').addEventListener('change', updateTable);
    document.getElementById('searchFeature').addEventListener('input', updateTable);

    // Inicializar tabela
    updateTable();
});
