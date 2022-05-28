const CHECK_NUMBER_ONE = "check number one";
const CHECK_NUMBER_TWO = "check number two";
const ADD_CLICK_HANDLER = 'add click handler';
const REMOVE_HANDLER = 'remove handler';
const SENT_CHECK_NUMBER = 'sent check number';
const CHANGE_ERROR = 'change error';
const SET_VALUE_FROM_LOCAL_STORAGE = 'set value from local storage';

export type InitialCountStateType = typeof initialState

const initialState: CountType = {
    checkNumberMax: 0,
    checkNumberStart: 0,
    error: false,
    nuance: true,
    click: 0

}
export type CountType = {
    checkNumberMax: number
    checkNumberStart: number
    error: boolean
    nuance: boolean
    click: number
}
type ActionsType = ReturnType<typeof checkNumberOneAC>
    | ReturnType<typeof checkNumberTwoAC>
    | ReturnType<typeof addClickHandlerAC>
    | ReturnType<typeof removeHandlerAC>
    | ReturnType<typeof sentCheckNumberAC>
    | ReturnType<typeof changeErrorAC>
    | ReturnType<typeof setValueFromLSTC>;


export const checkNumberOneAC = (value: number) => ({type: "check number one", value}) as const
export const checkNumberTwoAC = (value: number) => ({type: "check number two", value}) as const
export const addClickHandlerAC = () => ({type: 'add click handler'}) as const
export const removeHandlerAC = () => ({type: 'remove handler'}) as const
export const sentCheckNumberAC = () => ({type: 'sent check number'}) as const
export const changeErrorAC = (value:boolean) => ({type: 'change error',value}) as const
export const setValueFromLSTC=(value:number)=>({type:'set value from local storage',value}) as const

export const countReducer = (state: InitialCountStateType = initialState, action: ActionsType): InitialCountStateType => {
    switch (action.type) {
        case CHECK_NUMBER_ONE: {
            let newNumber = action.value
            return {...state, checkNumberMax: newNumber}
        }
        case CHECK_NUMBER_TWO: {
            let newNumber = action.value
            return {...state, checkNumberStart: newNumber}
        }
        case  ADD_CLICK_HANDLER: {
            return {...state, click: ++state.click}
        }
        case  REMOVE_HANDLER: {
            let lastStartNumber = localStorage.getItem('startNumber')
            if (lastStartNumber)
            return {...state, click: JSON.parse(lastStartNumber)}
            return state
        }
        case  SENT_CHECK_NUMBER: {
            if (state.checkNumberStart >= state.checkNumberMax) {
                return {...state, error: true, nuance: !state.nuance}
            } else {
                localStorage.setItem('startNumber', JSON.stringify(state.checkNumberStart))
                localStorage.setItem('MaxNumber', JSON.stringify(state.checkNumberMax))
                let lastStartNumber = localStorage.getItem('startNumber')
                if (lastStartNumber)
                return {...state,click:JSON.parse(lastStartNumber), nuance: !state.nuance}
            }
            return state
        }
        case CHANGE_ERROR:{
            return {...state,error:action.value}
        }
        case SET_VALUE_FROM_LOCAL_STORAGE:{
            return {...state,click:action.value}
        }
        default:
            return state
    }
}

