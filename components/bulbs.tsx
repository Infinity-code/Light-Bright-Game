"use client"
import { useMemo, useState } from "react";
import styles from "./bulb.module.css"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { begin, identity, moveColor} from "@/State/atom";


export function BulbsSet(){
    return <RecoilRoot>
        <BulbsScreen/>
    </RecoilRoot>
}


function BulbsScreen(){
    const mvColor=useRecoilValue(moveColor);
    const [entry,setEntry]=useRecoilState(begin);
    const id=useRecoilValue(identity);
    const array=useMemo(()=>{
        let i=0;
        let arr=[];
        for(i;i<500;i++){
            arr.push(<Bulb id={i} key={i}/>);
        }
        return arr;
    },[]);

    return(
        <>
            <div className="flex justify-center items-center title text-3xl border-b border-pink-400 gap-10 pb-5 oran">
            Light-Bright Colour Changing Circles
            <button className=" btn text-xl border border-pink-400 h-[50px] w-[200px] rounded-md" onClick={()=>{
                const list=id?.classList;
                list?.replace(list[0],styles["default"])
            }}> RESET COLOUR</button>
            <button className=" btn text-xl border border-pink-400 h-[50px] w-  [200px] rounded-md p-2" onClick={()=>{
                let i=0;
                let item;
                for(i;i<array.length;i++){
                    item=document.getElementById("container")?.children.item(i);
                    item?.classList.replace(item.classList[0],styles["default"]);
                }
                    
            }}>RESET ALL</button>
            </div>
            <div className="h-fit">
                <div id="container" className="w-full h-full container" 
                    onMouseOver={(e)=>{
                        const draw=document.elementFromPoint(e.clientX, e.clientY);
                        if(draw?.className.includes("bulb") && entry){
                            e.preventDefault();
                            const list=draw.classList;
                            if(mvColor!=="default"){
                                const res=draw.classList.replace(list[0],styles[mvColor])
                                // console.log(draw);
                            }
                        }
                
                    }}
                    onMouseUp={(e)=>{
                        setEntry(false);
                    }}
            
                >
                {array}
                </div>
            </div>
        </>
        
    )
}


export function  Bulb({id}:{id:number}){
    const [bulbColor,setBulbColor]=useState("default");
    const setMvColor=useSetRecoilState(moveColor);
    const setBegin=useSetRecoilState(begin);
    const setId=useSetRecoilState(identity);

    const colors=useMemo(()=>{
        return ["purple","red","orange","green","yellow","cyan","aqua","azure","beige","cornflowerblue"];
    },[]);
    return <div className={`${styles[bulbColor]} w-[36px] h-[36px] rounded-[50%] border border-[#320036] bulb`} id={`${id}`}  onDoubleClick={(e)=>{
        e.preventDefault();
        setBulbColor("default");
    }} 

    onMouseDown={(e)=>{
        e.preventDefault();
        
        const col=colors[Math.floor(Math.random()*colors.length)]
        setBulbColor(col);
        setMvColor(col);
        setBegin(true);
        setId(e.currentTarget);
    }}
    
     onMouseUp={(e)=>{
            setBegin(false);
        }}
    >
    </div>
}

