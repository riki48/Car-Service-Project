import cl from './Tile.module.css'
function Tile ({ name, imgSrc, further, id }) {

    return(
        <div onClick={(e) => further(e, id)} className={cl.wrap}>
            <div className={cl.root}>
                <div className={cl.item_name}>
                    <img src={imgSrc} alt="" />
                </div>
                <div className={cl.item_text}>{name}</div>
            </div>
        </div>
    )
}
export default Tile