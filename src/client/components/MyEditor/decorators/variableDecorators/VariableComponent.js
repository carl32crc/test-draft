import React from 'react'

export const VariableComponent = ({children, contentState, entityKey}) => 
  <var style={{color: 'red'}} className="variable" title={contentState.getEntity(entityKey).getData().id}>{children}</var>