import React, { Component} from 'react'
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw} from 'draft-js';
import draftToHtml from "draftjs-to-html"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class TextEditor extends Component {
    state= {
        editorState: EditorState.createEmpty(),
        textValue : ""
    }

    onEditorStateChange= (editorState)=> {
        this.setState({
            editorState,
        });

    }
    handleText=(e)=>{
     console.log(e.target.value)
    }
  
    render(){
        const {editorState} = this.state;
        return (
            <div>
                <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange}
    />
        <textarea  hidden name='value' onChange={this.handleText} value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}>

        </textarea>
            </div>
        )
        }

}

export default TextEditor
