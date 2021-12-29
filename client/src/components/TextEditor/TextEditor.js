import React, { Component} from 'react'
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw} from 'draft-js';
import draftToHtml from "draftjs-to-html"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class TextEditor extends Component {
    state= {
        editorState: EditorState.createEmpty(),
    }
    onEditorStateChange= (editorState)=> {
        this.setState({
            editorState,
        });
    }
    render(){
        const {editorState} = this.state;
        console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
        return (
            <div>
                <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange}
    />
        <textarea  hidden value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}>

        </textarea>
            </div>
        )
        }

}

export default TextEditor
