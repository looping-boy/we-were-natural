import React, { useContext } from "react";
import Radio from './Radio'
import styled from "styled-components";
import { CheckContext, CounterCheckContext } from "./Questions"


const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Question = ({ name, reponses }) => {
    const [check, setCheck] = useContext(CheckContext)
    const [counterCheck, setCounterCheck] = useContext(CounterCheckContext)

    const handleParentClick = (e) => {
        console.log("Parent clicked")
        setCheck(true);
        setCounterCheck(1)
    };

    return (
        <>
        <div className="line"></div>
            <Container className = "container" onClick={() => handleParentClick()}>
                <div className="questionLeft">
                    <h1>{name}</h1>
                </div>
                <div className="answerRight">
                    <Radio name={name} letter="A" > {reponses.rep1} </Radio>
                    <Radio name={name} letter="B"> {reponses.rep2} </Radio>
                    <Radio name={name} letter="C"> {reponses.rep3} </Radio>
                </div>
            </Container>
            
        </>
    )
}

export default Question;