import React, { Component } from 'react'
import { Label, Icon } from 'semantic-ui-react'

class RecipeTag extends Component {

  render() {

    return (
        <div>
        {
            this.props.tags.map((tag, idx) => 
                <Label key={tag} as='a'
                    onClick={(e) => this.props.removeTag(idx)}>
                    <Icon name='tag' />
                    {tag}
                    <Icon name='delete' />
                </Label>
            )
        }
        </div>
    )
  }
}

export default RecipeTag