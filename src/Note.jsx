import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useSpring,animated} from 'react-spring';
import { useState } from 'react';
import {useDrag} from 'react-use-gesture';
function Note(props) {
    const postion=useSpring({x:0,y:0});
    const bindLogoPos=useDrag((params)=>{
        postion.x.set(params.offset[0]);
        postion.y.set(params.offset[1]);
    });
    const [par,setpar]=useState({title:props.title,newitem:props.newitem,id:props.id,type:props.type,borderSize:"1px solid black",shad:"",trans:"",bordColor:""});
    const highlighted=()=>{
        if(par.borderSize=="1px solid black"){
            setpar({
                title:props.title,
                newitem:props.newitem,
                id:props.id,
                borderSize:"5px solid black",
                bordColor:"rgba(249, 249, 249, 0.8)",
                trans:"scale(1.05)",
                shad:"rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px"

            })
        }
        else{
            setpar({
                title:props.title,
                newitem:props.newitem,
                id:props.id,
                borderSize:"1px solid black",
                bordColor:"",
                trans:"",
                shad:""
            })
        }
    }
    return(
        <animated.div {...bindLogoPos()} className="noteCard my-3 mx-3 card" style={{width: "18rem",
        borderRadius:"5px",
        x:postion.x,
        y:postion.y,
        border:par.borderSize,
        borderColor:par.bordColor,
        transform:par.trans,
        boxShadow:par.shad
        }}>
        <div className="card-body">
            <h5 className="card-title">{par.title}</h5>
            <p className="card-text"> {par.newitem}</p>
            <h6 className="card-text">{par.id}</h6>
            <button onClick={()=>props.deleteitem(props.index)} className="btn btn-primary">Delete <i class="fa fa-trash-o" aria-hidden="true"></i> </button>
            <button onClick={()=>highlighted()} className="btn btn-primary" style={{margin:"10px"}}>Highlight </button>
        </div>
       </animated.div>
    );
}
export default Note;