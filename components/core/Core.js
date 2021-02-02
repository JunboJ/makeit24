import constants from "../constants";
import { Calculation } from "./calculation/Calculation";

export class Core {
    static getSolutions(numberList) {
        console.log('get solution begin');
        const operators = constants.operatorTypes;
        let pointer = 0;
        console.log('pointer', pointer);
        if (numberList.length < 2) {
            return numberList;
        }
        while (pointer < numberList.length - 1) {
            console.log('###while loop pointer', pointer);
            for (let i = pointer; i < numberList.length - 1; i++) {
                const n1 = numberList[pointer];
                const n2 = numberList[i + 1];
                const rest = numberList.filter((value) => value !== n1 && value !== n2);
                for (const key in operators) {
                    console.log('[for loop 2 key]', key);
                    try {
                        let operatorLoopResult = [];
                        operatorLoopResult.push(
                            Calculation.do({ n1, n2, operator: operators[key] })
                        );
                        console.log('[for loop 2 try catch]', [...operatorLoopResult, ...rest]);
                        // return this.getSolutions([...operatorLoopResult, ...rest]);
                    } catch (e) {
                        // console.log("Error", e);
                    }
                }
            }
            pointer++;
        }
    }
}
