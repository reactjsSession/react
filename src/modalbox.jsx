function ModalBox(props){
 return(
    <>
    <div className="modal_title">
        <button>x</button>
        <h2>{props.title}</h2>

        <div className="Modal_body">
            {props.children}
        </div>

        <div className="modal_bottom">
            {props.footer}
        </div>
    </div>
    </>
 )
}

export default ModalBox