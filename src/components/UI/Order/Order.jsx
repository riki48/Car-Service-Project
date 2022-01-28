import cl from './Order.module.css'
function Order({item, index, deleteJob}){
    console.log(item);
    return(
        
        <div className={cl.order__wrap}>
            <div>
                <h1>{index + 1}</h1>
            </div>
            <div>
                <h3>{item}</h3>
            </div>
            <div>
                <button onClick={e => deleteJob(index)} style={{width: "40px", height: "30px", backgroundColor: "whitesmoke", color: "red"}}>
                    <svg>
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}
export default Order;