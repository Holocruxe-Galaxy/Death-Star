// ** React Imports
import { SyntheticEvent, useState } from 'react';

// ** MUI Imports
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';

// ** Icon Imports
import Icon from 'src/@core/components/icon';

interface Props {
  direction: 'ltr' | 'rtl';
}

const TreeViewControlled = ({ direction }: Props) => {
  // ** States
  const [expanded, setExpanded] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (event: SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event: SyntheticEvent, nodeIds: string[]) => {
    setSelected(nodeIds);
  };

  const ExpandIcon =
    direction === 'rtl' ? 'mdi:chevron-left' : 'mdi:chevron-right';

  return (
    <TreeView
      expanded={expanded}
      selected={selected}
      sx={{ minHeight: 240 }}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
      defaultExpandIcon={<Icon icon={ExpandIcon} />}
      defaultCollapseIcon={<Icon icon="mdi:chevron-down" />}
    >
      <TreeItem nodeId="1" label="Applications">
        <TreeItem nodeId="2" label="Calendar" />
        <TreeItem nodeId="3" label="Chrome" />
        <TreeItem nodeId="4" label="Webstorm" />
      </TreeItem>
      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="6" label="MUI">
          <TreeItem nodeId="7" label="src">
            <TreeItem nodeId="8" label="index.js" />
            <TreeItem nodeId="9" label="tree-view.js" />
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
};

export default TreeViewControlled;
