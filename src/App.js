import { useQuery, useLazyQuery } from "@apollo/client";
import { useEffect , useMemo, useReducer} from "react";
import { useDispatch, useSelector,  } from "react-redux";
import { WIZARD_SYMPTOMS, WIZARD_WORKS } from "./query/wizard";
import {useState} from 'react'
import TileList from "./components/UI/TileList/TileList";
import { addWorksAction, addSymptomsAction, setDisplayToWorksAction } from "./store/wizardReducer";
import Search from "./components/UI/Search/Search";
import SelectMenu from "./components/selectMenu";
import OrderList from "./components/OrderList";
import './App.css'



function App(){
  const dispatch = useDispatch()
  const { loading: worksLoading, error: worksErr, data: worksData, refetch } = useQuery(WIZARD_WORKS)
  const { loading: symptomsLoading, error: symptomsErr, data: symptomsData  } = useQuery(WIZARD_SYMPTOMS)
  const phase = useSelector(state => state.wizard.stage)
  const works = useSelector(state => state.wizard.wizardWorks)
  const jobs = useSelector(state => state.wizard.selectedJobs)

  useEffect(async ()=>{
    if(worksData) {
      console.log(worksData.wizardWorks);
      dispatch(addWorksAction(worksData.wizardWorks))
      dispatch(setDisplayToWorksAction())
    }
  },[worksLoading])
  useEffect(()=>{
    if(symptomsData) {
      console.log(symptomsData.wizardSymptoms);

      dispatch(addSymptomsAction(symptomsData.wizardSymptoms))
    }
  },[symptomsLoading])
  
    return(
      <div style={{display: "flex", justifyContent: "flex-start"}}>
        {
          (worksLoading&&worksData)?<h1>Loading...</h1> :
          phase == "select" ? <SelectMenu/>: <OrderList/> 
          
        }
       
      </div>   
    )
    
}
export default App;