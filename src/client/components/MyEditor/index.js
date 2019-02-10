import React, { Component } from 'react'
import { Editor, EditorState, Modifier, SelectionState } from 'draft-js'

import { decorator } from './decorators'

import { ListOfVariables } from './../ListOfVariables'

import { variables } from './../../data'

const style = {
  boxSizing: 'border-box',
  border: '1px solid #ddd',
  cursor: 'text',
  padding: '16px',
  borderRadius: '2px',
  marginBottom: '2em',
  minHeight: '140px',
  boxShadow: 'inset 0px 1px 8px -3px #ABABAB',
  background: '#fefefe'
}

const getCurrentBlock = editorState => {
  if (editorState.getSelection) {
    const selectionState = editorState.getSelection()
    const contentState = editorState.getCurrentContent()
    const block = contentState.getBlockForKey(selectionState.getStartKey())
    return block
  }
}

const getCaretPosition = (editorState) => {
  return editorState.getSelection().getAnchorOffset()
}

export class MyEditor extends Component {

  state = {
    editorState: EditorState.createEmpty(decorator),
    open: false
  };

  openPanelVariables = () => {
    this.setState({open: !this.state.open})
  }

  onChange = (editorState) => {
    setTimeout(() => {
      this.setState({
        editorState
      })
    }, 0)
  };

  getVariable = (variable) => {
    const { editorState } = this.state
    const contentState = editorState.getCurrentContent()
    const contentStateWithEntity = contentState.createEntity(
      'VARIABLE',
      'IMMUTABLE',
      variable
    )
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    const block = getCurrentBlock(editorState)
    const blockKey = block.getKey()
    const variableText = variable.text
    const contentStateWithReplacedText = Modifier.replaceText(
      contentStateWithEntity,
      new SelectionState({
        anchorKey: blockKey,
        anchorOffset: getCaretPosition(editorState),
        focusKey: blockKey,
        focusOffset: getCaretPosition(editorState),
        isBackward: false,
        hasFocus: true
      }),
      variableText,
      null,
      entityKey
    )
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithReplacedText,
      selection: new SelectionState({
        anchorKey: blockKey,
        anchorOffset: getCaretPosition(editorState) + variableText.length,
        focusKey: blockKey,
        focusOffset: getCaretPosition(editorState) + variableText.length,
        isBackward: false,
        hasFocus: true
      })
    })

    this.onChange(newEditorState)
    
  }


  render() {

    return (
      <div style={{...style}}  onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          ref={(element) => { this.editor = element }}
        />

        <button onClick={this.openPanelVariables} >Variables</button>
        
        {this.state.open && 
        
        <ul>
          {variables.map(variables => {
            return <ListOfVariables
              key={variables.id}
              variables={variables}
              getVariable={this.getVariable}
            />
          })}
        </ul>
        }
      </div>
    )
  }
}
