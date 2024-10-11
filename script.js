//////////////// ======================================================================== CLASSES

class Menu {
    pergunta_1 = ["Você prefere jogar em casa ou em qualquer lugar", [1, "No meu quarto, em casa"], [2, "Qualquer lugar da casa"], [3, "Qualquer lugar, mesmo viajando"], [4, "Tanto Faz"]];
    pergunta_2 = ["Qual dispositivo você já usou para jogar?", [1, "Console de mesa ou portátil"], [2, "Computador ou Notebook"], [3, "Ambos"], [4, "Nenhum"]];
    pergunta_3 = ["Você valoriza mais no hardware?", [1, "Portabilidade"], [2, "Potência"], [3, "Jogar sem se preocupar com bateria"], [4, "Tanto faz"]];
    pergunta_4 = ["Você se importa com gráficos de última geração?", [1, "Sim, gosto de gráficos realistas"], [2, "Não, prefiro jogos mais minimalistas (Low Poly, Pixel Art)"], [3, "Ambos, se possível"], [4, "Tanto faz"]];

    pergunta_5 = ["Você gosta de jogos focados em narrativa?", [1, "Sim, gosto de histórias envolventes"], [2, "Não, prefiro jogos com mais ação do que história"], [3, "Ambos, se possível"], [4, "Tanto faz"]];
    pergunta_6 = ["Você se interessa por jogos de estratégia?", [1, "Sim, gosto de planejar e pensar estrategicamente"], [2, "Não, prefiro jogos mais dinâmicos e rápidos"], [3, "Ambos, se possível"], [4, "Tanto faz"]];
    pergunta_7 = ["Você prefere jogos de mundo aberto ou lineares?", [1, "Mundo aberto"], [2, "Lineares"], [3, "Sandbox (criação de coisas)"], [4, "Tanto faz"]];
    pergunta_8 = ["Você gosta de jogos com gráficos realistas ou com gráficos estilizados?", [1, "Gráficos realistas"], [2, "Gráficos estilizados (ex: pixel art)"], [3, "Visual Novel (imagens estáticas)"], [4, "Tanto faz"]];

    pergunta_9 = ["Você prefere jogar sozinho ou com outras pessoas?", [1, "Sozinho"], [2, "Com outras pessoas"], [3, "Ambos, se possível"], [4, "Tanto faz"]];
    pergunta_10 = ["Você gosta de competir com outros jogadores?", [1, "Sim, adoro competições"], [2, "Prefiro jogos sem competição"], [3, "Ambos, se possível"], [4, "Tanto faz"]];
    pergunta_11 = ["Você se interessa por jogos com grande comunidade online?", [1, "Sim, gosto de jogos populares"], [2, "Não, prefiro jogos mais focados em experiências pessoais"], [3, "Prefiro jogos sem uma comunidade específica"], [4, "Tanto faz"]];
    pergunta_12 = ["Você gosta de jogos com foco em colaboração em equipe?", [1, "Sim, gosto de jogar com time"], [2, "Prefiro jogar por conta própria contra todos"], [3, "Ambos, se possível"], [4, "Tanto faz"]];

    pergunta_atual = 0;
    resposta_atual = '';

    banco_de_dados_global = banquinho;

    gerarHTML(pergunta) {
        let html = `<p id="texto-perguntas"><strong>${this.pergunta_atual}) ${pergunta[0]}</strong></p><ul id="texto-perguntas"><br>`;
        for (let i = 1; i < pergunta.length; i++) {
            html += `<li>${pergunta[i][0]} - ${pergunta[i][1]}</li>`;
        }
        html += `</ul>`;
        return html;
    }

