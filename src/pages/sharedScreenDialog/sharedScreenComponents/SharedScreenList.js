import React, { memo } from 'react'
import { List } from "@material-ui/core";
import SharedScreenListItem from "./SharedScreenListItem";
import ShareDestinationItem from './shareDestinationItem/ShareDestinationItem';
import ShareKidsItem from './shareChildrenItem/ShareKidsItem';
import mockData from '../../../data/mock/mockData';
const SharedScreenList = ({
  classrooms,
  kids,
  dynamicTags,
  setDestination,
  setShareReportsClassroom,
  setShareReportsKids,
  setDynamicTags,
  setShareReportsTag,
  }) => {

  React.useEffect(()=>{
    setShareReportsClassroom(mockData.sharedPageClass.tags);
    setShareReportsKids(mockData.sharedPageChildren);
    setDynamicTags(mockData.sharedPage);
  },[])

  return (
    <List>
      <ShareDestinationItem  setDestination={setDestination}/>
      {classrooms && <SharedScreenListItem title="Class" tags={classrooms} setTag={setShareReportsTag}/>}
      {kids && <ShareKidsItem setTag={setShareReportsTag} tags={kids}/>}
      {dynamicTags && dynamicTags.map((val, index) => (
        <SharedScreenListItem setTag={setShareReportsTag} key={index} title={val.title} tags={val.tags} />
      ))}
    </List>
  );
};

export default memo(SharedScreenList);
