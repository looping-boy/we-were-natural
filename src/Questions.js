
import Submit from "./Submit";
import Question from "./Question.js";
import React, { useState } from "react";
export const CheckContext = React.createContext([{}, () => { }])
export const CounterCheckContext = React.createContext([{}, () => { }])

export const Questions = () => {

    const [check, setCheck] = useState(false)
    const [counterCheck, setCounterCheck] = useState(0)

    const listQuestion = [
        {
            name: "De quelle couleur est ta caisse ?",
            reponses: {
                rep1: "Bleu",
                rep2: "Blanche",
                rep3: "Marron chelou"
            }
        },
        {
            name: "De quel coté se situe ton réservoir ?",
            reponses: {
                rep1: "A gauche",
                rep2: "A droite",
                rep3: "Il y a pas de réservoir, c'est une Tesla"
            }
        },
        {
            name: "T'avais quoi dans ta caisse ?",
            reponses: {
                rep1: "Un chien",
                rep2: "Un chat",
                rep3: "Une vielle truite morte"
            }
        },
        {
            name: "Ta voiture carbure à quel carburant ?",
            reponses: {
                rep1: "Au diesel",
                rep2: "Au Sans Plomb",
                rep3: "C'est une Tesla, il y a pas de carburant, t'es con ou quoi ?"
            }
        },
        {
            name: "De quand date ta voiture ?",
            reponses: {
                rep1: "2003",
                rep2: "2008",
                rep3: "2014"
            }
        },
        {
            name: "Quel carburant j'utilisais ?",
            reponses: {
                rep1: "Du Sans Plomb",
                rep2: "Du diesel",
                rep3: "Du diesel et de l'huile végétale"
            }
        },
        {
            name: "A quelle heure on s'est rencontré ?",
            reponses: {
                rep1: "Le soir",
                rep2: "Le matin",
                rep3: "A midi"
            }
        },
        {
            name: "A quoi ressemblait ma caisse ?",
            reponses: {
                rep1: "Elle était noire avec vitres teintées et balais essuie glace pété",
                rep2: "Elle était rouge et petite",
                rep3: "C'était un 4x4 gris avec roue à l'arrière"
            }
        },
    ];

    return (
        <>
            <div className="text">
                <p>Salut, j'ai pas eu les coucouniettes de te demander ton numéro, alors c'est plus simple de faire un site et espérer que tu voies cette affiche.</p>
                <p>Notre rencontre était naturelle, c'était chouette ! Si tu penses de même, tu as juste à répondre correctement à toutes ces questions et remplir le champ vide de la manière dont tu le souhaites.
                Le text que tu auras écrit me sera transmit une fois validation faite.
                </p>
                <p>☺️</p>
                <p>Attention : Il n'y a que lorsque toutes les réponses sont correctes que je reçois une notification.</p>
                <p>"Bon chance !"</p>
            </div>

            <br />

            <div className="App">
                <CounterCheckContext.Provider value={[counterCheck, setCounterCheck]} >
                    <CheckContext.Provider value={[check, setCheck]}>
                        {
                            listQuestion.map(question => {
                                return (
                                    <Question name={question.name} reponses={question.reponses} key={question.name} />
                                )
                            })
                        }

                        <div className="line"></div>
                        <br/>
                        <Submit />
                    </CheckContext.Provider>
                </CounterCheckContext.Provider>
            </div>

            <br/>
            <br/>
            <br/>

        </>
    )
}