    comecarQuestionario() {
        let htmlContent = '';
        switch (this.pergunta_atual) {
            case 0:
                htmlContent = `<p id="texto-boas-vindas">Bem-vindo ao <br>
                <strong><u>Univille's VideogameRecomendations</u></strong>™!</p>
                <br>
                <br>
                <br>
                <p id="texto-boas-vindas">Clique em <strong>ENTER</strong> para iniciar.</p>`;
                break;
            case 1:
                htmlContent = this.gerarHTML(this.pergunta_1) + "<br><p id='respostaQ'>Resultado escolhida:</p>";
                break;
            case 2:
                htmlContent = this.gerarHTML(this.pergunta_2) + "<br><p id='respostaQ'>Resultado escolhida: </p>";
                break;
            case 3:
                htmlContent = this.gerarHTML(this.pergunta_3) + "<br><p id='respostaQ'>Resultado escolhida: </p>";
                break;
            case 4:
                htmlContent = this.gerarHTML(this.pergunta_4) + "<br><p id='respostaQ'>Resultado escolhida: </p>";
                break;
            case 5:
                htmlContent = this.gerarHTML(this.pergunta_5) + "<br><p id='respostaQ'>Resultado escolhida: </p>";
                break;
            case 6:
                htmlContent = this.gerarHTML(this.pergunta_6) + "<br><p id='respostaQ'>Resultado escolhida: </p>";
                break;
            case 7:
                htmlContent = this.gerarHTML(this.pergunta_7) + "<br><p id='respostaQ'>Resultado escolhida: </p>";
                break;
            case 8:
                htmlContent = this.gerarHTML(this.pergunta_8) + "<br><p id='respostaQ'>Resultado escolhida: </p>";
                break;
            case 9:
                htmlContent = this.gerarHTML(this.pergunta_9) + "<br><p id='respostaQ'>Resultado escolhida: </p>";
                break;
            case 10:
                htmlContent = this.gerarHTML(this.pergunta_10) + "<br><p id='respostaQ'>Resultado escolhida: </p>";
                break;
            case 11:
                htmlContent = this.gerarHTML(this.pergunta_11) + "<br><p id='respostaQ'>Resultado escolhida: </p>";
                break;  
            case 12:
                htmlContent = this.gerarHTML(this.pergunta_12) + "<p id='respostaQ'>Resultado escolhida: </p>";
                break;  
            case 13:
                    setTimeout(() => {
                        htmlContent = '<div id="loader" class"inconsolata-normal"></div>';
                        document.getElementById('TELA_DO_DISPOSITIVO').innerHTML = htmlContent;
                    }, 500);

                    
                    setTimeout(() => {
                        var paginas = maquininha.gerarRelatorioFinal();
                        htmlContent = "<p>Olhe no console o Relatório!</p>";
                        document.getElementById('TELA_DO_DISPOSITIVO').innerHTML = paginas[0];
                    }, 3500);
                    break;
            default:
                htmlContent = `<p id="texto-perguntas">Fim do questionário!</p>`;
                break;
        }

        document.getElementById('TELA_DO_DISPOSITIVO').innerHTML = htmlContent;

        this.pergunta_atual++;
    }

    atualizarResultado(pergunta, resposta) {
        this.resposta_atual = Number(resposta);
        const resultadoParagrafo = document.querySelector("#respostaQ");
        if (resultadoParagrafo) {
            resultadoParagrafo.textContent = `Resultado escolhido: ${resposta}`;
        }
        banquinho.pegarRespostaEAtualizarHistorico(pergunta, resposta);
        maquininha.pegarRespostaEAtualizarContadores(pergunta, resposta);
    }
}


class EditorDeRegras{
    criadorDeRegras(pergunta, resposta, conclusao){
        var regra = [pergunta, resposta, conclusao];
        return regra
    }

    editorDeRegras(pergunta, resposta, conclusao){
        var nova_regra = [pergunta, resposta, conclusao]
        return nova_regra;
    }
}

class BancoDeDadosGlobal{
    contador_console_portatil = 0;
    contador_console_de_mesa = 0;
    contador_computador = 0;
    contador_genero = 0;
    contador_modo = 0;

    contador_historia = 0;
    contador_acao = 0;
    contador_mundo_aberto = 0;
    contador_linear = 0;
    contador_realista = 0;
    contador_estilizado = 0;

    contador_solo = 0;
    contador_coop = 0;

    contador_comp_time = 0;
    contador_comp_solo = 0;


