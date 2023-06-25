import React from "react";
import { Wrapper } from './listQuestionStyle';
import Data from "../Data";
import Question from "./Question";


const ListQuestion = (props) => {

    return (
        <Wrapper>
            {

                Data.map(
                    (item, index) => {
                        return (
                            <Question
                                selectOnChange={props.selectOnChange}
                                num={index + 1}
                                idQuestion={index + 1}
                                question={item.question}
                                image={item.image}
                                A={item.A}
                                B={item.B}
                                C={item.C}
                                D={item.D}
                            />
                        )
                    }
                )
            }
        </Wrapper>

    )
}

export default ListQuestion;
