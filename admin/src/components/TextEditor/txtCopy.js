import React, {useState} from 'react'
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw} from 'draft-js';
import draftToHtml from "draftjs-to-html"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function TxtCopy ({value}) {


    const [editorState,setEditorState]=useState(EditorState.createEmpty());

   const  onEditorStateChange= (editorState)=> {
       console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
       value=draftToHtml(convertToRaw(editorState.getCurrentContent()))
       setEditorState(editorState)

    }
    const handleText=(e)=>{
        console.log(e.target.value)
    }
  
    
        return (
            <div>
                <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
    />
        <textarea  hidden name='value' onChange={handleText} value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}>

        </textarea>
            </div>
        )
        

}

export default TxtCopy