    respostas_do_questionario = [];
    pegarRespostaEAtualizarHistorico(pergunta, resposta){
        var evento = [pergunta, resposta];
        this.respostas_do_questionario.push(evento);
    }
    pegarRespostaEAtualizarContadores(atualizar_ccp, atualizar_ccm, atualizar_cpc){
        this.contador_console_portatil += atualizar_ccp;
        this.contador_console_de_mesa += atualizar_ccm;
        this.contador_computador += atualizar_cpc;
    }

    pegarRespostaEAtualizarContadoresGEN(atualizar_gen){
        this.contador_genero += atualizar_gen;
    }
    pegarRespostaEAtualizarContadoresMOD(atualizar_mod){
        this.contador_modo += atualizar_mod;
    }

    pegarRespostaParaRelatorioFinal(pergunta, resposta){
        var n_pergunta = Number(pergunta);
        var n_resposta = Number(resposta);
                
            switch (n_pergunta){
                case 5:
                    if(n_resposta === 1){
                        this.contador_historia += 2;
                    } else if(n_resposta === 2){
                        this.contador_acao += 2;
                    } else{
                        this.contador_historia++;
                        this.contador_acao++;
                    }
                    break
                case 6:
                    if(n_resposta === 1){
                        this.contador_historia += 2;
                    } else if(n_resposta === 2){
                        this.contador_acao += 2;
                    } else{
                        this.contador_historia++;
                        this.contador_acao++;
                    }
                    break
                case 7:
                    if(n_resposta === 1){
                        this.contador_mundo_aberto += 2;
                    } else if(n_resposta === 2){
                        this.contador_linear += 2;
                    } else{
                        this.contador_mundo_aberto++;
                        this.contador_linear++;
                    }
                    break
                case 8:
                    if(n_resposta === 1){
                        this.contador_realista += 2;
                    } else if(n_resposta === 2){
                        this.contador_estilizado += 2;
                    } else{
                        this.contador_realista++;
                        this.contador_estilizado++;
                    }
                    break
                case 9:
                    if(n_resposta === 1){
                        this.contador_solo += 2;
                    } else if(n_resposta === 2){
                        this.contador_coop += 2;
                    } else{
                        this.contador_solo++;
                        this.contador_coop++;
                    }
                    break
                case 10:
                    if(n_resposta === 1){
                        this.contador_solo += 2;
                    } else if(n_resposta === 2){
                        this.contador_coop += 2;
                    } else{
                        this.contador_solo++;
                        this.contador_coop++;
                    }
                    break
                case 11:
                    if(n_resposta === 1){
                        this.contador_coop += 2;
                    } else if(n_resposta === 2){
                        this.contador_solo += 2;
                    } else{
                        this.contador_coop++;
                        this.contador_solo++;
                    }
                    break
                case 12:
                    if(n_resposta === 1){
                        this.contador_comp_solo += 2;
                    } else if(n_resposta === 2){
                        this.contador_comp_time += 2;
                    } else{
                        this.contador_comp_time++;
                        this.contador_comp_solo++;
                    }
                    break
                default:
                    "uh oh";
                    break
            }
    }
}

class MaquinaDeInferencia {   

    encontrarRegra(base, pergunta, resposta) {

        var n_resposta = Number(resposta)

        for (let i = 0; i < base.lista_de_regras.length; i++) {

            if (base.lista_de_regras[i][0] === pergunta && base.lista_de_regras[i][1] === Number(n_resposta)) {
                return base.lista_de_regras[i][2];
            }
        }
        return 0;
    }

