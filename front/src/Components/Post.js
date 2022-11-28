import { Avatar } from "@material-ui/core";
import {React,useState} from "react";
import "./css/Post.css";
import ArrowDownwardOutlined from "@material-ui/icons/ArrowDownwardOutlined";
import ArrowUpwardOutlined from "@material-ui/icons/ArrowUpwardOutlined";
import RepeatOutlined from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlined from "@material-ui/icons/ChatBubbleOutlined";
import ShareOutlined from "@material-ui/icons/ShareOutlined";
import Close from "@material-ui/icons/Close";
import ReactQuill from "react-quill";
import MoreHorizOutlined from "@material-ui/icons/MoreHorizOutlined";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "react-quill/dist/quill.snow.css";
function Post(){
    const [isModalOpen,SetIsModalOpen]=useState(false)
    const close=(<Close/>)
    return(
        <div className="post">
<div className="post__info">
    <Avatar/>
    <h4>username</h4>
    <small>TimeStamp</small>
</div>
<div className="post__body">
    <div className="post__question">
    <p>
        This is a test question 
    </p>
    <button className="post__btnAnswer" onClick={()=>SetIsModalOpen(true)}>Answer</button>
    <Modal 
    open={isModalOpen} closeIcon={close} onClose={()=> SetIsModalOpen(false)} closeOnEsc center closeOnOverlayClick={false} styles={{overlay:{
        height:"auto"
    }}}
    >
        <div className="modal__question">
            <h1>This is test question</h1>
            <p>asked by {" "} <span className="name">username</span> {" "} on {" "} <span className="name">TimeStamp</span> </p> 
        </div>
        <div className="modal__answer">
            <ReactQuill placeholder="Enter your answer"/>
        </div>
        <div className="modal__button">
        <button className="cancle" onClick={()=> SetIsModalOpen(false)}>Cancel</button>
                        <button type="submit" className="add" >
                            Add Question
                        </button>
        </div>
    </Modal>
    </div>
</div>
<div className="post__footer">
    <div className="post__footerAction">
        <ArrowUpwardOutlined/>
        <ArrowDownwardOutlined/>
    </div>
    <RepeatOutlined/>
    <ChatBubbleOutlined/>
    <div className="post__footerLeft">
        <ShareOutlined/>
        <MoreHorizOutlined/>
    </div>
</div>
<p style={{
    color:"rgba(0,0,0,0.5)",
    fontSize:"12px",
    fontWeight:"bold",
    margin:"10px 0"
}}>1 Answer</p>
<div style={{margin:"5px 0px 0px 0px", padding:"5px 0px 0px 0px",borderTop:"1px solid lightgrey"}} className="post__answer">
    <div style={{display:"flex",flexDirection:"column",width:"100%",padding:"10px 5px", borderTop:"1px solid lightgray"}}className="post-answer-container">
        <div  style={{alignItems:"center",display:"flex",marginBottom:"10px",fontSize:"12px",fontWeight:600,color:"#888" }} className="post-answered">
            <Avatar/>
            <div className="post-info" style={{
                margin:"0px, 10px"
            }}>
                <p>username</p>
                <span>TimeStamp</span>
            </div>
        </div>
        <div className="post-answer">This is test answer</div>
    </div>
</div>
        </div>
    )
}
export default Post;