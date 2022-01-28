import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addSelectedJobAction, clearSequenceAction, popSequenceAction, pushSequenceAction, setDisplayToNextAction, setDisplayToWorksAction, setPrevIdAction, setQuestionAction, setStageAction } from "../../../store/wizardReducer"
import Loader from "../Loader/Loader"
import Tile from "../Tile/Tile"
import cl from './TileList.module.css'
function TileList(){
    const dispatch = useDispatch()
    const display = useSelector(state => state.wizard.display)
    const selectedType = useSelector(state => state.wizard.selectedType)
    const wizardWorks = useSelector(state => state.wizard.wizardWorks)
    const wizardSymptoms = useSelector(state => state.wizard.wizardSymptoms)
    const sequence = useSelector(state => state.wizard.sequence)
    
    const further = (e, id) => {
        
        const wizard = selectedType == "works" 
        ?           
        wizardWorks.find(e => e.id == id)
        :
        wizardSymptoms.find(e => e.id == id)
        if(wizard.children.length == 0){
            dispatch(addSelectedJobAction(sequence))
            dispatch(clearSequenceAction())
            dispatch(setQuestionAction(""))
            dispatch(setStageAction("menu"))
            dispatch(setDisplayToWorksAction())
        }
        else
        {
            dispatch(pushSequenceAction(wizard.name))
            dispatch(setPrevIdAction(wizard.parentId))
            dispatch(setQuestionAction(wizard.question))
            dispatch(setDisplayToNextAction(id))
        }
    }
    const toJobs = () => dispatch(setStageAction('menu'))

    return(
        
        display? 
        <div className={cl.wrap}>
            {display.map(e => <Tile further={further} key={e.id} id={e.id} name={e.name} imgSrc={e?.image?.file?.url} />)}
            
        </div>
        :   
        <Loader/>
    )
}
export default TileList