    pegarRespostaEAtualizarContadores(pergunta, resposta) {
        let atualizar_contador_portateis = 0;
        let atualizar_contador_mesa = 0;
        let atualizar_contador_pc = 0;
        let atualizar_contador_genero = 0;
        let atualizar_contador_modo = 0;

        if (pergunta >= 1 && pergunta <= 4) {

            atualizar_contador_portateis = this.encontrarRegra(base_portateis, pergunta, resposta);
            atualizar_contador_mesa = this.encontrarRegra(base_mesa, pergunta, resposta);
            atualizar_contador_pc = this.encontrarRegra(base_computador, pergunta, resposta);

            banquinho.pegarRespostaEAtualizarContadores(atualizar_contador_portateis, atualizar_contador_mesa, atualizar_contador_pc);
        } else if (pergunta >= 5 && pergunta <= 8) {
            atualizar_contador_genero = this.encontrarRegra(base_genmodo, pergunta, resposta);
            banquinho.pegarRespostaEAtualizarContadoresGEN(atualizar_contador_genero);
            banquinho.pegarRespostaParaRelatorioFinal(pergunta, resposta);
        } else if (pergunta >= 9 && pergunta <= 12) {
            atualizar_contador_modo = this.encontrarRegra(base_genmodo, pergunta, resposta);
            banquinho.pegarRespostaEAtualizarContadoresMOD(atualizar_contador_modo);
            banquinho.pegarRespostaParaRelatorioFinal(pergunta, resposta);
        }
    }

