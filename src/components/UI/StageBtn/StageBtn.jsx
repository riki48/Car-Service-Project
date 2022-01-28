import { useDispatch, useSelector } from "react-redux"
import { clearSequenceAction, setQuestionAction, setStageAction } from "../../../store/wizardReducer"
function StageBtn({stage}){
    const dispatch = useDispatch()
    const jobs = useSelector(state => state.wizard.selectedJobs)
    switch (stage) {
        case "select":
            if(jobs.length == 0) return <div></div>
            return (
            <div>
                <button onClick={()=> dispatch(setStageAction("menu"))}>
                    К списку выбранных услуг
                </button>
            </div>)  
        case "menu":
            return(
                <div>
                    <button onClick={()=> {
                        dispatch(setStageAction("select"))
                        dispatch(clearSequenceAction())
                   }}>
                        Добавить услуги
                    </button>
                </div>
            )
        default:
            break;
    }
}
export default StageBtn