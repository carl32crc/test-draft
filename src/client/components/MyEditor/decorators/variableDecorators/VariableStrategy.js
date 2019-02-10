
export const VariableStrategy = type => {
  const findEntitiesOfType = (contentBlock, callback, contentState) => {
    contentBlock.findEntityRanges(character => {
      const entityKey = character.getEntity()
      return (
        entityKey !== null &&
          contentState.getEntity(entityKey).getType() === type
      )
    }, callback)
  }
  return findEntitiesOfType
}