    gerarRelatorioFinal(){
        const plataformas = {
            "Console de Mesa": {
                "Singleplayer": {
                    "Mundo Aberto": {
                        "Ação e aventura": "Gears 5 (Xbox), Spiderman 2 (Playstation)",
                        "História e RPG": "Cyberpunk 2077 (Xbox, Playstation)"
                    },
                    "História Linear": {
                        "Ação e aventura": "Halo Infinite (Xbox), God of War Ragnarok (Playstation)",
                        "História e RPG": "Final Fantasy XV (Xbox, Playstation)"
                    }
                },
                "Multiplayer": {
                    "Solo": {
                        "Mundo Aberto": {
                            "Ação e aventura": "Fortnite (Xbox, Playstation)",
                            "História e RPG": "Diablo III: Eternal Collection (Xbox, Playstation)"
                        },
                        "História Linear": {
                            "Ação e aventura": "Cyberpunk 2077 (Xbox, Playstation)",
                            "História e RPG": "Elden Ring (Xbox, Playstation)"
                        }
                    },
                    "Time": {
                        "Mundo Aberto": {
                            "Ação e aventura": "Fortnite (Xbox, Playstation)",
                            "História e RPG": "Elder Scrolls Online (Xbox, Playstation)"
                        },
                        "História Linear": {
                            "Ação e aventura": "Final Fantasy XV (Xbox, Playstation)",
                            "História e RPG": "Final Fantasy XIV (Playstation)"
                        }
                    }
                }
            },
            "Console Portátil": {
                "Singleplayer": {
                    "Mundo Aberto": {
                        "Ação e aventura": "Zelda: Breath of the Wild (Switch), Monster Hunter Rise (Switch)",
                        "História e RPG": "Pokemon Legends: Arceus (Switch)"
                    },
                    "História Linear": {
                        "Ação e aventura": "Fire Emblem: Three Houses (Switch)",
                        "História e RPG": "Octopath Traveler (Switch)"
                    }
                },
                "Multiplayer": {
                    "Solo": {
                        "Mundo Aberto": {
                            "Ação e aventura": "Fortnite (Switch)",
                            "História e RPG": "Pokemon Sword and Shield (Switch)"
                        },
                        "História Linear": {
                            "Ação e aventura": "Splatoon 2 (Switch)",
                            "História e RPG": "Monster Hunter Generations (Switch)"
                        }
                    },
                    "Time": {
                        "Mundo Aberto": {
                            "Ação e aventura": "Fortnite (Switch)",
                            "História e RPG": "Monster Hunter Rise (Switch)"
                        },
                        "História Linear": {
                            "Ação e aventura": "Splatoon 3 (Switch)",
                            "História e RPG": "Pokemon Unite (Switch)"
                        }
                    }
                }
            },
            "Consoles de Mesa e Portáteis": {
                "Singleplayer": {
                    "Mundo Aberto": {
                        "Ação e aventura": "Zelda: Breath of the Wild (Switch), Gears 5 (Xbox)",
                        "História e RPG": "Cyberpunk 2077 (Xbox), Pokemon Legends: Arceus (Switch)"
                    },
                    "História Linear": {
                        "Ação e aventura": "Fire Emblem: Three Houses (Switch), Halo Infinite (Xbox)",
                        "História e RPG": "Octopath Traveler (Switch), Final Fantasy XV (Playstation)"
                    }
                },
                "Multiplayer": {
                    "Solo": {
                        "Mundo Aberto": {
                            "Ação e aventura": "Fortnite (Switch), Apex Legends (Xbox)",
                            "História e RPG": "Diablo III: Eternal Collection (Switch), Diablo III (Playstation)"
                        },
                        "História Linear": {
                            "Ação e aventura": "Cyberpunk 2077 (Playstation), Splatoon 2 (Switch)",
                            "História e RPG": "Elden Ring (Xbox), Monster Hunter Generations (Switch)"
                        }
                    },
                    "Time": {
                        "Mundo Aberto": {
                            "Ação e aventura": "Fortnite (Switch), Fortnite (Playstation)",
                            "História e RPG": "Elder Scrolls Online (Xbox), Monster Hunter Rise (Switch)"
                        },
                        "História Linear": {
                            "Ação e aventura": "Final Fantasy XV (Playstation), Splatoon 3 (Switch)",
                            "História e RPG": "Final Fantasy XIV (Playstation), Pokemon Unite (Switch)"
                        }
                    }
                }
            },
            "Computador": {
                "Singleplayer": {
                    "Mundo Aberto": {
                        "Ação e aventura": "Cyberpunk 2077, Red Dead Redemption 2",
                        "História e RPG": "The Witcher 3, Skyrim"
                    },
                    "História Linear": {
                        "Ação e aventura": "Half-Life: Alyx",
                        "História e RPG": "Divinity: Original Sin II"
                    }
                },
                "Multiplayer": {
                    "Solo": {
                        "Mundo Aberto": {
                            "Ação e aventura": "Fortnite, Apex Legends",
                            "História e RPG": "Diablo III"
                        },
                        "História Linear": {
                            "Ação e aventura": "Cyberpunk 2077",
                            "História e RPG": "Elden Ring"
                        }
                    },
                    "Time": {
                        "Mundo Aberto": {
                            "Ação e aventura": "Fortnite",
                            "História e RPG": "Elder Scrolls Online"
                        },
                        "História Linear": {
                            "Ação e aventura": "Final Fantasy XV",
                            "História e RPG": "Final Fantasy XIV"
                        }
                    }
                }
            },
            "Todos": {
                "Singleplayer": {
                    "Mundo Aberto": {
                        "Ação e aventura": "Gears 5 (Xbox), Zelda: Breath of the Wild (Switch)",
                        "História e RPG": "The Witcher 3 (PC), Cyberpunk 2077 (Xbox, Playstation)"
                    },
                    "História Linear": {
                        "Ação e aventura": "God of War (Playstation), Halo Infinite (Xbox)",
                        "História e RPG": "Final Fantasy XV (Playstation, Xbox)"
                    }
                },
                "Multiplayer": {
                    "Solo": {
                        "Mundo Aberto": {
                            "Ação e aventura": "Fortnite (Xbox, Playstation, Switch)",
                            "História e RPG": "Diablo III (Playstation, Xbox)"
                        },
                        "História Linear": {
                            "Ação e aventura": "Cyberpunk 2077 (Playstation, Xbox)",
                            "História e RPG": "Elden Ring (Playstation, Xbox)"
                        }
                    },
                    "Time": {
                        "Mundo Aberto": {
                            "Ação e aventura": "Fortnite (Xbox, Playstation, Switch)",
                            "História e RPG": "Elder Scrolls Online (Xbox, Playstation)"
                        },
                        "História Linear": {
                            "Ação e aventura": "Final Fantasy XV (Playstation, Xbox)",
                            "História e RPG": "Final Fantasy XIV (Playstation)"
                        }
                    }
                }
            }
        };
        
        var plataforma = null;
        var genero = null;
        var estilo = null;
        var navegacao = null;
        var modo = null;
        var jogos = null;
    
        if (banquinho.contador_console_de_mesa > banquinho.contador_console_portatil && banquinho.contador_console_de_mesa > banquinho.contador_computador) {
            plataforma = "Console de Mesa";
        } else if (banquinho.contador_console_portatil > banquinho.contador_console_de_mesa && banquinho.contador_console_portatil > banquinho.contador_computador) {
            plataforma = "Console Portátil";
        } else if (banquinho.contador_computador > banquinho.contador_console_de_mesa && banquinho.contador_computador > banquinho.contador_console_portatil) {
            plataforma = "Computador";
        } else {
            plataforma = "Consoles de Mesa e Portáteis";
        }
    
        if (banquinho.contador_acao > banquinho.contador_historia) {
            genero = 'Ação e aventura';
        } else if (banquinho.contador_historia > banquinho.contador_acao) {
            genero = 'História e RPG';
        } else {
            genero = 'Ação, aventura, história ou RPG';
        }
    
        if (banquinho.contador_mundo_aberto > banquinho.contador_linear) {
            navegacao = 'Mundo Aberto';
        } else if (banquinho.contador_linear > banquinho.contador_mundo_aberto) {
            navegacao = 'História Linear';
        } else {
            navegacao = 'Mundo aberto ou história linear';
        }
    
        if (banquinho.contador_solo > banquinho.contador_coop) {
            estilo = 'Singleplayer';
            modo = "Solo";
        } else if (banquinho.contador_coop > banquinho.contador_solo) {
            estilo = 'Multiplayer';
            if (banquinho.contador_comp_solo > banquinho.contador_comp_time) {
                modo = 'Competitivo Solo 1 contra todos';
            } else {
                modo = 'Competitivo Time 3x3 ou 5x5';
            }
        } else {
            estilo = 'Singleplayer ou Multiplayer';
            if (banquinho.contador_comp_solo > banquinho.contador_comp_time) {
                modo = 'Competitivo Solo 1 contra todos';
            } else {
                modo = 'Competitivo Time 3x3 ou 5x5';
            }
        }
    
        jogos = plataformas[plataforma]?.[estilo]?.[navegacao]?.[genero] || "Nenhum jogo encontrado para esta combinação.";
    
        var relatorioHTML_pagina_um = `
                <br>
                <table>
                <thead>
                    <tr>
                        <th colspan="2"><h2 id="page_number">Relatório | Página 1</h2></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="label-relatorio">Plataforma(s) mais indicado(s)</td>
                        <td>${plataforma}</td>
                    </tr>
                    <tr>
                        <td id="label-relatorio">Gênero(s) mais indicado(s)</td>
                        <td> ${genero}</td>
                    </tr>
                    <tr>
                        <td id="label-relatorio">Estilo de jogo:</td>
                        <td>${estilo}</td>
                    </tr>
                    <tr>
                        <td id="label-relatorio">Exploração:</td>
                        <td>${navegacao}</td>
                    </tr>
                    <tr>
                        <td id="label-relatorio">Modo de jogo:</td>
                        <td>${modo}</td>
                    </tr>
                    <tr>
                        <td id="label-relatorio"> Jogo(s) mais indicado(s):</td>
                        <td>${jogos}</td>
                    </tr>
                </tbody>
            </table>`;

            var relatorioHTML_pagina_dois = `
            <table id="tab-cumprida">
            <thead>
                <tr>
                    <th colspan="2"><h2 id="page_number">Relatório | Página 2</h2></th>
                </tr>
            </thead>
            <tbody>
                <tr><td colspan=2 id="label-relatorio">Pontuação Plataformas</td></tr>
                <tr>
                    <td>Contador console portátil:</td>
                    <td>${banquinho.contador_console_portatil}</td>
                </tr>
                <tr>
                    <td>Contador console mesa:</td>
                    <td>${banquinho.contador_console_de_mesa}</td>
                </tr>
                <tr>
                    <td>Contador computador:</td>
                    <td> ${banquinho.contador_computador}</td>
                </tr>
                <tr><td colspan=2 id="label-relatorio">Pontuação Características do(s) Jogo(s)</td></tr>
                <tr>
                    <td>Contador Jogos Focados em Ação:</td>
                    <td> ${banquinho.contador_acao}</td>
                </tr>
                <tr>
                    <td>Contador Jogos Focados em História</td>
                    <td>${banquinho.contador_historia}</td>
                </tr>
                <tr>
                    <td> Contador Jogos em Mundo Aberto</td>
                    <td>${banquinho.contador_mundo_aberto}</td>
                </tr>
                    <tr>
                    <td> Contador Jogos em Mundo Linear</td>
                    <td>${banquinho.contador_linear}</td>
                </tr>
                <tr>
                    <td> Contador Jogar Solo:</td>
                    <td>${banquinho.contador_solo}</td>
                </tr>
                <tr><td colspan=2 id="label-relatorio">Pontuação Modo(s) de Jogo</td></tr>
                <tr>
                    <td> Contador Jogar em Coop: </td>
                    <td>${banquinho.contador_coop}</td>
                </tr>
                <tr>
                    <td> Contador Comp Solo: </td>
                    <td>${banquinho.contador_comp_solo}</td>
                </tr>
                <tr>
                    <td> Contador Competir Solo: </td>
                    <td>${banquinho.contador_comp_solo}</td>
                </tr>
                <tr>
                    <td>Contador Competir Em Time:</td>
                    <td> ${banquinho.contador_comp_time}</td>
                </tr>
            </tbody>
        </table>`;

        return [relatorioHTML_pagina_um,relatorioHTML_pagina_dois] ;
    }
}

