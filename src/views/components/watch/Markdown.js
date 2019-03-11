import React from 'react';
import ReactMde, { ReactMdeTypes } from 'react-mde';
import * as Showdown from 'showdown';
import "react-mde/lib/styles/css/react-mde-all.css";
class Markdown extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          value: "**Hello world!!!**"
        };
        this.converter = new Showdown.Converter({
          tables: true,
          simplifiedAutoLink: true,
          strikethrough: true,
          tasklists: true
        });
      }
    
      handleValueChange = (value) => {
        this.setState({ value });
      };
    
      render () {
        return (
          <ReactMde
          layout="horizontal"
          editorState={this.state.mdeState}
            generateMarkdownPreview={markdown =>
              Promise.resolve(this.converter.makeHtml(markdown))
            }
            onChange={(mdeState: ReactMdeTypes.MdeState) => {
              this.setState({ mdeState });
            }}
        />

        );
      }
}
export default Markdown;