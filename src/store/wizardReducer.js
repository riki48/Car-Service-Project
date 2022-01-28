const defaultState = {
    wizardWorks: [],
    display: [],
    wizardSymptoms: [],
    selectedType: "works",
    selectedJobs: [],
    question: "Какой узел автомобиля нуждается в ремонте?",
    prevId: undefined,
    sequence: [],
    stage: "select"
}
const ADD_WORKS = "ADD_WORKS"
const ADD_SYMPTOMS = "ADD_SYMPTOMS"
const SET_DISPLAY_TO_WORKS = "SET_DISPLAY_TO_WORKS"
const SET_DISPLAY_TO_SYMPTOMS = "SET_DISPLAY_TO_SYMPTOMS"
const SET_DISPLAY_TO_NEXT = "SET_DISPLAY_TO_NEXT"
const SET_SELECTED_TYPE = "SET_SELECTED_TYPE"
const SET_SELECTED_TYPE_TO_WORKS = "SET_SELECTED_TYPE_TO_WORKS"
const SET_SELECTED_TYPE_TO_SYMPTOMS = "SET_SELECTED_TYPE_TO_SYMPTOMS"
const SET_PREV_ID = "SET_PREV_ID"
const SET_QUESTION = "SET_QUESTION"
const ADD_SELECTED_JOB = "ADD_SELECTED_JOB"
const WORKS = "works"
const SYMPTOMS = "symptoms"
const PUSH_SEQUENCE = "PUSH_SEQUENCE"
const POP_SEQUENCE = "POP_SEQUENCE"
const CLEAR_SEQUENCE = "CLEAR_SEQUENCE"
const SET_STAGE = "SET_STAGE"
const DELETE_JOB = "DELETE_JOB"


export const wizardReducer = (state = defaultState, action) => {
    switch (action.type) {
    case ADD_WORKS:
        return {...state, wizardWorks: [...state.wizardWorks, ...action.payload]}
    case ADD_SYMPTOMS:
        return {...state, wizardSymptoms: [...state.wizardSymptoms, ...action.payload]}
    case SET_DISPLAY_TO_WORKS:
        return {...state, display: [...state.wizardWorks.filter(e=>e.parentId == null)]}
    case SET_DISPLAY_TO_SYMPTOMS:
        return {...state, display: [...state.wizardSymptoms.filter(e=>e.parentId == null)]}
    case SET_DISPLAY_TO_NEXT:
        // console.log(state.wizardWorks.find(e=>e.id == action.payload).children);
        const res = state.selectedType == WORKS
            ? 
             state.wizardWorks.find(e=>e.id == action.payload).children
            :
             state.wizardSymptoms.find(e=>e.id == action.payload).children
         return {...state, display: [...res] }
    case SET_SELECTED_TYPE_TO_WORKS:
        return {...state, selectedType: WORKS}
    case SET_SELECTED_TYPE_TO_SYMPTOMS:
        return {...state, selectedType: SYMPTOMS}
    case SET_PREV_ID:
        return {...state, prevId: action.payload}
    case SET_QUESTION:
        return {...state, question: action.payload}
    case ADD_SELECTED_JOB:
        const job = action.payload.join("=> ")
        if(state.selectedJobs.indexOf(job) == -1)
            return {...state, selectedJobs: [...state.selectedJobs, action.payload.join("=> ")]}
        else return {...state}
    case PUSH_SEQUENCE:
        return {...state, sequence: [...state.sequence, action.payload]}
    case POP_SEQUENCE:
        state.sequence.pop()
        return {...state, sequence: [...state.sequence] }
    case CLEAR_SEQUENCE: 
        return {...state, sequence: [] }
    case SET_STAGE:
        return {...state, stage: action.payload}
    case DELETE_JOB:
        state.selectedJobs.splice(action.payload, 1)
        return {...state, selectedJobs: [...state.selectedJobs]}
    default:
        return state;
    }
}
// Поменять set selected на объект
export const addWorksAction = (payload) => ({type: ADD_WORKS, payload})
export const addSymptomsAction = (payload) => ({type: ADD_SYMPTOMS, payload})
export const setDisplayToSymptomsAction = () => ({type: SET_DISPLAY_TO_SYMPTOMS, })
export const setDisplayToWorksAction = () => ({type: SET_DISPLAY_TO_WORKS })
export const setDisplayToNextAction = (payload) => ({type: SET_DISPLAY_TO_NEXT, payload})
export const setSelectedTypeToSymptomsAction = () => ({type: SET_SELECTED_TYPE_TO_SYMPTOMS})
export const setSelectedTypeToWorksAction = () => ({type: SET_SELECTED_TYPE_TO_WORKS})
export const setPrevIdAction = (payload) => ({type: SET_PREV_ID, payload})
export const setQuestionAction = (payload) => ({type: SET_QUESTION, payload})
export const addSelectedJobAction = (payload) => ({type: ADD_SELECTED_JOB, payload})
export const popSequenceAction = () => ({type: POP_SEQUENCE})
export const pushSequenceAction = (payload) => ({type: PUSH_SEQUENCE, payload})
export const clearSequenceAction = () => ({type: CLEAR_SEQUENCE})
export const setStageAction = (payload) => ({type: SET_STAGE, payload}) 
export const deleteJobAction = (payload) => ({type: DELETE_JOB, payload})