class BaseDeDadosConsolePortatil{
    lista_de_consoles = ["Nintendo Switch", "Steam Deck"]
    lista_de_jogos_0 = [["Zelda Breath of The Wild"],["Super Mario Odissey"]]
    lista_de_jogos_1 = [["Elden Ring"],["Cyberpunk 2077"]]

    lista_de_regras = [[1,1,0], [1,2,1], [1,3,2], [1,3,1],
                        [2,1,2], [2,2,0], [2,3,1], [2,4,0],
                        [3,1,2], [3,2,1], [3,3,0], [3,4,1],
                        [4,1,0], [4,2,2], [4,3,1], [4,4,1]];

    adicionarRegra(regra){
        this.lista_de_regras.push(regra)
    }

    atualizarRegra(indice_regra, nova_regra){
        this.lista_de_regras[indice_regra] = 0
        this.lista_de_regras[indice_regra] = nova_regra
    }

}

class BaseDeDadosConsoleDeMesa{
    lista_de_consoles = ["Xbox Series X", "Playstation 5"]
    lista_de_jogos_0 = [["Gears 5"],["Halo Infinite"]]
    lista_de_jogos_1 = [["God of War Ragnarok"],["Spider-man 2"]]


    lista_de_regras = [[1,1,1], [1,2,2], [1,3,0], [1,4,1],
                        [2,1,2], [2,2,0], [2,3,1], [2,4,1],
                        [3,1,0], [3,2,1], [3,3,2], [3,4,1],
                        [4,1,1], [4,2,0], [4,3,2], [4,4,1]];

