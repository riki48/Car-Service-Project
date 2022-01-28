import { useDispatch } from 'react-redux'
import { setDisplayToWorksAction, setDisplayToSymptomsAction, setDisplayToNextAction, setQuestionAction, setPrevIdAction, setSelectedTypeToSymptomsAction, setSelectedTypeToWorksAction, popSequenceAction } from '../../../store/wizardReducer'
import cl from './Navbar.module.css'
import { useSelector } from 'react-redux'

function Navbar(){
    const dispatch = useDispatch()
    const question = useSelector(state => state.wizard.question)
    const prevId = useSelector(state => state.wizard.prevId)
    const selectedType = useSelector(state => state.wizard.selectedType)
    const wizardWorks = useSelector(state => state.wizard.wizardWorks)
    const wizardSymptoms = useSelector(state => state.wizard.wizardSymptoms)
    const sequence = useSelector(state => state.wizard.sequence)
    const symptoms = (e) => {
        dispatch(setDisplayToSymptomsAction())
        dispatch(setSelectedTypeToSymptomsAction())
        dispatch(setQuestionAction(''))

    }
    const works = (e) => {
        dispatch(setDisplayToWorksAction())
        dispatch(setQuestionAction(''))
        dispatch(setSelectedTypeToWorksAction())
    }
    const goBack = (e) => {
        let flag = selectedType == "works"
        
        dispatch(popSequenceAction())
        if(!prevId){
                flag?
                dispatch(setDisplayToWorksAction())
            :
                dispatch(setDisplayToSymptomsAction())
        }
        else dispatch(setDisplayToNextAction(prevId))
        if(flag) {
            const wizard = wizardWorks.find(e => e.id == prevId)

            dispatch(setPrevIdAction(wizard?.parentId))
            dispatch(setQuestionAction(wizard?.question))
        }
        else {
            const wizard = wizardSymptoms.find(e => e.id == prevId)
            dispatch(setPrevIdAction(wizard?.parentId))
            dispatch(setQuestionAction(wizard?.question))
        }
       
        
    }
    console.log(prevId);
    return(
        <div className={cl.wrap}>
            <div onClick={e => goBack()} className={cl.back__btn}>
                <svg>
                    <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'></path>
                </svg>
            </div>
            {
                question?
                <h1>{question}</h1>
                :
                <h1>Какой узел автомобиля нуждается в ремонте?</h1> 
            }
            <h1> {sequence.join('=>')}</h1>
            <div className={cl.btns_wrap}>
                <div className={cl.selector}>
                    <button onClick={(e)=>works(e)} className={cl.selector__item}>Выбрать услуги</button>
                    <button onClick={(e)=>symptoms(e)} className={cl.selector__item}>Описать симптомы</button>
                   
                </div>
            </div>
        </div>
    )
}
export default Navbar