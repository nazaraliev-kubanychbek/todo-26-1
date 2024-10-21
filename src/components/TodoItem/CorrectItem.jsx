import { useState } from "react";

const CorrectItem = ({item, setKey}) => {
    const [text, setText] = useState(item.text);
    return (
        <div>
            <input type="text"
            value={text}
            onChange={(e) =>{
                setText(e.target.value)
            }}
            />
            <button>save</button>
            <button onClick={()=>{
                setKey('correct', item.id)
            }}>cancel</button>
        </div>
    );
}

export default CorrectItem;
