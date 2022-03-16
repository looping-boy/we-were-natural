import React, { useContext } from "react";
import Radio from './Radio'
import styled from "styled-components";
import { CheckContext, CounterCheckContext } from "./Questions"


const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Question = ({ name, reponses, answer }) => {
    const [check, setCheck] = useContext(CheckContext)
    const [counterCheck, setCounterCheck] = useContext(CounterCheckContext)

    const handleParentClick = (e) => {
        setCheck(true);
        setCounterCheck(counterCheck + 1);
    };

    const handleClicked = (letter) => {
        answer(letter);
        //console.log(letter);
    }

    return (
        <>
        <div className="line"></div>
            <Container className = "container" onClick={() => handleParentClick()}>
                <div className="questionLeft">
                    <h1>{name}</h1>
                </div>
                <div className="answerRight">
                    <Radio name={name} letter="A" clicked={() => {handleClicked("A")}} > {reponses.rep1} </Radio>
                    <Radio name={name} letter="B" clicked={() => {handleClicked("B")}}> {reponses.rep2} </Radio>
                    <Radio name={name} letter="C" clicked={() => {handleClicked("C")}}> {reponses.rep3} </Radio>
                </div>
            </Container>
            
        </>
    )
}

export default Question;