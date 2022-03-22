import {DEC_COUNT, INC_COUNT} from './actionType'

const incCount =(payload)=>({
    type:INC_COUNT,
    payload
})

const decCount=(payload)=>({
    type:DEC_COUNT,
    payload
})

export {incCount,decCount}