    adicionarRegra(regra){
        this.lista_de_regras.push(regra)
    }

    atualizarRegra(indice_regra, nova_regra){
        this.lista_de_regras[indice_regra] = 0
        this.lista_de_regras[indice_regra] = nova_regra
    }

}

class BaseDeDadosComputador{
    lista_de_consoles = ["Computador de Mesa", "Notebook"]
    lista_de_jogos_0 = [["Crysis 3"],["Far Cry 6"]]


    lista_de_regras = [[1,1,2], [1,2,0], [1,3,0], [1,4,1],
                        [2,1,0], [2,2,2], [2,3,1], [2,4,0],
                        [3,1,0], [3,2,2], [3,3,1], [3,4,1],
                        [4,1,2], [4,2,1], [4,3,1], [4,4,1]];

    adicionarRegra(regra){
        this.lista_de_regras.push(regra)
    }

    atualizarRegra(indice_regra, nova_regra){
        this.lista_de_regras[indice_regra] = 0
        this.lista_de_regras[indice_regra] = nova_regra
    }

}

class BaseGeneroEModo{

lista_de_regras =  [[5,1,1], [5,2,0], [5,3,0], [5,4,0],
                    [6,1,1], [6,2,0], [6,3,0], [6,4,0],
                    [7,1,1], [7,2,0] ,[7,3,0], [7,4,0],
                    [8,1,1], [8,2,0] ,[8,3,0] ,[8,4,0],

                    [9,1,2], [9,2,0] ,[9,3,0] ,[9,4,0],
                    [10,1,2], [10,2,0] ,[10,3,0] ,[10,4,0],
                    [11,1,2], [11,2,0], [11,3,0] ,[11,4,0],
                    [12,1,2], [12,2,0], [12,3,0] ,[12,4,0]];


