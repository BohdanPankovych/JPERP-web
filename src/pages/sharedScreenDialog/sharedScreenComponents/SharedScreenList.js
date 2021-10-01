import { List } from "@material-ui/core";
import SharedScreenListItem from "./SharedScreenListItem";

const SharedScreenList = ({ items }) => {
  return (
    <List>
      {items.map((val, index) => (
        <SharedScreenListItem key={index} title={val.title} tags={val.tags} />
      ))}
    </List>
  );
};

export default SharedScreenList;
