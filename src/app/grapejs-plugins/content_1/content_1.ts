import * as grapesjs from "grapesjs" ;
import loadComponents from './components';
import loadBlocks from './blocks';

export default grapesjs.plugins.add('content_1', (editor,  opts = {}) => {

  const options = { ...{
    // default options
  },  ...opts };
 
  // Add blocks
  loadBlocks(editor, options);

  // Add components
  // editor.on('load', () => loadComponents(editor, options));
});