    adicionarRegra(regra){
        this.lista_de_regras.push(regra)
    }

    atualizarRegra(indice_regra, nova_regra){
        this.lista_de_regras[indice_regra] = 0
        this.lista_de_regras[indice_regra] = nova_regra
    }
}

//////////////// ======================================================================== CLASSES INSTANCIADAS
var menuzin = new Menu();
var banquinho = new BancoDeDadosGlobal();
var editorzin = new EditorDeRegras();
var base_portateis = new BaseDeDadosConsolePortatil();
var base_mesa = new BaseDeDadosConsoleDeMesa();
var base_computador = new BaseDeDadosComputador();
var base_genmodo = new BaseGeneroEModo();
var maquininha = new MaquinaDeInferencia();

//////////////// ======================================================================== OBSERVADORES DE BOTÕES

document.getElementById('START').addEventListener('click', function() {

    document.getElementById('TELA_DO_DISPOSITIVO').style.backgroundImage = 
    'radial-gradient(circle, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.5) 70%)';

    setTimeout(() => {
        htmlContent = '<div id="turning-on" class"inconsolata-normal"></div>';
        document.getElementById('TELA_DO_DISPOSITIVO').innerHTML = htmlContent;
    }, 0);

    
    setTimeout(() => {
        if (menuzin.pergunta_atual == 0) {
            menuzin.comecarQuestionario();
        } else {
            document.getElementById('START').disabled = true;
        }
    }, 2000);
    
});

document.getElementById('ENTER').addEventListener('click', function() {
    menuzin.comecarQuestionario();
});

const optionButtons = document.querySelectorAll('#OPTIONS .BTN');

optionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonValue = this.value;
        menuzin.atualizarResultado((menuzin.pergunta_atual - 1), buttonValue);
    });
});

const nextButton = document.getElementById('LEFT');


nextButton.addEventListener('click', () => {
        var paginas = maquininha.gerarRelatorioFinal();
        htmlContent = "<p>Olhe no console o Relatório!</p>";
        document.getElementById('TELA_DO_DISPOSITIVO').innerHTML = paginas[0]; 
    });

const backButton = document.getElementById('RIGHT');

backButton.addEventListener('click', () => {
        var paginas = maquininha.gerarRelatorioFinal();
        htmlContent = "<p>Olhe no console o Relatório!</p>";
        document.getElementById('TELA_DO_DISPOSITIVO').innerHTML = paginas[1];
    });


    const upButton = document.getElementById('UP');

    upButton.addEventListener('click', () => {
        setTimeout(() => {
            htmlContent = '<div id="loader" class"inconsolata-normal"></div>';
            document.getElementById('TELA_DO_DISPOSITIVO').innerHTML = htmlContent;
        }, 500);

        setTimeout(() => {
            var paginas = maquininha.gerarRelatorioFinal();
            htmlContent = "<p>Olhe no console o Relatório!</p>";
            document.getElementById('TELA_DO_DISPOSITIVO').innerHTML = paginas[0];
        }, 3500);
        });